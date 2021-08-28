import { ICredentials } from '../interface/profile';
interface IProps {
    target: string;
    source: string;
    relationId?: string;
    data?: object;
    functionName?: string;
}
export default class Trigger {
    constructor(credentials: ICredentials);
    getBrnByFunctionName(functionName: any): Promise<any>;
    handleData(source: string, data: any): Promise<any>;
    create(props: IProps): Promise<{
        header: string;
        content: any[];
    }[]>;
    update(props: IProps): Promise<{
        header: string;
        content: any[];
    }[]>;
    list(functionBrn: string, table?: boolean): Promise<any>;
    remove(props: IProps): Promise<any>;
    handleResponse(triggerInfo: any, functionName: string): Promise<{
        header: string;
        content: any[];
    }[]>;
    checkAndGetRelationId(functionBrn: string, props: any): Promise<{
        isNew: boolean;
        relationId?: string;
    }>;
}
export {};
