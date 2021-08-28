//@ts-ignore
import * as core from '@serverless-devs/core';
import { ICredentials } from '../interface/profile';
import Client from '../client';
import get from 'lodash.get';
import { startZip, tableShow, deleteZip } from '../utils';
import logger from '../../common/logger';
import { CreateFunctionRequest } from './functionGraph/model/CreateFunctionRequest';
import { CreateFunctionRequestBody } from './functionGraph/model/CreateFunctionRequestBody';
import { FUNCTION_INFO_KEYS } from './functionGraph/model/FunctionInfo'
import { UpdateFunctionConfigRequestBody } from './functionGraph/model/UpdateFunctionConfigRequestBody';
import { UpdateFunctionRequestBody } from './functionGraph/model/UpdateFunctionRequestBody';
import { UpdateFunctionRequest } from './functionGraph/model/UpdateFunctionRequest';
let CONFIGS = require('../config');

// const FUNCTION_COMMAND: string[] = ['create', 'list', 'info', 'remove', 'updateCode', 'updateConfig', 'getConfig'];
// const FUNCTION_COMMAND_HELP_KEY = {
//   create: 'FunctionCreateInputsArgs',
//   list: 'FunctionListInputsArgs',
//   info: 'FunctionInfoInputsArgs',
//   remove: 'FunctionDeleteInputsArgs',
//   updateCode: 'UpdateCodeInputsArgs',
//   updateConfig: 'UpdateCofigInputsArgs',
//   getConfig: 'GetConfigInputsArgs',
// };

export default class Function {
  constructor({ endpoint, credentials, projectId }: { endpoint: string; credentials: ICredentials; projectId: string }) {
    Client.setFgClient(credentials, projectId, endpoint);
  }

  /**
   * 创建函数
   * @param props
   * @returns res
   * @returns functionBrn
   */
  async create(props) {

    const vm1 = core.spinner('File compressing...');
    const ZipFile = await startZip(props.code.codeUri || './')
    await deleteZip('hello.zip');
    vm1.succeed('File compression completed');

    const body = new CreateFunctionRequestBody({
      func_name: props.functionName || CONFIGS.functionName,
      handler: props.description || CONFIGS.description,
      memory_size: props.memory_size || CONFIGS.memory_size,
      timeout: props.timeout || CONFIGS.timeout,
      runtime: props.runtime || CONFIGS.handler(props.runtime),
      pkg: props.package || CONFIGS.pkg,
      code_type: props.code_type || CONFIGS.code_type,
    })
    .withFunctionCode(ZipFile)

    const vm = core.spinner(`Function ${props.functionName} creating.`);
    const response = await Client.fgClient.createFunction(new CreateFunctionRequest()
      .withBody(body));
    
    if( response.status === 200 ){
      vm.succeed(`Function ${props.functionName} created.`);
    }else{
      vm.fail(`Function ${props.functionName} creating failed.`);
      // TODO:使用更友好的错误返回
      // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
      throw new Error(JSON.stringify(response.data));
    }
    return this.handleResponse(response);

    // 处理返回
    // res返回response.body
    // 返回funcitonBrn用于创建触发器
    return this.handleResponse(response);
  }

  /**
   * 更新代码
   * @param props
   * @returns res
   * @returns functionBrn
   */
  async updateCode(props) {

    const functionName = props.functionName;
    if (!functionName) {
      throw new Error('FunctionName not found.');
    }

    const codeUri = props.code.codeUri || CONFIGS.codeUri;
    const vm1 = core.spinner('File compressing...');
    const ZipFile = await startZip(codeUri);
    await deleteZip('hello.zip');
    vm1.succeed('File compression completed');

    const body = new UpdateFunctionRequestBody()
      .withCodeType(props.codeType)
      .withFunctionCode(ZipFile)

    const vm2 = core.spinner('Function code updating...');
    const updateFunctionReqeust = new UpdateFunctionRequest()
      .withFunctionUrn(props.functionUrn)
      .withBody(body)
    const response = await Client.fgClient
      .updateFunction(updateFunctionReqeust)

    if( response.status === 200 ){
      vm2.succeed(`Function ${props.functionName} updated.`);
    }else{
      vm2.fail(`Function ${props.functionName} updating failed.`);
      // TODO:使用更友好的错误返回
      // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
      throw new Error(JSON.stringify(response.data));
    }
    return this.handleResponse(response);
  }

