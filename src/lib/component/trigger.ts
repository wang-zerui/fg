import { FunctionGraphClient } from "./functionGraph/FunctionGraphClient";
import { CreateTriggerRequest } from "./functionGraph/model/CreateTriggerRequest";
import { CreateTriggerRequestBody } from "./functionGraph/model/CreateTriggerRequestBody";
import { ListTriggerRequest } from "./functionGraph/model/ListTriggerRequest";
import { UpdateTriggerRequest } from "./functionGraph/model/UpdateTriggerRequest";
import { UpdateTriggerRequestBody } from "./functionGraph/model/UpdateTriggerRequestBody";
import logger from '../../common/logger';

export abstract class Trigger {
    public triggerId?: string;
    public triggerTypeCode: string;
    public eventTypeCode: string;
    public status: string;
    public functionUrn: string;
    static TRIGGER_TYPE_CODES = ['SMN', 'APIG', 'OBS', 'TIMER', 'DMS', 'DIS', 'LTS', 'DDS', 'CTS', 'kafka'];
    static STATUSES = ['ACTIVE', 'DISABLED'];
    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string){
        this['triggerTypeCode'] = triggerTypeCode;
        this['status'] = status;
        this['eventTypeCode'] = eventTypeCode;
        this['functionUrn'] = functionUrn;
    }
    abstract getEventData():object;

    /**
     * 创建触发器
     * @param client FunctionGraphClient
     * @param functionUrn 函数代号
     * @returns 
     */
    public async create(client:FunctionGraphClient): Promise<any> {
        const body = new CreateTriggerRequestBody()
            .withTriggerTypeCode(this.triggerTypeCode)
            .withTriggerStatus(this.status)
            .withEventTypeCode(this.eventTypeCode)
            .withEventData(this.getEventData)
        
        const response = await client.createTrigger(new CreateTriggerRequest()
            .withFunctionUrn(this.functionUrn)
            .withBody(body))
        if ( response.status !== 200 ) {
            throw new Error(JSON.stringify(response.data));
        }else{
            return this.handleResponse(response.data);
        }
    }

    /**
     * 获取触发器列表
     * @param client 
     * @param functionUrn 
     * @returns 
     */
    public async list(client: FunctionGraphClient): Promise<Array<any>> {
        const response = await client.listTrigger(new ListTriggerRequest()
            .withFunctionUrn(this.functionUrn))
        if (response.status !== 200 ){
            throw new Error(JSON.stringify(response.data));
        }else{
            return response.data;
        }
    }

    /**
     * 更新触发器
     * @param Client
     * @param functionUrn
     * @returns 
     */
    //@ts-ignore
    private async update(client: FunctionGraphClient): Promise<any> {
        const body = new UpdateTriggerRequestBody()
            .withTriggerStatus(this.status);
        
        const response = await client.updateTrigger(new UpdateTriggerRequest()
            .withTriggerId(await this.getTriggerId(client))
            .withFunctionUrn(this.functionUrn)
            .withTriggerTypeCode(this.triggerTypeCode)
            .withBody(body))
        if (response.status !== 200 ){
            throw new Error(JSON.stringify(response.data));
        }else{
            return response.data;
        }
    }
    
    public async remove(client: FunctionGraphClient): Promise<any> {
        logger.info("Dummy remove");
    }

    abstract getTriggerId(client: FunctionGraphClient): Promise<string>;

    /**
     * 处理返回
     * @param response 
     * @returns 
     */
    public handleResponse(response){
        let triggerInfo = [
            {
                desc: "TriggerId",
                example: response.trigger_id
            },
            {
                desc: "TriggerTypeCode",
                example: response.trigger_type_code
            },
            {
                desc: "TriggerStatus",
                example: response.trigger_status
            }
        ];
        let eventDataInfo = [];
        for (let key of Object.keys(response.event_data)){
            eventDataInfo.push({
                desc: key,
                example: response.event_data[key]
            })
        }
        return [
            {
                header: 'Trigger',
                content: triggerInfo
            },
            {
                header: 'Trigger event data',
                content: eventDataInfo
            }
        ]
    }
}

