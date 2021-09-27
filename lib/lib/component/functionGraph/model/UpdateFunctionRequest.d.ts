import { UpdateFunctionRequestBody } from "./UpdateFunctionRequestBody";
export declare class UpdateFunctionRequest {
    func_urn?: string;
    body?: UpdateFunctionRequestBody;
    constructor(func_urn?: string, body?: UpdateFunctionRequestBody);
    withFunctionUrn(func_urn: string): UpdateFunctionRequest;
    withBody(body: UpdateFunctionRequestBody): UpdateFunctionRequest;
}
