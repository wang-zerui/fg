import { FunctionGraphClient } from "./functionGraph/FunctionGraphClient";
export declare const TRIGGER_TYPE_CODES: string[];
export declare const STATUSES: string[];
export interface TriggerInputProps {
    triggerId?: string;
    triggerTypeCode: string;
    eventTypeCode: string;
    status: string;
    functionUrn?: string;
}
export declare abstract class Trigger {
    triggerId?: string;
    triggerTypeCode: string;
    eventTypeCode: string;
    status: string;
    functionUrn?: string;
    constructor(input: TriggerInputProps);
    abstract getEventData(): object;
    /**
     * 创建触发器
     * @param client FunctionGraphClient
     * @param functionUrn 函数代号
     * @returns
     */
    create(client: FunctionGraphClient): Promise<any>;
    /**
     * 获取触发器列表
     * @param client
     * @param functionUrn
     * @returns
     */
    list(client: FunctionGraphClient): Promise<Array<any>>;
    /**
     * 更新触发器
     * @param Client
     * @param functionUrn
     * @returns
     */
    private update;
    /**
     * 删除触发器
     * @param client
     */
    remove(client: FunctionGraphClient): Promise<any>;
    /**
     * 设置triggerId,某些业务（目前仅更新需要调用
     * ））中需要调用该方法
     * 先获得本地triggerId
     * 再调用templateMethod获得可能的triggerId
     * @returns
     */
    setTriggerId(): Promise<any>;
    /**
     * 虚函数，每个触发器根据信息获取触发器
     * @param client
     */
    abstract getTriggerId(client: FunctionGraphClient): Promise<string>;
    /**
     * 处理返回
     * @param response
     * @returns
     */
    handleResponse(response: any): {
        header: string;
        content: any[];
    }[];
}
interface SMNEventData {
    topicUrn: string;
    subscriptionStatus: string;
}
interface CTSEventData {
    name: string;
    operations: string;
}
interface DDSEventData {
    instanceId: string;
    collectionName: string;
    dbName: string;
    dbPassword: string;
    batchSize: Array<string>;
}
interface KAFKAEventData {
    instance_id: string;
    db_name: string;
    collection_name: string;
    db_user: string;
    db_password: string;
    batch_size: number;
}
export declare class TriggerSMN extends Trigger {
    eventData: SMNEventData;
    constructor(input: TriggerInputProps, eventData: SMNEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
interface DISEventData {
    streamName: string;
    sharditeratorType: string;
    batchSize?: number;
    pollingInterval?: number;
}
export declare class TriggerDIS extends Trigger {
    eventData: DISEventData;
    constructor(input: TriggerInputProps, eventData: DISEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
interface APIGEventData {
    groupId: string;
    envId: string;
    auth: string;
    protocol: string;
    name: string;
    path: string;
    matchMode: string;
    reqMethod: string;
    backendType: string;
    type: number;
    slDomain: string;
    instanceId: string;
}
export declare class TriggerAPIG extends Trigger {
    eventData: APIGEventData;
    constructor(input: TriggerInputProps, eventData: APIGEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
interface TIMEREventData {
    name: string;
    scheduleType: string;
    schedule: string;
    userEvent?: string;
}
export declare class TriggerTIMER extends Trigger {
    eventData: TIMEREventData;
    constructor(input: TriggerInputProps, eventData: TIMEREventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
interface LTSEventData {
    groupId: string;
    topicId: string;
}
export declare class TriggerLTS extends Trigger {
    eventData: LTSEventData;
    constructor(input: TriggerInputProps, eventData: LTSEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
interface OBSEventData {
    bucket: string;
    events: Array<string>;
    prefix?: string;
    suffix?: string;
}
export declare class TriggerOBS extends Trigger {
    eventData: OBSEventData;
    constructor(input: TriggerInputProps, eventData: OBSEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
interface OBSEventData {
    bucket: string;
    events: Array<string>;
    prefix?: string;
    suffix?: string;
}
export declare class TriggerCTS extends Trigger {
    eventData: CTSEventData;
    constructor(input: TriggerInputProps, eventData: CTSEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<any>;
}
export declare class TriggerDDS extends Trigger {
    eventData: DDSEventData;
    constructor(input: TriggerInputProps, eventData: DDSEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<any>;
}
export declare class TriggerKAFKA extends Trigger {
    eventData: KAFKAEventData;
    constructor(input: TriggerInputProps, eventData: KAFKAEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<any>;
}
export declare function getTriggerClient(props: any, functionUrn?: string): Trigger;
export {};
