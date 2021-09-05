import { UpdateFunctionConfigRequestBody } from "./UpdateFunctionConfigRequestBody";
export declare class UpdateFunctionConfigRequest {
    func_urn?: string;
    body?: UpdateFunctionConfigRequestBody;
    constructor(func_urn?: string);
    withFunctionUrn(func_urn?: string): UpdateFunctionConfigRequest;
    withBody(body?: UpdateFunctionConfigRequestBody): UpdateFunctionConfigRequest;
}
