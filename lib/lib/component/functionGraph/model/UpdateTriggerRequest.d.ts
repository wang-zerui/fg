import { UpdateTriggerRequestBody } from "./UpdateTriggerRequestBody";
export declare class UpdateTriggerRequest {
    func_urn?: string;
    trigger_type_code?: string;
    trigger_id?: string;
    body?: UpdateTriggerRequestBody;
    constructor(func_urn?: string, trigger_type_code?: string, trigger_id?: string, body?: UpdateTriggerRequestBody);
    withFunctionUrn(func_urn?: string): UpdateTriggerRequest;
    withTriggerTypeCode(trigger_type_code: string): UpdateTriggerRequest;
    withTriggerId(trigger_id: string): UpdateTriggerRequest;
    withBody(body?: UpdateTriggerRequestBody): UpdateTriggerRequest;
}
