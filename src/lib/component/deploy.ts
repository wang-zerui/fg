import { ICredentials } from '../interface/profile';
import Client from '../client';
import * as core from '@serverless-devs/core';
import logger from '../../common/logger';
import * as HELP from '../help/deploy';
import Function from './function';
import { Trigger, TriggerDDS, TriggerCTS, TriggerAPIG, TriggerDIS, TriggerKAFKA, TriggerLTS, TriggerOBS, TriggerSMN, TriggerTIMER } from './trigger';
let CONFIGS = require('../config');
import StdoutFormatter from './stdout-formatter';
import { mark } from '../interface/profile';

const COMMAND: string[] = ['all', 'function', 'trigger', 'help'];

export default class deploy {
  public function: Function;
  public trigger: Trigger;

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
      core.help(HELP.DEPLOY);
      return { errorMessage: `Does not support ${subCommand} command` };
    }

    if (parsedData.help) {
      rawData[0] ? core.help(HELP[`deploy_${subCommand}`.toLocaleUpperCase()]) : core.help(HELP.DEPLOY);
      return { help: true, subCommand };
    }

    const props = inputs.props || {};

    const endProps = props;

    if (!endProps.endpoint) {
      throw new Error('Not fount endpoint');
    }

    const credentials: ICredentials = inputs.credentials;
    logger.debug(`handler inputs props: ${JSON.stringify(endProps)}`);
    const protocol = props.protocol || CONFIGS.defaultProtocol;
    const postEndpoint = props.endpoint || CONFIGS.defaultEndpoint;
    const endpoint = protocol + '://' + postEndpoint;
    logger.info('Using endpoing:' + endpoint);

    return {
      endpoint,
      credentials,
      subCommand,
      props: endProps,
      args: props.args,
      table: parsedData.table,
    };
  }
  constructor(credentials: ICredentials, projectId: string, endpoint: string) {
    Client.setFgClient(credentials, projectId, endpoint);
  }

  async deployFunction({ props, credentials }) {
    const protocol = props.protocol || CONFIGS.defaultProtocol;
    const postEndpoint = props.endpoint || CONFIGS.defaultEndpoint;
    const endpoint = protocol + '://' + postEndpoint;
    const functionClient = new Function({ endpoint, credentials });
    //检查函数是否被创建
    const isCreated = await functionClient.check(props.functionName);
    if (isCreated) {
      await functionClient.updateConfig(props);
      const res = await functionClient.updateCode(props);
      return res;
    } else {
      return await functionClient.create(props);
    }
  }

  async deployTrigger(functionBrn: string, props, credentials: ICredentials) {
    const target = functionBrn;
    const triggerClient = new Trigger(credentials);
    logger.info(`Using FunctionBrn: ${target}`);
    // 调用check&getRelationId
    if (props.trigger.source === 'bos') {
      if (!props.trigger.bucket) {
        throw new Error('Missing trigger bucket name.');
      }
      props.trigger.source = `bos/${props.trigger.bucket}`;
      logger.debug(props.trigger.source);
    }
    const { isNew, relationId } = await triggerClient.checkAndGetRelationId(target, props);

    const data = props.trigger.data || {};
    const source = props.trigger.source;
    if (isNew) {
      const IProps = {
        functionName: props.functionName,
        target,
        data,
        source,
      };
      return await triggerClient.create(IProps);
    } else {
      const IProps = {
        functionName: props.functionName,
        target,
        data,
        source,
        relationId,
      };
      return await triggerClient.update(IProps);
    }
  }

  public async deploy(props, subCommand, credentials) {
    if (subCommand === 'all') {
      const functionInfo = await this.deployFunction({ props, credentials });
      const functionBrn = props.trigger.target || functionInfo.functionBrn;
      if (props.trigger) {
        const triggerInfo = await this.deployTrigger(functionBrn, props, credentials);
        return functionInfo.res.concat(triggerInfo);
      } else {
        return functionInfo.res;
      }
    }
    if (subCommand === 'function') {
      return (await this.deployFunction({ props, credentials })).res;
    }
    if (subCommand === 'trigger') {
      const functionBrn = props.trigger.target || (await this.getBrn(props, credentials));
      return await this.deployTrigger(functionBrn, props, credentials);
    }
    if (subCommand === 'help') {
      core.help(HELP.DEPLOY);
    }
  }
}
