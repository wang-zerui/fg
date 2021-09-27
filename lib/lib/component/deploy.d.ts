import { ICredentials } from "../interface/profile";
import Function from "./function";
import { Trigger } from "./trigger";
export default class deploy {
    functionClient: Function;
    triggerClient: Trigger;
    private client;
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
    constructor(credentials: ICredentials, projectId: string, endpoint: string);
    deployFunction(props: any): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionUrn: any;
    }>;
    deployTrigger(props: any, functionUrn: string): Promise<any>;
    deploy(props: any, subCommand: string): Promise<any>;
}
