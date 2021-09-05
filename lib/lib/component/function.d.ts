import { FunctionInputProps } from './functionGraph/model/CreateFunctionRequestBody';
import { FunctionGraphClient } from './functionGraph/FunctionGraphClient';
export default class Function {
    functionInfo: FunctionInputProps;
    functionUrn?: string;
    constructor(functionInfo: FunctionInputProps);
    private handleInput;
    /**
     * 创建函数
     * @param props
     * @returns res
     * @returns functionBrn
     */
    create(client: FunctionGraphClient, codeUri?: string): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionUrn: any;
    }>;
    /**
     * 更新代码
     * @param props
     * @returns res
     * @returns functionBrn
     */
    updateCode(client: FunctionGraphClient, codeUri?: string): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionUrn: any;
    }>;
    /**
     * 更新配置
     * @param props
     * @returns res
     * @returns functionBrn
     */
    updateConfig(client: FunctionGraphClient): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionUrn: any;
    }>;
    list(client: FunctionGraphClient, table?: boolean): Promise<Array<any>>;
    remove(client: FunctionGraphClient): Promise<any>;
    /**
     * 一些衍生方法
     */
    /**
     * Check function existance
     */
    check(client: FunctionGraphClient): Promise<boolean>;
    /**
     * 使用函数名获得func_urn
     * @param functionName
     * @param pkg
     * @returns
     */
    getUrnByFunctionName(client: FunctionGraphClient): Promise<string>;
    getFunctionUrn(client: FunctionGraphClient): Promise<string>;
    /**
     * 处理函数信息输出
     * @param response
     * @returns
     */
    handleResponse(response: any): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionUrn: any;
    }>;
}
