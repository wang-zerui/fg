import * as core from '@serverless-devs/core';
import { ICredentials } from '../interface/profile';
import Client from '../client';
import { tableShow } from '../utils';
import logger from '../../common/logger';
import get from 'lodash.get';

interface IProps {
  target: string;
  source: string;
  relationId?: string;
  data?: object;
  functionName?: string;
}

const SOURCE_TYPES = ['dueros', 'duedge', 'bos', 'cfc-http-trigger/v1/CFCAPI', 'cdn', 'cfc-crontab-trigger/v1/'];
const DATAKEYS = {
  duedeg: [],
  bos: ['Resource', 'Status', 'EventType', 'Name'],
  cdn: ['EventType', 'Status'],
  'cfc-http-trigger/v1/CFCAPI': ['Method'],
  'cfc-crontab-trigger/v1/': ['Name', 'ScheduleExpression'],
};
const cdnEventTypes = [
  'CachedObjectsBlocked',
  'CachedObjectsPushed',
  'CachedObjectsRefreshed',
  'CdnDomainCreated',
  'CdnDomainDeleted',
  'LogFileCreated',
  'CdnDomainStarted',
  'CdnDomainStopped',
];
const cdnStatus = ['enabled', 'disabled'];
// const TRIGGER_COMMAND: string[] = ['create', 'list', 'info', 'remove', 'updateCode', 'updateConfig', 'getConfig'];
// const TRIGGER_COMMAND_HELP_KEY = {
//   create: 'FunctionCreateInputsArgs',
//   list: 'FunctionListInputsArgs',
//   info: 'FunctionInfoInputsArgs',
//   remove: 'FunctionDeleteInputsArgs',
//   updateCode: 'UpdateCodeInputsArgs',
//   updateConfig: 'UpdateCofigInputsArgs',
//   getConfig: 'GetConfigInputsArgs',
// };

export default class Trigger {
  constructor(credentials: ICredentials) {
    Client.setCfcClient(credentials);
  }

  async getBrnByFunctionName(functionName) {
    const vm = core.spinner('Getting functionBrn...');
    return await Client.cfcClient
      .getFunction(functionName)
      .then(function (response) {
        vm.succeed('Get functionBrn successfully.');
        const funcitonBrn = response.body.Configuration.FunctionBrn;
        logger.info(`FunctionBrn: ${funcitonBrn}`);
        return funcitonBrn;
      })
      .catch(function (err) {
        vm.fail('Fail to get functionBrn');
        throw new Error(err.message.Message);
      });
  }

  async handleData(source: string, data: any) {
    const keys = Object.keys(data);
    if (source.slice(0, 3) === 'bos') {
      source = source.slice(0, 3);
    }
    const minKeys = get(DATAKEYS, source);
    let missingKeys = [];
    for (let key of minKeys) {
      if (!keys.includes(key)) {
        missingKeys.push(key);
      }
    }

    if (missingKeys.length > 0) {
      throw new Error(`Missing trigger data: ${missingKeys}.`);
    }

    if (source === 'cdn') {
      if (!cdnEventTypes.includes(data.EventType)) {
        throw new Error(`CDN event type ${data.EventType} is not valid.`);
      }
      if (!cdnStatus.includes(data.Status)) {
        throw new Error(`CDN status error: ${data.Status}.`);
      }
    }
    return data;
  }

  async create(props: IProps) {
    const Target = props.target;
    const Source = props.source;
    const Data = await this.handleData(Source, props.data);
    let body = {
      Target,
      Source,
      Data,
    };
    logger.info(`Trigger infomation:`);
    logger.info(`Target:${Target}`);
    logger.info(`Source:${Source}`);
    logger.info(`Data:${JSON.stringify(Data)}`);
    const vm = core.spinner('Trigger creating...');
    logger.debug(`${body}`);
    const triggerInfo = await Client.cfcClient
      .createRelation(body)
      .then(function (response) {
        vm.succeed('Trigger created.');
        logger.debug(`Creating trigger response: ${JSON.stringify(response.body)}`);
        return response.body.Relation;
      })
      .catch(function (err) {
        vm.fail(`Trigger creating failed.`);
        logger.debug(`Error: ${JSON.stringify(err)}`);
        throw new Error(err.message.Message);
      });
    return await this.handleResponse(triggerInfo, props.functionName);
  }

  async update(props: IProps) {
    logger.debug(`RelationId: ${props.relationId}`);
    const Target = props.target;
    const RelationId = props.relationId;
    const Source = props.source;
    const Data = await this.handleData(Source, props.data);
    if (!RelationId) {
      throw new Error('No relationId(triggerId) provided');
    }
    logger.info(`Trigger target:${Target}`);
    logger.info(`Trigger source:${Source}`);
    logger.info(`Trigger data:${JSON.stringify(Data)}`);

    const vm = core.spinner('Trigger updating...');
    const triggerInfo = await Client.cfcClient
      .updateRelation({
        Target,
        RelationId,
        Source,
        Data,
      })
      .then((response) => {
        vm.succeed('Trigger updated.');
        return response.body.Relation;
      })
      .catch((err) => {
        vm.fail('Trigger update failed');
        logger.debug(`Error: ${JSON.stringify(err)}`);
        throw new Error(err.message.Message);
      });
    return await this.handleResponse(triggerInfo, props.functionName);
  }

  async list(functionBrn: string, table?: boolean) {
    const triggers = await Client.cfcClient
      .listRelations({ FunctionBrn: functionBrn })
      .then((response) => {
        return response.body.Relation;
      })
      .catch((err) => {
        throw new Error(err.message.Message);
      });
    if (table) {
      tableShow(triggers, ['Source', 'Target', 'RelationId', 'Data']);
    }
    return triggers;
  }

