
export interface InputProps {
    func_name: string;
    handler: string;
    memory_size: number;
    timeout: number;
    runtime: string;
}

export class UpdateFunctionConfigRequestBody {
    public func_name: string;
    public handler: string;
    public memory_size: number;
    public timeout: number;
    public runtime: string;
    public description?: string;
    public enterprise_project_id?: string;
    public xrole?:string;
    public app_xrole?: string;
    public initializer_handler?: string;
    public initializer_timeout?: string;
    public constructor(input: InputProps){
        this['func_name'] = input.func_name;
        this['handler'] = input.handler;
        this['memory_size'] = input.memory_size;
        this['timeout'] = input.timeout;
        this['runtime'] = input.runtime;
    }
    public withFunctionName(func_name: string): UpdateFunctionConfigRequestBody{
        this['func_name'] = func_name;
        return this;
    }
    public withHandler(handler: string): UpdateFunctionConfigRequestBody{
        this['handler'] = handler;
        return this;
    }
    public withMemorySize(memory_size: number): UpdateFunctionConfigRequestBody{
        this['memory_size'] = memory_size;
        return this;
    }
    public withTimeout(timeout: number): UpdateFunctionConfigRequestBody{
        this['timeout'] = timeout;
        return this;
    }
    public withRuntime(runtime: string): UpdateFunctionConfigRequestBody{
        this['runtime'] = runtime;
        return this;
    }
    public withEnterpriseProjectId(enterprise_project_id: string): UpdateFunctionConfigRequestBody{
        this['enterprise_project_id'] = enterprise_project_id;
        return this;
    }
    public withXrole(xrole: string): UpdateFunctionConfigRequestBody{
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(app_xrole: string): UpdateFunctionConfigRequestBody{
        this['app_xrole'] = app_xrole;
        return this;
    }
    public withInitializerHandler(initializer_handler: string): UpdateFunctionConfigRequestBody{
        this['initializer_handler'] = initializer_handler;
        return this;
    }
    public withInitializerTimeout(initializer_timeout: string): UpdateFunctionConfigRequestBody{
        this['initializer_timeout'] = initializer_timeout;
        return this;
    }
}