interface SMNEventData {
    topicUrn: string, //SMN服务的topic_urn，创建时必填。唯一
    subscriptionStatus: string //topic_urn的订阅状态：Unconfirmed / Confirmed。
}

interface CTSEventData {
    name: string,
    operations: string
}

interface DDSEventData {
    instanceId: string,
    collectionName: string,
    dbName: string,
    dbPassword: string,
    batchSize: Array<string>
}

interface KAFKAEventData {
    instance_id: string,
	db_name: string,
    collection_name: string,
    db_user: string,
	db_password: string,
    batch_size: number,
}

export class TriggerSMN extends Trigger{
    public eventData: SMNEventData;

    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: SMNEventData) {
        super(triggerTypeCode, eventTypeCode, status, functionUrn);
        this['eventData'] = eventData;
    }
    
    public getEventData():object {
        return this.eventData;
    }

    public async getTriggerId(client: FunctionGraphClient): Promise<string>{
        const topicUrn = this.eventData.topicUrn;
        const trigger = (await this.list(client)).find(trigger => {return trigger.event_data.topic_urn == topicUrn})
        if(trigger.trigger_id){
            this.triggerId = trigger.trigger_id;  
            return this.triggerId;
        }else{
            return null;
        }
    }
}

// interface DMSEventData {
//     queueId: string,
//     consumerGroupId: string
// }

// export class TriggerDMS extends Trigger{
//     public eventData: DMSEventData;

//     public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: DMSEventData) {
//         super(triggerTypeCode, eventTypeCode, status, functionUrn);
//         this['eventData'] = eventData;
//     }
    
//     public getEventData():object {
//         return this.eventData;
//     }
// }

interface DISEventData {
    streamName: string,
    sharditeratorType: string,
    batchSize?: number,
    pollingInterval?: number
}

export class TriggerDIS extends Trigger{
    public eventData: DISEventData;

    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: DISEventData) {
        super(triggerTypeCode, eventTypeCode, status, functionUrn);
        this['eventData'] = eventData;
    }
    
    public getEventData():object {
        return this.eventData;
    }

    public async getTriggerId(client:FunctionGraphClient): Promise<string> {
        if(this.triggerId){
            return this.triggerId;
        }
        const triggers = await this.list(client);
        const eventData = this.eventData;
        const trigger = triggers.find(trigger => {
            return trigger.event_data.streamName == eventData.streamName
        })
        if(trigger.trigger_id){
            this.triggerId = trigger.trigger_id;  
            return this.triggerId;
        }else{
            return null;
        }
    }

}

interface APIGEventData {
    groupId:string, 
    envId:string, 
    auth:string, 
    protocol:string, 
    name:string, 
    path:string, 
    matchMode:string,  
    reqMethod:string , 
    backendType:string , 
    type: number,  
    slDomain:string , 
    instanceId:string 
}

export class TriggerAPIG extends Trigger{
    public eventData: APIGEventData;

    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: APIGEventData) {
        super(triggerTypeCode, eventTypeCode, status, functionUrn);
        this['eventData'] = eventData;
    }
    
    public getEventData():object {
        return this.eventData;
    }

    public async getTriggerId(client:FunctionGraphClient): Promise<string> {
        if(this.triggerId){
            return this.triggerId;
        }
        const triggers = await this.list(client);
        const eventData = this.eventData;
        const trigger = triggers.find(trigger => {
            return trigger.event_data.streamName === eventData.groupId && trigger.event_data.env_id  === eventData.envId;
        })
        if(trigger.trigger_id){
            this.triggerId = trigger.trigger_id;  
            return this.triggerId;
        }else{
            return null;
        }
    }
}

interface TIMEREventData {
    name: string,
    scheduleType: string,
    schedule: string,
    userEvent?: string
}

