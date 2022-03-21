import * as core from "@serverless-devs/core";
import Client from "../client";
import { startZip, tableShow, deleteZip } from "../utils";
import logger from "../../common/logger";
import { FunctionInputProps } from "./functionGraph/model/CreateFunctionRequestBody";
import { CreateFunctionRequest, UpdateFunctionConfigRequestBodyRuntimeEnum } from '@huaweicloud/huaweicloud-sdk-functiongraph';
import { CreateFunctionRequestBody, CreateFunctionRequestBodyRuntimeEnum, CreateFunctionRequestBodyCodeTypeEnum, FuncCode } from '@huaweicloud/huaweicloud-sdk-functiongraph';
import { UpdateFunctionCodeRequest, UpdateFunctionCodeRequestBody, UpdateFunctionCodeRequestBodyCodeTypeEnum } from '@huaweicloud/huaweicloud-sdk-functiongraph'
import { DeleteFunctionRequest } from "@huaweicloud/huaweicloud-sdk-functiongraph";
import { ListFunctionsRequest } from "@huaweicloud/huaweicloud-sdk-functiongraph";
import { UpdateFunctionConfigRequest, UpdateFunctionConfigRequestBody } from "@huaweicloud/huaweicloud-sdk-functiongraph";
import { FunctionGraphClient } from "./functionGraph/FunctionGraphClient";

let CONFIGS = require("../config");

export default class Function {
  private functionInfo: FunctionInputProps;

  private functionUrn?: string;

  public constructor(functionInfo: FunctionInputProps) {
    this.functionInfo = this.handleInput(functionInfo);
  }

  private handleInput(functionInfo: FunctionInputProps): FunctionInputProps {
    functionInfo.func_name = functionInfo.func_name || CONFIGS.functionName;
    functionInfo.handler = functionInfo.handler || CONFIGS.handler;
    functionInfo.memory_size = functionInfo.memory_size || CONFIGS.memorySize;
    functionInfo.timeout = functionInfo.timeout || CONFIGS.timeout;
    functionInfo.runtime = CONFIGS.runtime(functionInfo.runtime, logger);
    functionInfo.pkg = functionInfo.pkg || CONFIGS.pkg;
    functionInfo.code_type = functionInfo.code_type || CONFIGS.codeType;
    return functionInfo;
  }

  /**
   *  创建云函数
   * @param codeUri {string} 函数代码路径
   * @returns res {Object} 函数信息
   * @returns functionBrn {string} 函数Urn
   */
  public async create(codeUri?: string) {
    logger.debug("调用CreateFunction");

    // 压缩代码
    const vm1 = core.spinner("File compressing...");
    const ZipFile = await startZip(codeUri || "./");
    await deleteZip("hello.zip");
    vm1.succeed("File compression completed");

    const body = new CreateFunctionRequestBody()
      .withFuncName(this.functionInfo.func_name)
      .withHandler(this.functionInfo.handler)
      .withMemorySize(this.functionInfo.memory_size)
      .withTimeout(this.functionInfo.timeout)
      .withRuntime(CreateFunctionRequestBodyRuntimeEnum.NODE_JS8_10)
      .withPackage(this.functionInfo.pkg)
      .withCodeType(CreateFunctionRequestBodyCodeTypeEnum.ZIP)
      .withFuncCode(new FuncCode().withFile(ZipFile)) 

    logger.debug(JSON.stringify(body));

    const vm = core.spinner(`Function ${this.functionInfo.func_name} creating.`);
    let response:any;
    await Client.fgClient.createFunction(new CreateFunctionRequest().withBody(body))
      .then((result: any)=>{
        vm.succeed(`Function ${this.functionInfo.func_name} created.`);
        logger.debug(`返回结果，${JSON.stringify(response.data)}`);
        response = result;
      })
      .catch((ex: any) => {
        vm.fail(`Fail to create function.`);
        // TODO:使用更友好的错误返回
        // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
        throw new Error(JSON.stringify(ex.data));
      })

    return this.handleResponse(response.data);
  }

