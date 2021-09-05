import { ICredentials } from '../interface/profile';
// import Client from '../client';
import * as core from '@serverless-devs/core';
import logger from '../../common/logger';
import * as HELP from '../help/remove';
// import Function from './function';
// import { Trigger } from './trigger';
let CONFIGS = require('../config');
import StdoutFormatter from './stdout-formatter';
import { mark } from '../interface/profile';
import { FunctionInputProps } from './functionGraph/model/CreateFunctionRequestBody';
import Client from '../client';
import { FunctionGraphClient } from './functionGraph/FunctionGraphClient';
import { getTriggerClient, Trigger } from './trigger';
import Function from './function';

const COMMAND: string[] = ['all', 'function', 'trigger', 'help'];

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
  static async handleInputs(inputs) {
    logger.debug(`inputs.props: ${JSON.stringify(inputs.props)}`);

    const parsedArgs: { [key: string]: any } = core.commandParse(inputs, {
      boolean: ['help'],
      alias: { help: 'h' },
    });

    const parsedData = parsedArgs?.data || {};
    const rawData = parsedData._ || [];
    await StdoutFormatter.initStdout();
    logger.info(StdoutFormatter.stdoutFormatter.using('access alias', inputs.access));
    logger.info(StdoutFormatter.stdoutFormatter.using('accessKeySecret', mark(String(inputs.credentials.AccessKeyID))));
    logger.info(StdoutFormatter.stdoutFormatter.using('accessKeyID', mark(String(inputs.credentials.SecretAccessKey))));

    const subCommand = rawData[0] || 'all';
    logger.debug(`deploy subCommand: ${subCommand}`);
    if (!COMMAND.includes(subCommand)) {
      core.help(HELP.REMOVE);
      return { errorMessage: `Does not support ${subCommand} command` };
    }

    if (parsedData.help) {
      rawData[0] ? core.help(HELP[`remove_${subCommand}`.toLocaleUpperCase()]) : core.help(HELP.REMOVE);
      return { help: true, subCommand };
    }

    const props = inputs.props || {};

    const endProps = props;

    if(!props.region){
      throw new Error("Region not found, please input one.")
    }

    const endpoint = CONFIGS.endpoints[props.region];
    if(!endpoint) {
      throw new Error(`Wrong region.`)
    }

    const projectId = props.projectId;
    if(!projectId){
      throw new Error(`ProjectId not found.`)
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
    
  async remove(props, subCommand) {
    if(props.function){
      const functionInputs: FunctionInputProps = {
        func_name: props.function.functionName,
        handler: "index.handler",
        memory_size: -1,
        timeout: -1,
        runtime: "Node.js8.10",
        pkg: "default",
        code_type: ""
      }
      this.functionClient = new Function(functionInputs);
    }
    if(props.trigger){
      this.triggerClient = getTriggerClient(props);
    }
    if (subCommand === 'all' || subCommand === 'function') {
      await this.functionClient.remove(this.client);
    }
    if (subCommand === 'trigger') {
      if(props.function.functionName){
        const functionUrn = props.trigger.functionUrn || (await this.functionClient.getFunctionUrn(this.client));
        this.triggerClient.functionUrn = functionUrn;
      }
      return await this.triggerClient.remove(this.client);
    }
    if (subCommand === 'help') {
      core.help(HELP.REMOVE);
    }
  }
}
