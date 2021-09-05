export interface FunctionConfigProps {
    func_name: string;
    handler: string;
    memory_size: number;
    timeout: number;
    runtime: string;
    description?: string;
    enterprise_project_id?: string;
    xrole?: string;
    app_xrole?: string;
    initializer_handler?: string;
    initializer_timeout?: string;
}
export declare class UpdateFunctionConfigRequestBody {
    func_name: string;
    handler: string;
    memory_size: number;
    timeout: number;
    runtime: string;
    description?: string;
    enterprise_project_id?: string;
    xrole?: string;
    app_xrole?: string;
    initializer_handler?: string;
    initializer_timeout?: string;
    constructor(input: FunctionConfigProps);
    withFunctionName(func_name: string): UpdateFunctionConfigRequestBody;
    withHandler(handler: string): UpdateFunctionConfigRequestBody;
    withMemorySize(memory_size: number): UpdateFunctionConfigRequestBody;
    withTimeout(timeout: number): UpdateFunctionConfigRequestBody;
    withRuntime(runtime: string): UpdateFunctionConfigRequestBody;
    withEnterpriseProjectId(enterprise_project_id: string): UpdateFunctionConfigRequestBody;
    withXrole(xrole: string): UpdateFunctionConfigRequestBody;
    withAppXrole(app_xrole: string): UpdateFunctionConfigRequestBody;
    withInitializerHandler(initializer_handler: string): UpdateFunctionConfigRequestBody;
    withInitializerTimeout(initializer_timeout: string): UpdateFunctionConfigRequestBody;
    withDescription(des: string): UpdateFunctionConfigRequestBody;
}