  /**
   *  更新代码
   * @param codeUri {string} 代码路径
   * @returns res {object} 函数信息
   * @returns functionUrn {string} functionBrn
   */
  public async updateCode(client: FunctionGraphClient, codeUri?: string) {
    const vm1 = core.spinner("File compressing...");
    const ZipFile = await startZip(codeUri || "./");
    await deleteZip("hello.zip");
    vm1.succeed("File compression completed");

    //Only support code type of "zip" temporarily. 
    const body = new UpdateFunctionCodeRequestBody()
      .withCodeType(UpdateFunctionCodeRequestBodyCodeTypeEnum.ZIP)
      .withFuncCode(new FuncCode().withFile(ZipFile));

    const vm2 = core.spinner("Function code updating...");
    const updateFunctionCodeReqeust = new UpdateFunctionCodeRequest()
      .withFunctionUrn(await this.getFunctionUrn(client))
      .withBody(body);
    
    let response: any;
    await Client.fgClient.updateFunctionCode(updateFunctionCodeReqeust)
      .then((result: any)=>{
        vm2.succeed(`Function code of ${this.functionInfo.func_name} updated successfully.`);
        logger.debug(`updateFunctionCode返回结果: ${JSON.stringify(result)}`);
        response = result;
      })
      .catch((ex: any)=>{
        vm2.fail(`Fail to update function code.`);
        logger.debug(`错误信息：${JSON.stringify(ex)}`)
        throw new Error(JSON.stringify(ex));
      })
    
    return this.handleResponse(response);
  }

  /**
   *  更新函数配置
   * @param client {FunctionGraphClinet}
   * @returns res {Object} 函数信息，包括函数基本信息和函数Urn
   */
  public async updateConfig(client: FunctionGraphClient) {
    logger.debug("调用updateFunctionConfig");

    const vm = core.spinner("Function configuration updating...");
    const functionInfo = this.functionInfo;
    
    // TODO: runtiome改为RuntimeEnum
    let body = new UpdateFunctionConfigRequestBody()
      .withFuncName(functionInfo.func_name)
      .withRuntime(UpdateFunctionConfigRequestBodyRuntimeEnum['NODE_JS6_10'])
      .withTimeout(functionInfo.timeout)
      .withHandler(functionInfo.handler)
      .withMemorySize(functionInfo.memory_size)
      .withDescription(functionInfo.description)
      .withXrole(functionInfo.xrole)
      .withAppXrole(functionInfo.app_xrole)
      .withInitializerHandler(functionInfo.initializer_handler)
      .withInitializerTimeout(functionInfo.initializer_timeout)

    const func_urn = await this.getFunctionUrn(client);
    let response: any;
    await Client.fgClient.updateFunctionConfig(
      new UpdateFunctionConfigRequest()
        .withFunctionUrn(func_urn)
        .withBody(body)
    )
      .then((result: any) => {
        response = result;
        vm.succeed(`Function ${this.getFunctionName()} configuration updated.`);
        logger.debug(JSON.stringify(response));
      })
      .catch((ex: any) => {
        vm.fail(
          `Function ${this.getFunctionName()} configuration updating failed.`
        );
        // TODO:使用更友好的错误返回
        // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
        logger.debug(JSON.stringify(response));
        logger.debug("TODO: More friendly error response needed!");
        throw new Error(JSON.stringify(response));
      })

    // 处理返回
    // res返回response.body
    // 返回funcitonBrn用于创建触发器
    return this.handleResponse(response);
  }

  /**
   *  获取函数列表
   * @param client {FunctionGraphClient}
   * @param table {boolean} 是否显示函数表
   * @retrun functions {Ayyay<any>} 函数列表信息,每一项对应一个函数,包含函数信息
   */
  public async list(table?: boolean): Promise<Array<any>> {
    let functions: any;
    await Client.fgClient.listFunctions(new ListFunctionsRequest().withPackageName(this.functionInfo.pkg))
      .then((result: any)=>{
        logger.info(`ListFunctionsRequest result: ${JSON.stringify(result)}`);
        functions = result.functions;
      })
      .catch((ex: any) => {
        logger.debug(`错误信息：${JSON.stringify(ex.data)}`)
        throw new Error(JSON.stringify(ex.data));
      })

    if (table) {
      tableShow(functions, [
        "FunctionName",
        "Description",
        "UpdatedAt",
        "LastModified",
        "Region",
      ]);
    }
    return functions;
  }

