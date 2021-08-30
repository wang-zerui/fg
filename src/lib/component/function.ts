//@ts-ignore
import * as core from '@serverless-devs/core';
import { ICredentials } from '../interface/profile';
import Client from '../client';
import { startZip, tableShow, deleteZip } from '../utils';
import logger from '../../common/logger';
import { CreateFunctionRequest } from './functionGraph/model/CreateFunctionRequest';
import { CreateFunctionRequestBody } from './functionGraph/model/CreateFunctionRequestBody';
import { FUNCTION_INFO_KEYS } from './functionGraph/model/FunctionInfo'
import { UpdateFunctionConfigRequestBody } from './functionGraph/model/UpdateFunctionConfigRequestBody';
import { UpdateFunctionRequestBody } from './functionGraph/model/UpdateFunctionRequestBody';
import { UpdateFunctionRequest } from './functionGraph/model/UpdateFunctionRequest';
import { GetFunctionListRequest } from './functionGraph/model/GetFunctionListRequest';
import { UpdateFunctionConfigRequest } from './functionGraph/model/UpdateFunctionConfigRequest';
let CONFIGS = require('../config');

export default class Function {
  public constructor({ endpoint, credentials, projectId }: { endpoint: string; credentials: ICredentials; projectId: string }) {
    Client.setFgClient(credentials, projectId, endpoint);
  }

  /**
   * 创建函数
   * @param props
   * @returns res
   * @returns functionBrn
   */
  public async create(props) {

    const vm1 = core.spinner('File compressing...');
    const ZipFile = await startZip(props.code.codeUri || './')
    await deleteZip('hello.zip');
    vm1.succeed('File compression completed');

    let body = new CreateFunctionRequestBody({
      func_name: props.functionName || CONFIGS.functionName,
      handler: props.handler || CONFIGS.handler,
      memory_size: props.memory_size || CONFIGS.memorySize,
      timeout: props.timeout || CONFIGS.timeout,
      runtime: props.runtime || CONFIGS.handler(props.runtime),
      pkg: props.package || CONFIGS.pkg,
      code_type: props.code_type || CONFIGS.codeType,
    })
    .withFunctionCode(ZipFile)

    if ( props.enterpriseProjectId ) {
      body = body.withEnterpriseProjectId(props.enterprise_project_id);
    }
    if (props.appXrole) {
      body = body.withAppXrole(props.appXrole);
    }
    if ( props.initializerHandler ) {
      body = body.withInitializerHandler(props.initializerHandler);
    }
    if ( props.initializerTimeout ) {
      body = body.withInitializerTimeout(props.initializerTimeout);
    }
    if ( props.description ) {
      body = body.withDescription(props.description);
    }
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

    return this.handleResponse(response.data);
  }

  /**
   * 更新代码
   * @param props
   * @returns res
   * @returns functionBrn
   */
  public async updateCode(props) {

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

    if( response.status !== 200 ){
      vm2.fail(`Function ${props.functionName} updating failed.`);
      // TODO:使用更友好的错误返回
      // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
      throw new Error(JSON.stringify(response.data));
    }else{
      vm2.succeed(`Function ${props.functionName} updated.`);
    }
    return this.handleResponse(response.data);
  }

  /**
   * 更新配置
   * @param props
   * @returns res
   * @returns functionBrn
   */
  public async updateConfig(props) {
    const vm = core.spinner('Function configuration updating...');
    
    const FunctionName = props.functionName;
    if (!FunctionName) {
      throw new Error('FunctionName not found.');
    }

    let body = new UpdateFunctionConfigRequestBody({
      func_name: props.functionName,
      handler: props.handler,
      memory_size: props.memorySize,
      timeout: props.timeout,
      runtime: props.runtime,
    })
    if ( props.enterpriseProjectId ) {
      body = body.withEnterpriseProjectId(props.enterprise_project_id);
    }
    if ( props.xrole ) {
      body = body.withXrole(props.xrole);
    }
    if (props.appXrole) {
      body = body.withAppXrole(props.appXrole);
    }
    if ( props.initializerHandler ) {
      body = body.withInitializerHandler(props.initializerHandler);
    }
    if ( props.initializerTimeout ) {
      body = body.withInitializerTimeout(props.initializerTimeout);
    }
    if ( props.description ) {
      body = body.withDescription(props.description);
    }

    const response = await Client.fgClient
      .updateFunctionConfig(new UpdateFunctionConfigRequest()
        .withBody(body));
    
    if( response.status !== 200 ){
      vm.fail(`Function ${props.functionName} configuration updating failed.`);
      // TODO:使用更友好的错误返回
      // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
      throw new Error(JSON.stringify(response.data));
    }else{
      vm.succeed(`Function ${props.functionName} configuration updated.`);
    }

    // 处理返回
    // res返回response.body
    // 返回funcitonBrn用于创建触发器
    return this.handleResponse(response.data);
  }

  public async list( pkg:string="default", table?: boolean): Promise<any> {
    const data = await Client.fgClient
      .getFunctionList(new GetFunctionListRequest()
        .withPackage(pkg))
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

  public async remove(functionUrn: string) {
    const vm = core.spinner(`Function ${functionUrn} deleting...`);
    
    const response = await Client.fgClient
      .deleteFunction(functionUrn)
    
    if ( response.status !== 200 ) {
      vm.fail("Function delete failed.");
      logger.debug(JSON.stringify(response));
      throw new Error(JSON.stringify(response.data))
    } else {
      logger.debug(JSON.stringify(response));
      vm.succeed(`Function ${functionUrn} deleted.`);
    }
    return response;
  }


  /**
   * 一些衍生方法
   */

  /**
   * Check function existance
   */
  public async check(functionName: string, pkg?: string) {
    logger.debug("Checking function exists.");
    const vm = core.spinner('Checking if ' + functionName + ' exits...');
    const functions = await this.list();
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
  public async getUrnByFunctionName(functionName, pkg:string="default"):Promise<string> {
    logger.debug('Get functionBrn by function name:' + functionName);
    const functions  = await this.list(pkg=pkg);
    for(let functionInfo of functions){
      if ( functionInfo.func_name === functionName ) {
        return functionInfo.func_urn;
      }
    }
    throw new Error("Function not found.");
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
