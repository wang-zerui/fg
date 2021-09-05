import { ICredentials } from '../interface/profile';
import { Trigger } from './trigger';
import Function from './function';
export default class Remove {
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
    remove(props: any, subCommand: any): Promise<any>;
}