export class TriggerTIMER extends Trigger{
    public eventData: TIMEREventData;

    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: TIMEREventData) {
        super(triggerTypeCode, eventTypeCode, status, functionUrn);
        this['eventData'] = eventData;
    }
    
    public getEventData():object {
        return this.eventData;
    }

    public async getTriggerId(client: FunctionGraphClient): Promise<string> {
        if(this.triggerId){
            return this.triggerId;
        }
        const triggers = await this.list(client);
        const eventData = this.eventData;
        const trigger = triggers.find(trigger => {
            return trigger.event_data.name === eventData.name;
        })
        if(trigger.trigger_id){
            this.triggerId = trigger.trigger_id;  
            return this.triggerId;
        }else{
            return null;
        }
    }
}

interface LTSEventData {
    groupId: string,
    topicId: string
}

export class TriggerLTS extends Trigger{
    public eventData: LTSEventData;

    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: LTSEventData) {
        super(triggerTypeCode, eventTypeCode, status, functionUrn);
        this['eventData'] = eventData;
    }
    
    public getEventData():object {
        return this.eventData;
    }

    public async getTriggerId(client: FunctionGraphClient): Promise<string> {
        if(this.triggerId){
            return this.triggerId;
        }
        const triggers = await this.list(client);
        const eventData = this.eventData;
        const trigger = triggers.find(trigger => {
            return trigger.event_data.group_id === eventData.groupId && trigger.event_data.topic_id === eventData.topicId;
        })
        if(trigger.trigger_id){
            this.triggerId = trigger.trigger_id;  
            return this.triggerId;
        }else{
            return null;
        }
    }
}



interface OBSEventData {
    bucket: string,
    events: Array<string>,
    prefix?: string,
    suffix?: string
}

export class TriggerOBS extends Trigger{
    public eventData: OBSEventData;

    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: OBSEventData) {
        super(triggerTypeCode, eventTypeCode, status, functionUrn);
        this['eventData'] = eventData;
    }
    
    public getEventData():object {
        return this.eventData;
    }

    public async getTriggerId(client: FunctionGraphClient): Promise<string> {
        if(this.triggerId){
            return this.triggerId;
        }
        const triggers = await this.list(client);
        const eventData = this.eventData;

        const trigger = triggers.find(trigger => {
            return trigger.event_data.bucket === eventData.bucket && trigger.event_data.prefix === eventData.prefix && trigger.event_data.suffix === eventData.suffix;
        })
        if(trigger.trigger_id){
            this.triggerId = trigger.trigger_id;  
            return this.triggerId;
        }else{
            return null;
        }
    }
}

interface OBSEventData {
    bucket: string,
    events: Array<string>,
    prefix?: string,
    suffix?: string
}


export class TriggerCTS extends Trigger{
    public eventData: CTSEventData;

    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: CTSEventData) {
        super(triggerTypeCode, eventTypeCode, status, functionUrn);
        this['eventData'] = eventData;
    }
    
    public getEventData():object {
        return this.eventData;
    }

    public async getTriggerId(client: FunctionGraphClient): Promise<any> {
        return null;
    }
}

export class TriggerDDS extends Trigger{
    public eventData: DDSEventData;

    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: DDSEventData) {
        super(triggerTypeCode, eventTypeCode, status, functionUrn);
        this['eventData'] = eventData;
    }
    
    public getEventData():object {
        return this.eventData;
    }

    public async getTriggerId(client: FunctionGraphClient): Promise<any> {
        return null;
    } 
}

export class TriggerKAFKA extends Trigger{
    public eventData: KAFKAEventData;

    public constructor(triggerTypeCode: string, eventTypeCode: string, status: string, functionUrn: string, eventData: KAFKAEventData) {
        super(triggerTypeCode, eventTypeCode, status, functionUrn);
        this['eventData'] = eventData;
    }
    
    public getEventData():object {
        return this.eventData;
    }

    public async getTriggerId(client: FunctionGraphClient): Promise<any> {
        return null;
    }
}