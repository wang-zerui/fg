import { ICredentials } from "../interface/profile";
import Client from "../client";
import * as core from "@serverless-devs/core";
import logger from "../../common/logger";
import * as HELP from "../help/deploy";
import Function from "./function";
import { Trigger, TriggerClientFactory } from "./trigger";
import StdoutFormatter from "./stdout-formatter";
import { mark } from "../interface/profile";
import { FunctionGraphClient } from "./functionGraph/FunctionGraphClient";
import { FunctionInputProps } from "./functionGraph/model/CreateFunctionRequestBody";

let CONFIGS = require("../config");
const COMMAND: string[] = ["all", "function", "trigger", "help"];

export default class deploy {
  public functionClient: Function;

  public triggerClient: Trigger;

  private client: FunctionGraphClient;

  static async handleInputs(inputs) {
    logger.debug(`inputs.props: ${JSON.stringify(inputs.props)}`);

    const parsedArgs: { [key: string]: any } = core.commandParse(inputs, {
      boolean: ["help"],
      alias: { help: "h" },
    });

    const parsedData = parsedArgs?.data || {};
    const rawData = parsedData._ || [];
    if(!inputs.credentials.AccessKeyID || !inputs.credentials.SecretAccessKey){
      throw new Error("Havn't set huaweicloud credentials. Run $s config add .");
    }
    await StdoutFormatter.initStdout();
    logger.info(
      StdoutFormatter.stdoutFormatter.using("access alias", inputs.credentials.Alias)
    );
    logger.info(
      StdoutFormatter.stdoutFormatter.using(
        "accessKeySecret",
        mark(String(inputs.credentials.AccessKeyID))
      )
    );
    logger.info(
      StdoutFormatter.stdoutFormatter.using(
        "accessKeyID",
        mark(String(inputs.credentials.SecretAccessKey))
      )
    );

    const subCommand = rawData[0] || "all";
    logger.debug(`deploy subCommand: ${subCommand}`);
    if (!COMMAND.includes(subCommand)) {
      core.help(HELP.DEPLOY);
      return { errorMessage: `Does not support ${subCommand} command` };
    }

    if (parsedData.help) {
      rawData[0]
        ? core.help(HELP[`deploy_${subCommand}`.toLocaleUpperCase()])
        : core.help(HELP.DEPLOY);
      return { help: true, subCommand };
    }

    const props = inputs.props || {};

    const endProps = props;

    if (!props.region) {
      throw new Error("Region not found, please input one.");
    }

    const endpoint = CONFIGS.endpoints[props.region];
    if (!endpoint) {
      throw new Error(`Wrong region.`);
    }

    const projectId = props.projectId;
    if (!projectId) {
      throw new Error(`ProjectId not found.`);
    }

    const credentials: ICredentials = inputs.credentials;

    logger.debug(`handler inputs props: ${JSON.stringify(endProps)}`);

    logger.info(`Using region:${props.region}`);

    return {
      endpoint,
      projectId,
      credentials,
      subCommand,
      props: endProps,
      args: props.args,
      table: parsedData.table,
    };
  }

  constructor(credentials: ICredentials, projectId: string, endpoint: string) {
    Client.setFgClient(credentials, projectId, endpoint);
    this.client = Client.fgClient;
  }

  async deployFunction(props) {
    const functionName = this.functionClient.getFunctionName();
    const vm1 = core.spinner(`Checking if ${functionName} exits...`);
    const isCreated = await this.functionClient.check(this.client);

    if (isCreated) {
      vm1.succeed(`Function ${functionName} is already online.`);
      await this.functionClient.getUrnByFunctionName(this.client);
      const updateConfigResponse = await this.functionClient.updateConfig(this.client);
      await this.functionClient.updateCode(props.function.code.codeUri);
      return updateConfigResponse;
    } else {
      vm1.succeed(`Function ${functionName} does not exitst.`);
      return await this.functionClient.create(props.function.code.codeUri);
    }
  }

  async deployTrigger(props, functionUrn: string) {
    this.triggerClient.functionUrn = functionUrn;
    return await this.triggerClient.create(this.client);
  }

  public async deploy(props, subCommand: string) {
    if (props.function) {
      const functionInputs: FunctionInputProps = {
        func_name: props.function.functionName,
        handler: props.function.handler,
        memory_size: props.function.memorySize,
        timeout: props.function.timeout,
        runtime: props.function.runtime,
        pkg: props.function.package,
        code_type: props.function.codeType,
        code_filename: props.function.filename,
        description: props.function.description,
        enterprise_project_id: props.function.enterpriseProjectId,
        xrole: props.function.xrole,
        app_xrole: props.function.appXrole,
        initializer_handler: props.function.initializerHandler,
        initializer_timeout: props.function.initializerTimeout,
      };
      this.functionClient = new Function(functionInputs);
    }
    if (props.trigger) {
      let triggerClientFactory = new TriggerClientFactory(props);
      this.triggerClient = triggerClientFactory.create();
    }

    if (subCommand === "all") {
      let functionInfo: any;
      let triggerInfo: any;
      let functionUrn: string;

      if (props.function) {
        functionInfo = await this.deployFunction(props);
        functionUrn = functionInfo.functionUrn;
      }

      if (props.trigger) {
        triggerInfo = await this.deployTrigger(props, functionUrn);
        if(!triggerInfo){
          return functionInfo.res;
        }
        return functionInfo.res.concat(triggerInfo);
      } else {
        if (!functionInfo.res) {
          return "Deployed noting.";
        }
        return functionInfo.res;
      }
    } else if (subCommand === "function") {
      if (!props.function) {
        throw new Error("Missing function configuration.");
      }
      return (await this.deployFunction(props)).res;
    } else if (subCommand === "trigger") {
      if (!props.trigger) {
        throw new Error("Missing trigger configuration.");
      }
      if (!props.function.functionName) {
        throw new Error(
          "Missing function name. Please enter your function name or provide the functionUrn in trigger configuration in s.yaml."
        );
      }
      const functionUrn =
        props.trigger.functionUrn ||
        (await this.functionClient.getFunctionUrn(this.client));
      return await this.deployTrigger(props, functionUrn);
    }
    if (subCommand === "help") {
      core.help(HELP.DEPLOY);
    }
  }
}
