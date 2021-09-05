export declare class CreateTriggerRequestBody {
    trigger_type_code?: string;
    trigger_status?: string;
    event_type_code?: string;
    event_data?: object;
    constructor(trigger_type_code?: string, trigger_status?: string, event_type_code?: string, event_date?: object);
    withTriggerTypeCode(trigger_type_code: string): CreateTriggerRequestBody;
    withTriggerStatus(trigger_status: string): CreateTriggerRequestBody;
    withEventTypeCode(event_type_code: string): CreateTriggerRequestBody;
    withEventData(event_data: object): CreateTriggerRequestBody;
}
