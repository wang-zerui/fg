import { ICredentials } from '../interface/profile';
import Client from '../client';
import * as core from '@serverless-devs/core';
import logger from '../../common/logger';
import * as HELP from '../help/remove';
import Function from './function';
import Trigger from './trigger';
let CONFIGS = require('../config');
import StdoutFormatter from './stdout-formatter';
import { mark } from '../interface/profile';

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

export default class remove {
  static async handleInputs(inputs) {
    logger.debug(`inputs.props: ${JSON.stringify(inputs.props)}`);

    const parsedArgs: { [key: string]: any } = core.commandParse(inputs, {
      boolean: ['help'],
      alias: { help: 'h' },
    });

    const parsedData = parsedArgs?.data || {};
    const rawData = parsedData._ || [];
    await StdoutFormatter.initStdout();
    logger.info(StdoutFormatter.stdoutFormatter.using('endpoint', inputs.props.endpoint));
    logger.info(StdoutFormatter.stdoutFormatter.using('access alias', inputs.access));
    logger.info(StdoutFormatter.stdoutFormatter.using('accessKeySecret', mark(String(inputs.credentials.AccessKeyID))));
    logger.info(StdoutFormatter.stdoutFormatter.using('accessKeyID', mark(String(inputs.credentials.SecretAccessKey))));

    const subCommand = rawData[0] || 'all';
    logger.debug(`remove subCommand: ${subCommand}`);
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

    const credentials: ICredentials = inputs.credentials;
    logger.debug(`handler inputs props: ${JSON.stringify(endProps)}`);
    const protocol = props.protocol || CONFIGS.defaultProtocol;
    const postEndpoint = props.endpoint || CONFIGS.defaultEndpoint;
    const endpoint = protocol + '://' + postEndpoint;
    return {
      endpoint,
      credentials,
      subCommand,
      props: endProps,
      args: props.args,
    };
  }

  constructor({ credentials }: { credentials: ICredentials }) {
    Client.setCfcClient(credentials);
  }

  async removeFunction({ endpoint, credentials, functionName }) {
    const functionClient = new Function({ endpoint, credentials });
    const isCreated = await functionClient.check(functionName);
    if (!isCreated) {
      throw new Error(`Function not found.`);
    }
    return functionClient.remove(functionName);
  }

  async removeTrigger({ credentials, props, functionBrn }) {
    let triggerClient = new Trigger(credentials);
    const target = functionBrn;
    const source = props.trigger.source;
    const data = props.trigger.data;
    if (props.trigger.relationId) {
      const relationId = props.trigger.relationId;
      const IProps = {
        target,
        data,
        source,
        relationId,
      };
      return await triggerClient.remove(IProps);
    } else {
      const checkRes = await triggerClient.checkAndGetRelationId(functionBrn, props);
      if (checkRes.isNew) {
        throw new Error('Trigger not found.');
      } else {
        const IProps = {
          target,
          data,
          source,
          relationId: checkRes.relationId,
        };
        return await triggerClient.remove(IProps);
      }
    }
  }

  async getBrn(props, credentials) {
    const protocol = props.protocol || CONFIGS.defaultProtocol;
    const postEndpoint = props.endpoint || CONFIGS.defaultEndpoint;
    const endpoint = protocol + '://' + postEndpoint;
    const functionClient = new Function({ endpoint, credentials });
    return await functionClient.getBrnByFunctionName(props.functionName);
  }

  async remove(endpoint, props, subCommand, credentials) {
    if (subCommand === 'all') {
      //const functionBrn = props.functionBrn || await this.getBrn(props, credentials);
      //await this.removeTrigger({credentials, props, functionBrn});
      const functionName = props.functionName;
      await this.removeFunction({ endpoint, credentials, functionName });
      // 测试发现，删除函数的同时，触发器也会被删除，所以此处省略删除trigger的代码
      const vm = core.spinner(`All triggers of function ${functionName} deleting...`);
      vm.succeed(`All triggers of function ${functionName} deleted`);
    }
    if (subCommand === 'function') {
      const functionName = props.functionName;
      return await this.removeFunction({ endpoint, credentials, functionName });
    }
    if (subCommand === 'trigger') {
      const functionBrn = props.trigger.target || (await this.getBrn(props, credentials));
      return await this.removeTrigger({ credentials, props, functionBrn });
    }
    if (subCommand === 'help') {
      core.help(HELP.REMOVE);
    }
  }
}