  /**
   *  删除函数(及其触发器)
   * @param client {FunctionGraphClinet}
   * @return 调用结果
   */
  public async remove(client: FunctionGraphClient) {
    const vmExistance = core.spinner("Checking if function exists...");
    const func_urn = await this.getFunctionUrn(client);
    
    if(!func_urn){
      vmExistance.fail(`Function does not exist.`);
      logger.log("Check your functionName or functionUrn.\nYou can get them in https://console.huaweicloud.com/functiongraph/#/serverless/functionList", "red");
      return;
    }

    vmExistance.succeed("Function exists.");
    const vm = core.spinner(`Function ${this.functionInfo.func_name} deleting...`);

    let response: any;
    await client.deleteFunction(new DeleteFunctionRequest(func_urn))
      .then((result: any) => {
        logger.debug(JSON.stringify(result));
        response = result;
        vm.succeed(`Function ${func_urn} deleted.`);
      })
      .catch((ex: any) => {
        logger.debug(`错误信息：${JSON.stringify(ex.data)}`)
        throw new Error(JSON.stringify(ex.data));
      })

    return response;
  }

  /**
   *  检查函数是否已经存在
   * @params client {FunctionGraphClient}
   * @return isCreated {Boolean}: true表示函数存在；false表示不存在
   */
  public async check(client: FunctionGraphClient) {
    logger.debug("Checking function exists.");
    const functionName = this.functionInfo.func_name;
    const functions = await this.list();
    let isCreated = false;
    for (let i = 0; i < functions.length; i++) {
      if (functions[i].func_name === functionName) {
        isCreated = true;
        break;
      }
    }
    return isCreated;
  }

  /**
   *  通过函数名获得func_urn，同时设置实例的functionUrn属性
   * @param client {FunctionGraphClient}
   * @returns functionUrn {stirng} 函数Urn
   */
  public async getUrnByFunctionName(client: FunctionGraphClient): Promise<string> {
    logger.debug("Get functionUrn by function name:" + this.functionInfo.func_name);
    const functions = await this.list();
    const targetFunctionName = this.getFunctionName();
    const targetFunction = functions.find((func) => {
      return func.func_name === targetFunctionName;
    });
    if (targetFunction) {
      this.functionUrn = targetFunction.func_urn;
      logger.debug(`functionUrn: ${this.functionUrn}`);
      return targetFunction.func_urn;
    } else {
      return null;
    }
  }

  /**
   *  获得函数实例的func_urn
   * @param client {FunctionGraphClient}
   * @returns functionUrn {string} 函数Urn
   */
  public async getFunctionUrn(client: FunctionGraphClient): Promise<string> {
    return this.functionUrn || (await this.getUrnByFunctionName(client));
  }

  /**
   *  处理函数信息输出
   * @param response
   * @returns
   */
  public async handleResponse(response: any) {
    // logger.debug(`${response}`);
    let content = [];
    
    // Display basic information.
    content.push({desc: "Function name",example: `${response.func_name}`});
    content.push({desc: "Function urn",example: `${response.func_urn}`});
    content.push({desc: "Project name",example: `${response.project_name}`});
    content.push({desc: "Runtime",example: `${response.runtime}`});
    content.push({desc: "Handler",example: `${response.handler}`});
    content.push({desc: "Code size",example: `${response.code_size}`});
    content.push({desc: "Timeout",example: `${response.timeout}`});
    content.push({desc: "Description", example: `${response.description || "No description"}`});
    
    // Display dashboardUrl
    content.push({desc: "More",example: CONFIGS.dashBoardUrl,});

    logger.debug(`Function handle response${JSON.stringify(content)}`);
    return {
      res: [
        {
          header: "Function",
          content,
        },
      ],
      functionUrn: response.func_urn,
    };
  }

  /**
   *  获取函数名
   * @returns functionName {string} 函数名
   */
  public getFunctionName(): string {
    return this.functionInfo.func_name;
  }
}
