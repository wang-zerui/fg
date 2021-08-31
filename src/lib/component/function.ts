//@ts-ignore
import * as core from '@serverless-devs/core';
import Client from '../client';
import { startZip, tableShow, deleteZip } from '../utils';
import logger from '../../common/logger';
import { FunctionInputProps } from './functionGraph/model/CreateFunctionRequestBody'
import { CreateFunctionRequest } from './functionGraph/model/CreateFunctionRequest';
import { CreateFunctionRequestBody } from './functionGraph/model/CreateFunctionRequestBody';
import { FUNCTION_INFO_KEYS } from './functionGraph/model/FunctionInfo'
import { UpdateFunctionConfigRequestBody } from './functionGraph/model/UpdateFunctionConfigRequestBody';
import { UpdateFunctionRequestBody } from './functionGraph/model/UpdateFunctionRequestBody';
import { UpdateFunctionRequest } from './functionGraph/model/UpdateFunctionRequest';
import { GetFunctionListRequest } from './functionGraph/model/GetFunctionListRequest';
import { UpdateFunctionConfigRequest } from './functionGraph/model/UpdateFunctionConfigRequest';
import { FunctionGraphClient } from './functionGraph/FunctionGraphClient';
import { DeleteFunctionRequest } from './functionGraph/model/DeleteFunctionRequest';
let CONFIGS = require('../config');

export default class Function {
  public functionInfo: FunctionInputProps;
  public functionUrn?: string;
  public constructor(functionInfo: FunctionInputProps) {
    this.functionInfo = this.handleInput(functionInfo);
  }

  private handleInput(functionInfo: FunctionInputProps): FunctionInputProps {
      functionInfo.func_name = functionInfo.func_name || CONFIGS.functionName;
      functionInfo.handler = functionInfo.handler || CONFIGS.handler;
      functionInfo.memory_size =  functionInfo.memory_size || CONFIGS.memorySize;
      functionInfo.timeout = functionInfo.timeout || CONFIGS.timeout;
      functionInfo.runtime = functionInfo.runtime || CONFIGS.handler(functionInfo.runtime);
      functionInfo.pkg = functionInfo.pkg || CONFIGS.pkg;
      functionInfo.code_type = functionInfo.code_type || CONFIGS.codeType;
      return functionInfo;
  }
  /**
   * 创建函数
   * @param props
   * @returns res
   * @returns functionBrn
   */
  public async create(client:FunctionGraphClient, codeUri?: string) {
    const vm1 = core.spinner('File compressing...');
    const ZipFile = await startZip(codeUri || './')
    await deleteZip('hello.zip');
    vm1.succeed('File compression completed');

    const body = new CreateFunctionRequestBody(this.functionInfo)
      .withFunctionCode(ZipFile)
    const vm = core.spinner(`Function ${this.functionInfo.func_name} creating.`);

    const response = await Client.fgClient.createFunction(new CreateFunctionRequest()
      .withBody(body));
    
    if( response.status === 200 ){
      vm.succeed(`Function ${this.functionInfo.func_name} created.`);
    }else{
      vm.fail(`Function ${this.functionInfo.func_name} creating failed.`);
      // TODO:使用更友好的错误返回
      // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
      throw new Error(JSON.stringify(response.data));
    }

    return this.handleResponse(response.data);
  }

  /**
   * 更新代码
   * @param props
   * @returns res
   * @returns functionBrn
   */
  public async updateCode(client: FunctionGraphClient, codeUri: string) {
    const vm1 = core.spinner('File compressing...');
    const ZipFile = await startZip(codeUri);
    await deleteZip('hello.zip');
    vm1.succeed('File compression completed');

    const body = new UpdateFunctionRequestBody()
      .withCodeType(this.functionInfo.code_type)
      .withFunctionCode(ZipFile)

    const vm2 = core.spinner('Function code updating...');
    const updateFunctionReqeust = new UpdateFunctionRequest()
      .withFunctionUrn(await this.getFunctionUrn(client))
      .withBody(body)
    const response = await Client.fgClient
      .updateFunction(updateFunctionReqeust)

    if( response.status !== 200 ){
      vm2.fail(`Function ${this.functionInfo.func_name} updating failed.`);
      // TODO:使用更友好的错误返回
      // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
      throw new Error(JSON.stringify(response.data));
    }else{
      vm2.succeed(`Function ${this.functionInfo.func_name} updated.`);
    }
    return this.handleResponse(response.data);
  }

