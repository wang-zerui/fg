import { ICredentials } from '../interface/profile';
export default class Function {
    constructor({ endpoint, credentials }: {
        endpoint: string;
        credentials: ICredentials;
    });
    /**
     * 创建函数
     * @param props
     * @returns res
     * @returns functionBrn
     */
    create(props: any): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionBrn: any;
    }>;
    /**
     * 更新代码
     * @param props
     * @returns res
     * @returns functionBrn
     */
    updateCode(props: any): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionBrn: any;
    }>;
    /**
     * 更新配置
     * @param props
     * @returns res
     * @returns functionBrn
     */
    updateConfig(props: any): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionBrn: any;
    }>;
    info(props: any): Promise<any>;
    list(table?: boolean): Promise<any>;
    remove(FunctionName: any): Promise<any>;
    getConfig(props: any): Promise<void>;
    /**
     * 一些衍生方法
     */
    /**
     * Check function existance
     */
    check(functionName: any): Promise<boolean>;
    getBrnByFunctionName(functionName: any): Promise<any>;
    handleResponse(response: any): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionBrn: any;
    }>;
}