  async remove(props: IProps) {
    const Target = props.target;
    const Source = props.source;
    const RelationId = props.relationId;
    if (!RelationId) {
      throw new Error("No trigger's relationId provided");
    } else {
      logger.info(`Trigger relationId: ${RelationId}`);
    }
    const options = {
      Target,
      Source,
      RelationId,
    };

    const vm = core.spinner('Trigger deleting...');
    return await Client.cfcClient
      .deleteRelation(options)
      .then((response) => {
        vm.succeed('Trigger deleted');
        return response.body;
      })
      .catch((err) => {
        vm.fail('Trigger failed.');
        logger.error(err.message.Message);
        return err;
      });
  }

  async handleResponse(triggerInfo: any, functionName: string) {
    const relationId = triggerInfo.RelationId;
    const triggers = await this.list(triggerInfo.Target);
    logger.debug(`Handling response of trigger: ${relationId}`);
    let info;
    for (let trigger of triggers) {
      if (trigger.RelationId === relationId) {
        delete trigger.Sid;
        delete trigger.Target;
        delete trigger.Data.Brn;
        info = trigger;
      }
    }
    let contentTrigger = [
      {
        desc: 'RelationId',
        example: info.RelationId,
      },
      {
        desc: 'Source',
        example: info.Source,
      },
    ];
    const data = info.Data;
    let contentData = [];

    if (triggerInfo.Source === 'cfc-http-trigger/v1/CFCAPI') {
      contentTrigger.push({
        desc: 'Url',
        example: data['EndpointPrefix'] + data['ResourcePath'],
      });
      delete data['EndpointPrefix'];
    }
    const keys = Object.keys(data);

    for (let key of keys) {
      contentData.push({
        desc: key,
        example: `${data[key]}`,
      });
    }
    contentTrigger.push({
      desc: 'More',
      example: `https://console.bce.baidu.com/cfc/#/cfc/function/trigger~name=${functionName}`,
    });
    return [
      {
        header: 'Trigger',
        content: contentTrigger,
      },
      {
        header: 'Trigger data',
        content: contentData,
      },
    ];
  }

  async checkAndGetRelationId(functionBrn: string, props: any): Promise<{ isNew: boolean; relationId?: string }> {
    const vm = core.spinner('Checking if the trigger exists...');
    if (props.trigger.relationId) {
      return {
        isNew: false,
        relationId: props.trigger.relationId,
      };
    }
    const sourceType = props.trigger.source;
    const triggers = await this.list(functionBrn);
    if (!SOURCE_TYPES.includes(sourceType) && !SOURCE_TYPES.includes(sourceType.slice(0, 3))) {
      vm.fail('Trigger deploy failed');
      throw new Error('不支持的触发器类型');
    }
    logger.debug(`SourceType:${sourceType}`);
    // TODO：此处代码结构繁琐，请修改
    let relationId = '-1';
    if (sourceType === 'dueros') {
      for (let i = 0; i < triggers.length; i++) {
        if (triggers[i].Source === 'dueros') {
          relationId = triggers[i].RelationId;
          break;
        }
      }
    } else if (sourceType === 'duedge') {
      vm.fail('Trigger deploy failed');
      throw new Error(`暂不支持构建该触发器，请转到https://console.bce.baidu.com/cfc/#/cfc/function/trigger~name=${props.functionName} 进行创建`);
    } else if (sourceType === 'cfc-http-trigger/v1/CFCAPI') {
      const ResourcePath = props.trigger.data.ResourcePath;
      for (let i = 0; i < triggers.length; i++) {
        if (triggers[i].Source == 'cfc-http-trigger/v1/CFCAPI' && triggers[i].Data.ResourcePath === ResourcePath) {
          logger.debug(JSON.stringify(triggers[i]));
          relationId = triggers[i].RelationId;
        }
      }
    } else if (sourceType === 'cfc-crontab-trigger/v1/') {
      throw new Error(`请前往控制台创建定时触发器，https://console.bce.baidu.com/cfc/#/cfc/functions`);
      // const name = props.trigger.data.Name;
      // for (let i = 0; i < triggers.length; i++) {
      //   if (triggers[i].Source == 'cfc-crontab-trigger/v1/' && triggers[i].Data.Name === name) {
      //     logger.debug(JSON.stringify(triggers[i]));
      //     relationId = triggers[i].RelationId;
      //   }
      // }
    } else if (sourceType.slice(0, 3) === 'bos') {
      const name = props.trigger.data.Name;
      for (let i = 0; i < triggers.length; i++) {
        if (triggers[i].Source == sourceType && triggers[i].Data.Name == name) {
          logger.debug(JSON.stringify(triggers[i]));
          relationId = triggers[i].RelationId;
        }
      }
    } else if (sourceType === 'cdn') {
      const eventType = props.trigger.data.EventType;
      for (let i = 0; i < triggers.length; i++) {
        if (triggers[i].Source == 'cdn' && triggers[i].Data.EventType === eventType) {
          logger.debug(JSON.stringify(triggers[i]));
          relationId = triggers[i].RelationId;
        }
      }
    }

    if (relationId === '-1') {
      vm.succeed(`The trigger is a new one of ${props.functionName}.`);
      return {
        isNew: true,
      };
    } else {
      vm.succeed(`The trigger is already online under ${props.functionName}`);
      return {
        isNew: false,
        relationId,
      };
    }
  }
}