  /**
   * 更新配置
   * @param props
   * @returns res
   * @returns functionBrn
   */
  public async updateConfig(client:FunctionGraphClient) {
    const vm = core.spinner('Function configuration updating...');
    let body = new UpdateFunctionConfigRequestBody(this.functionInfo)

    const response = await Client.fgClient
      .updateFunctionConfig(new UpdateFunctionConfigRequest()
        .withBody(body));
    
    if( response.status !== 200 ){
      vm.fail(`Function ${this.functionInfo.func_name} configuration updating failed.`);
      // TODO:使用更友好的错误返回
      // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
      throw new Error(JSON.stringify(response.data));
    }else{
      vm.succeed(`Function ${this.functionInfo.func_name} configuration updated.`);
    }

    // 处理返回
    // res返回response.body
    // 返回funcitonBrn用于创建触发器
    return this.handleResponse(response.data);
  }

  public async list( client:FunctionGraphClient, table?: boolean): Promise<Array<any>> {
    const data = await client
      .getFunctionList(new GetFunctionListRequest()
        .withPackage(this.functionInfo.pkg))
    if(data.status !== 200){
      logger.debug("获取函数列表错误");
      throw new Error("Getting function list error")
    }
    if (table) {
      tableShow(data.functions, ['FunctionName', 'Description', 'UpdatedAt', 'LastModified', 'Region']);
      return data.functions;
    } else {
      return data.functions;
    }
  }

  public async remove(client:FunctionGraphClient) {
    const func_urn = await this.getFunctionUrn(client);
    const vm = core.spinner(`Function ${func_urn} deleting...`);
    
    const response = await client
      .deleteFunction(new DeleteFunctionRequest(func_urn))
    
    if ( response.status !== 200 ) {
      vm.fail("Function delete failed.");
      logger.debug(JSON.stringify(response));
      throw new Error(JSON.stringify(response.data))
    } else {
      logger.debug(JSON.stringify(response));
      vm.succeed(`Function ${func_urn} deleted.`);
    }
    return response;
  }


  /**
   * 一些衍生方法
   */

  /**
   * Check function existance
   */
  public async check(client:FunctionGraphClient) {
    logger.debug("Checking function exists.");
    const functionName = this.functionInfo.func_name;
    const vm = core.spinner('Checking if ' + functionName + ' exits...');
    const functions = await this.list(client);
    let isCreated = false;
    for (let i = 0; i < functions.length; i++) {
      if (functions[i].func_name === functionName) {
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

  /**
   * 使用函数名获得func_urn
   * @param functionName 
   * @param pkg 
   * @returns 
   */
  public async getUrnByFunctionName(client:FunctionGraphClient):Promise<string> {
    logger.debug('Get functionBrn by function name:' + this.functionInfo.func_name);
    const functions  = await this.list(client);
    for(let func of functions){
      if ( func.func_name === this.functionInfo.func_name ) {
        this.functionUrn = func.func_urn;
        return func.func_urn;
      }
    }
    throw new Error("Function not found.");
  }

  public async getFunctionUrn(client: FunctionGraphClient): Promise<string> {
    return this.functionUrn || ( await this.getUrnByFunctionName(client) )
  }

  /**
   * 处理函数信息输出
   * @param response 
   * @returns 
   */
  public async handleResponse(response: any) {
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
