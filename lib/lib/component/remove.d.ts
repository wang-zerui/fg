import { ICredentials } from '../interface/profile';
export default class remove {
    static handleInputs(inputs: any): Promise<{
        errorMessage: string;
        help?: undefined;
        subCommand?: undefined;
        endpoint?: undefined;
        credentials?: undefined;
        props?: undefined;
        args?: undefined;
    } | {
        help: boolean;
        subCommand: any;
        errorMessage?: undefined;
        endpoint?: undefined;
        credentials?: undefined;
        props?: undefined;
        args?: undefined;
    } | {
        endpoint: string;
        credentials: ICredentials;
        subCommand: any;
        props: any;
        args: any;
        errorMessage?: undefined;
        help?: undefined;
    }>;
    constructor({ credentials }: {
        credentials: ICredentials;
    });
    removeFunction({ endpoint, credentials, functionName }: {
        endpoint: any;
        credentials: any;
        functionName: any;
    }): Promise<any>;
    removeTrigger({ credentials, props, functionBrn }: {
        credentials: any;
        props: any;
        functionBrn: any;
    }): Promise<any>;
    getBrn(props: any, credentials: any): Promise<any>;
    remove(endpoint: any, props: any, subCommand: any, credentials: any): Promise<any>;
}
