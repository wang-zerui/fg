import { CreateTriggerRequestBody } from "./CreateTriggerRequestBody";
export declare class CreateTriggerRequest {
    func_urn?: string;
    body?: object;
    constructor(func_urn?: string, body?: CreateTriggerRequestBody);
    withFunctionUrn(func_urn: string): CreateTriggerRequest;
    withBody(body: CreateTriggerRequestBody): CreateTriggerRequest;
}
