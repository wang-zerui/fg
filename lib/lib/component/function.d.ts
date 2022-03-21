import { FunctionInputProps } from "./functionGraph/model/CreateFunctionRequestBody";
import { FunctionGraphClient } from "./functionGraph/FunctionGraphClient";
export default class Function {
    private functionInfo;
    private functionUrn?;
    constructor(functionInfo: FunctionInputProps);
    private handleInput;
    /**
     *  创建云函数
     * @param codeUri {string} 函数代码路径
     * @returns res {Object} 函数信息
     * @returns functionBrn {string} 函数Urn
     */
    create(codeUri?: string): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionUrn: any;
    }>;
    /**
     *  更新代码
     * @param codeUri {string} 代码路径
     * @returns res {object} 函数信息
     * @returns functionUrn {string} functionBrn
     */
    updateCode(client: FunctionGraphClient, codeUri?: string): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionUrn: any;
    }>;
    /**
     *  更新函数配置
     * @param client {FunctionGraphClinet}
     * @returns res {Object} 函数信息，包括函数基本信息和函数Urn
     */
    updateConfig(client: FunctionGraphClient): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionUrn: any;
    }>;
    /**
     *  获取函数列表
     * @param client {FunctionGraphClient}
     * @param table {boolean} 是否显示函数表
     * @retrun functions {Ayyay<any>} 函数列表信息,每一项对应一个函数,包含函数信息
     */
    list(table?: boolean): Promise<Array<any>>;
    /**
     *  删除函数(及其触发器)
     * @param client {FunctionGraphClinet}
     * @return 调用结果
     */
    remove(client: FunctionGraphClient): Promise<any>;
    /**
     *  检查函数是否已经存在
     * @params client {FunctionGraphClient}
     * @return isCreated {Boolean}: true表示函数存在；false表示不存在
     */
    check(client: FunctionGraphClient): Promise<boolean>;
    /**
     *  通过函数名获得func_urn，同时设置实例的functionUrn属性
     * @param client {FunctionGraphClient}
     * @returns functionUrn {stirng} 函数Urn
     */
    getUrnByFunctionName(client: FunctionGraphClient): Promise<string>;
    /**
     *  获得函数实例的func_urn
     * @param client {FunctionGraphClient}
     * @returns functionUrn {string} 函数Urn
     */
    getFunctionUrn(client: FunctionGraphClient): Promise<string>;
    /**
     *  处理函数信息输出
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
    /**
     *  获取函数名
     * @returns functionName {string} 函数名
     */
    getFunctionName(): string;
}
