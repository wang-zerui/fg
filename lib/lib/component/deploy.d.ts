import { ICredentials } from '../interface/profile';
export default class deploy {
    static handleInputs(inputs: any): Promise<{
        errorMessage: string;
        help?: undefined;
        subCommand?: undefined;
        endpoint?: undefined;
        credentials?: undefined;
        props?: undefined;
        args?: undefined;
        table?: undefined;
    } | {
        help: boolean;
        subCommand: any;
        errorMessage?: undefined;
        endpoint?: undefined;
        credentials?: undefined;
        props?: undefined;
        args?: undefined;
        table?: undefined;
    } | {
        endpoint: string;
        credentials: ICredentials;
        subCommand: any;
        props: any;
        args: any;
        table: any;
        errorMessage?: undefined;
        help?: undefined;
    }>;
    constructor({ endpoint, credentials }: {
        endpoint: string;
        credentials: ICredentials;
    });
    deployFunction({ props, credentials }: {
        props: any;
        credentials: any;
    }): Promise<{
        res: {
            header: string;
            content: any[];
        }[];
        functionBrn: any;
    }>;
    deployTrigger(functionBrn: string, props: any, credentials: ICredentials): Promise<{
        header: string;
        content: any[];
    }[]>;
    getBrn(props: any, credentials: any): Promise<any>;
    getInfo(props: any, credentials: any, relationId: any): Promise<void>;
    deploy(props: any, subCommand: any, credentials: any): Promise<{
        header: string;
        content: any[];
    }[]>;
}
