import { ICredentials } from "../interface/profile";
import Function from "./function";
import { Trigger } from "./trigger";
export default class Remove {
    functionClient: Function;
    triggerClient: Trigger;
    private client;
    /**
     * 处理输入
     * @param inputs {object} yaml输入参数
     * @returns 输入有关的关键信息: endpoint, projectId, credentials - sk/ak, subCommand - 子指令, props - yaml输入项, args - 输入参数, table - 是否展示中间表格
     * */
    static handleInputs(inputs: any): Promise<{
        errorMessage: string;
        help?: undefined;
        subCommand?: undefined;
        endpoint?: undefined;
        projectId?: undefined;
        credentials?: undefined;
        props?: undefined;
        args?: undefined;
        table?: undefined;
    } | {
        help: boolean;
        subCommand: any;
        errorMessage?: undefined;
        endpoint?: undefined;
        projectId?: undefined;
        credentials?: undefined;
        props?: undefined;
        args?: undefined;
        table?: undefined;
    } | {
        endpoint: any;
        projectId: any;
        credentials: ICredentials;
        subCommand: any;
        props: any;
        args: any;
        table: any;
        errorMessage?: undefined;
        help?: undefined;
    }>;
    /**
     *
     * */
    constructor(credentials: ICredentials, projectId: string, endpoint: string);
    remove(props: any, subCommand: string): Promise<any>;
}