  /**
   * 更新配置
   * @param props
   * @returns res
   * @returns functionBrn
   */
  async updateConfig(props) {
    const vm = core.spinner('Function configuration updating...');
    const FunctionName = props.functionName;
    if (!FunctionName) {
      throw new Error('FunctionName not found.');
    }

    const keys = ['Description', 'Timeout', 'Handler', 'Runtime', 'Environment'];
    let body = {};
    for (let i of keys) {
      let value = get(props, i.toLowerCase());
      if (value) {
        body[i] = value;
      }
    }

    const response = await Client.cfcClient
      .updateFunctionConfiguration(FunctionName, body)
      .then(function (response) {
        vm.succeed('Function configuration update completed');
        return response;
      })
      .catch(function (err) {
        vm.fail('Function configuration update failed');
        throw new Error(err.message.Message);
      });

    // 处理返回
    // res返回response.body
    // 返回funcitonBrn用于创建触发器
    return this.handleResponse(response);
  }

  async info(props) {
    const FunctionName = props.functionName;
    if (!FunctionName) {
      throw new Error('Not found functionName');
    }
    return await Client.cfcClient
      .getFunction(FunctionName)
      .then((response) => {
        return response.body;
      })
      .catch((err) => {
        logger.error('获取函数信息失败');
        logger.error(err.body);
      });
  }

  async list(table?: boolean): Promise<any> {
    const data = await Client.cfcClient
      .listFunctions()
      .then((response) => {
        return response.body.Functions;
      })
      .catch((err) => {
        logger.info(err);
        logger.debug(`${err}`);
        throw new Error(err.message.Message);
      });
    if (table) {
      tableShow(data, ['FunctionName', 'Description', 'UpdatedAt', 'LastModified', 'Region']);
      return data;
    } else {
      return data;
    }
  }

  async remove(FunctionName) {
    if (!FunctionName) {
      throw new Error('Not found functionName');
    }
    const vm = core.spinner('Function ' + FunctionName + ' deleting...');
    return await Client.cfcClient
      .deleteFunction(FunctionName)
      .then((response) => {
        vm.succeed(`Function ${FunctionName} deleted`);
        return response;
      })
      .catch((err) => {
        vm.fail('Function delete failed.');
        logger.error('Function remove failed. ');
        logger.debug(JSON.stringify(err));
        throw new Error(err.message.Message);
      });
  }

  async getConfig(props) {
    const FunctionName = props.functionName;
    if (!FunctionName) {
      throw new Error('Not found functionName');
    }
    await Client.cfcClient
      .getFunctionConfiguration(FunctionName)
      .then((response) => {
        logger.info(response.body);
        return response.body;
      })
      .catch((err) => {
        logger.error('函数配置获取错误');
        logger.error(err.message.Message);
      });
  }

  /**
   * 一些衍生方法
   */

  /**
   * Check function existance
   */
  async check(functionName) {
    const vm = core.spinner('Checking if ' + functionName + ' exits...');
    const functions = await this.list();
    let isCreated = false;
    for (let i = 0; i < functions.length; i++) {
      if (functions[i].FunctionName === functionName) {
        isCreated = true;
        break;
      }
    }
    if (isCreated) {
      vm.succeed(`Function ${functionName} is already online.`);
    } else {
      vm.succeed(`Function ${functionName} does not exitst.`);
    }
    return isCreated;
  }

  async getBrnByFunctionName(functionName) {
    const FunctionName = functionName;
    logger.debug('Get functionBrn by function name:' + FunctionName);
    let functionBrn = await Client.cfcClient
      .getFunction(FunctionName)
      .then(function (response) {
        return response.body.Configuration.FunctionBrn;
      })
      .catch(function (err) {
        logger.error('Getting functionBrn failed!');
        throw new Error(err.message.Message);
      });
    return functionBrn;
  }

  async handleResponse(response: any) {
    logger.debug(`${response}`);
    let content = [];
    for (let i of FUNCTION_INFO_KEYS) {
      content.push({
        desc: i,
        example: `${response[i]}`,
      });
    }
    content.push({
      desc: 'More',
      example: CONFIGS.dashBoardUrl
    });
    logger.debug(`Calling Function response${JSON.stringify(content)}`);
    return {
      res: [
        {
          header: 'Function',
          content,
        },
      ],
      functionUrn: response.func_urn,
    };
  }
}
