export declare class DeleteTriggerRequest {
    func_urn?: string;
    trigger_type_code?: string;
    trigger_id?: string;
    constructor(func_urn?: string, trigger_type_code?: string, trigger_id?: string);
    withFunctionUrn(func_urn?: string): DeleteTriggerRequest;
    withTriggerTypeCode(trigger_type_code?: string): DeleteTriggerRequest;
    withTriggerId(trigger_id?: string): DeleteTriggerRequest;
}
