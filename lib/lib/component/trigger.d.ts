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
export interface LocalTriggerInfo {
    triggerId: string;
    triggerTypeCode: string;
    functionUrn: string;
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
interface DISEventData {
    streamName: string;
    sharditeratorType: string;
    batchSize?: number;
    pollingInterval?: number;
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
interface LTSEventData {
    groupId: string;
    topicId: string;
}
interface TIMEREventData {
    name: string;
    scheduleType: string;
    schedule: string;
    userEvent?: string;
}
interface OBSEventData {
    bucket: string;
    events: Array<string>;
    prefix?: string;
    suffix?: string;
}
interface OBSEventData {
    bucket: string;
    events: Array<string>;
    prefix?: string;
    suffix?: string;
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
     * @param client {FunctionGraphClient}
     * @returns res {Object} 函数信息
     * @returns functionUrn {string} 函数Urn
     */
    create(client: FunctionGraphClient): Promise<any>;
    /**
     * 获取触发器列表
     * @param client
     * @returns triggers {Array<any>} 该函数下的所有函数信息
     */
    list(client: FunctionGraphClient): Promise<Array<any>>;
    /**
     * 更新触发器，只能更新status
     * @param Client
     * @param functionUrn
     * @returns
     */
    update(client: FunctionGraphClient): Promise<any>;
    /**
     * 删除触发器
     * @param client
     */
    remove(client: FunctionGraphClient): Promise<any>;
    /**
     * 设置triggerId,某些业务（目前仅更新需要调用
     * 中需要调用该方法)
     * 先获得本地triggerId
     * 再调用templateMethod获得可能的triggerId
     * @returns
     */
    setTriggerId(triggerId?: string): Promise<void>;
    /**
     * 设置本地触发器信息
     */
    setLocalTriggerInfo(localTriggerInfo: LocalTriggerInfo): Promise<void>;
    /**
     * 获取本地触发器信息
     */
    getLocalTriggerInfo(): Promise<LocalTriggerInfo>;
    /**
     * 暂时不使用
     * 虚函数，每个触发器根据信息获取触发器ID
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
export declare class TriggerSMN extends Trigger {
    eventData: SMNEventData;
    constructor(input: TriggerInputProps, eventData: SMNEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
export declare class TriggerDIS extends Trigger {
    eventData: DISEventData;
    constructor(input: TriggerInputProps, eventData: DISEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
export declare class TriggerAPIG extends Trigger {
    eventData: APIGEventData;
    constructor(input: TriggerInputProps, eventData: APIGEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
export declare class TriggerTIMER extends Trigger {
    eventData: TIMEREventData;
    constructor(input: TriggerInputProps, eventData: TIMEREventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
export declare class TriggerLTS extends Trigger {
    eventData: LTSEventData;
    constructor(input: TriggerInputProps, eventData: LTSEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
}
export declare class TriggerOBS extends Trigger {
    eventData: OBSEventData;
    constructor(input: TriggerInputProps, eventData: OBSEventData);
    getEventData(): object;
    getTriggerId(client: FunctionGraphClient): Promise<string>;
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
export declare class TriggerClientFactory {
    triggerInputProps: TriggerInputProps;
    eventData: any;
    constructor(props: any, functionUrn?: string);
    setFunctionUrn(functionUrn: string): void;
    create(): Trigger;
}
export {};
