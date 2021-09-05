import { CreateFunctionRequest } from "./model/CreateFunctionRequest";
import { GetFunctionListRequest } from "./model/GetFunctionListRequest";
import { UpdateFunctionRequest } from "./model/UpdateFunctionRequest";
import { DeleteFunctionRequest } from "./model/DeleteFunctionRequest";
import { UpdateFunctionConfigRequest } from "./model/UpdateFunctionConfigRequest";
import { CreateTriggerRequest } from "./model/CreateTriggerRequest";
import { UpdateTriggerRequest } from "./model/UpdateTriggerRequest";
import { DeleteTriggerRequest } from "./model/DeleteTriggerRequest";
import { ListTriggerRequest } from "./model/ListTriggerRequest";
export declare class FunctionGraphClient {
    ak?: string;
    sk?: string;
    project_id?: string;
    endpoint?: string;
    constructor(ak?: string, sk?: string, project_id?: string, endpoint?: string);
    withAk(ak: string): FunctionGraphClient;
    withSk(sk: string): FunctionGraphClient;
    withProjectId(project_id: string): FunctionGraphClient;
    withEndpoint(endpoint: string): FunctionGraphClient;
    getPath(): string;
    /**
     * 创建函数
     * @summary 创建函数
     * @param {CreateFunctionRequestBody}
     * @throws {RequiredError}
     */
    createFunction(createFunctionRequest: CreateFunctionRequest): Promise<any>;
    /**
     * 更新函数代码
     * @param updateFuncionRequest
     * @returns
     */
    updateFunction(updateFuncionRequest: UpdateFunctionRequest): Promise<any>;
    /**
     * 更新函数配置
     * @param updateFunctionConfigRequest
     * @returns
     */
    updateFunctionConfig(updateFunctionConfigRequest: UpdateFunctionConfigRequest): Promise<any>;
    /**
     * 删除函数
     * @param deleteFunctionRequest
     */
    deleteFunction(deleteFunctionRequest: DeleteFunctionRequest): Promise<any>;
    /**
     * 获取函数列表
     * @summary 获取函数列表
     * @param {GetFunctionListRequest}
     * @param {RequiredError}
     */
    getFunctionList(getFunctionListRequest: GetFunctionListRequest): Promise<any>;
    /**
     * 创建触发器
     * @param createTriggerRequest
     * @returns
     */
    createTrigger(createTriggerRequest: CreateTriggerRequest): Promise<any>;
    updateTrigger(updateTriggerRequest: UpdateTriggerRequest): Promise<any>;
    deleteTrigger(deleteTriggerRequest: DeleteTriggerRequest): Promise<any>;
    listTrigger(listTriggerRequest: ListTriggerRequest): Promise<any>;
}
export declare const ParamCreater: () => {
    /**
     * 此接口用于创建函数
     */
    createFunction(createFunctionRequest: CreateFunctionRequest, client: FunctionGraphClient): {
        method: string;
        url: string;
        headers: {
            "Content-Type": string;
        };
        data: string;
    };
    /**
     * 更新函数
     */
    updateFunction(updateFunctionRequest: UpdateFunctionRequest, client: FunctionGraphClient): {
        method: string;
        url: string;
        headers: {
            "Content-Type": string;
        };
        data: {};
    };
    /**
     * 更新函数配置
     * @param updateFunctionConfigRequest
     * @returns
     */
    updateFunctionConfig(updateFunctionConfigRequest: UpdateFunctionConfigRequest, client: FunctionGraphClient): {
        method: string;
        url: string;
        headers: {
            "Content-Type": string;
        };
        data: {};
    };
    /**
     * 此接口用于获取函数列表
     */
    getFunctionList(getFunctionListRequest: GetFunctionListRequest, client: FunctionGraphClient): {
        method: string;
        url: string;
        headers: {
            "Content-Type": string;
        };
        data: string;
    };
    /**
     * 此接口用于删除函数
     * @param deleteFunctionRequest
     * @returns
     */
    deleteFunction(deleteFunctionRequest: DeleteFunctionRequest, client: FunctionGraphClient): {
        method: string;
        url: string;
        headers: {};
        data: {};
    };
    /**
     * 创建触发器函数
     * @param createTriggerRequest
     * @param client
     * @returns
     */
    createTrigger(createTriggerRequest: CreateTriggerRequest, client: FunctionGraphClient): {
        method: string;
        url: string;
        headers: {
            "Content-Type": string;
        };
        data: string;
    };
    updateTrigger(updateTriggerRequest: UpdateTriggerRequest, client: FunctionGraphClient): {
        method: string;
        url: string;
        headers: {
            "Content-Type": string;
        };
        data: string;
    };
    deleteTrigger(deleteTriggerRequest: DeleteTriggerRequest, client: FunctionGraphClient): {
        method: string;
        url: string;
        headers: {
            "Content-Type": string;
        };
        data: string;
    };
    listTrigger(listTriggerRequest: ListTriggerRequest, client: FunctionGraphClient): {
        method: string;
        url: string;
        headers: {
            "Content-Type": string;
        };
        data: string;
    };
};
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
