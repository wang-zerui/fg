import { ICredentials } from "../interface/profile";
// import Client from '../client';
import * as core from "@serverless-devs/core";
import logger from "../../common/logger";
import * as HELP from "../help/remove";
// import Function from './function';
// import { Trigger } from './trigger';
let CONFIGS = require("../config");
import StdoutFormatter from "./stdout-formatter";
import { mark } from "../interface/profile";
import { FunctionInputProps } from "./functionGraph/model/CreateFunctionRequestBody";
import Client from "../client";
import { FunctionGraphClient } from "./functionGraph/FunctionGraphClient";
import { getTriggerClient, Trigger } from "./trigger";
import Function from "./function";
const { getState } = require("@serverless-devs/core");

const COMMAND: string[] = ["all", "function", "trigger", "help"];

// interface EndProps {
//   region: string;
//   assumeYes?: boolean;
//   onlyLocal?: boolean;
//   serviceName?: string;
//   functionName?: string;
//   qualifier?: string;
//   layerName?: string;
//   version?: string;
//   aliasName?: string;
// }

export default class Remove {
  public functionClient: Function;
  public triggerClient: Trigger;
  private client: FunctionGraphClient;

  /**
   * 处理输入
   * @param inputs {object} yaml输入参数
   * @returns 输入有关的关键信息: endpoint, projectId, credentials - sk/ak, subCommand - 子指令, props - yaml输入项, args - 输入参数, table - 是否展示中间表格
   * */
  static async handleInputs(inputs) {
    logger.debug(`inputs.props: ${JSON.stringify(inputs.props)}`);

    const parsedArgs: { [key: string]: any } = core.commandParse(inputs, {
      boolean: ["help"],
      alias: { help: "h" },
    });

    // 展示密钥信息
    const parsedData = parsedArgs?.data || {};
    const rawData = parsedData._ || [];

    // 排除不支持子命令
    const subCommand = rawData[0] || "all";
    logger.debug(`deploy subCommand: ${subCommand}`);
    if (!COMMAND.includes(subCommand)) {
      core.help(HELP.REMOVE);
      return { errorMessage: `Does not support ${subCommand} command` };
    }

    // 帮助子命令
    if (parsedData.help) {
      rawData[0]
        ? core.help(HELP[`remove_${subCommand}`.toLocaleUpperCase()])
        : core.help(HELP.REMOVE);
      return { help: true, subCommand };
    }

    // 其他子命令
    const props = inputs.props || {};

    const endProps = props;

    // TODO:使用validateProps验证
    // 三个必要信息
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
    await StdoutFormatter.initStdout();
    logger.info(
      StdoutFormatter.stdoutFormatter.using("access alias", inputs.access)
    );
    logger.info(
      StdoutFormatter.stdoutFormatter.using(
        "accessKeySecret",
        mark(String(credentials.AccessKeyID))
      )
    );
    logger.info(
      StdoutFormatter.stdoutFormatter.using(
        "accessKeyID",
        mark(String(credentials.SecretAccessKey))
      )
    );

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

  /**
   *
   * */
  constructor(credentials: ICredentials, projectId: string, endpoint: string) {
    const vm = core.spinner("Setting client...");
    Client.setFgClient(credentials, projectId, endpoint);
    vm.succeed("Settting client successfully.");
    this.client = Client.fgClient;
  }

  async remove(props, subCommand) {
    if (props.function) {
      // 删除函数只需要一个functionUrn
      const functionInputs: FunctionInputProps = {
        func_name: props.function.functionName,
        handler: "index.handler",
        memory_size: -1,
        timeout: -1,
        runtime: "Node.js8.10",
        pkg: "default",
        code_type: "",
      };
      this.functionClient = new Function(functionInputs);
    }
    if (props.trigger) {
      this.triggerClient = getTriggerClient(props);
    }
    if (subCommand === "all" || subCommand === "function") {
      await this.functionClient.remove(this.client);
    }
    if (subCommand === "trigger") {
      if (props.function.functionName) {
        //const functionUrn =
        //  props.trigger.functionUrn ||
        //  (await this.functionClient.getFunctionUrn(this.client));

        // 默认删除本地trigger
        this.triggerClient.functionUrn = functionUrn;
      }
      // triggerId默认删除
      return await this.triggerClient.remove(this.client);
    }
    if (subCommand === "help") {
      core.help(HELP.REMOVE);
    }
  }
}
