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

export class UpdateFunctionConfigRequestBody {
  public func_name: string;
  public handler: string;
  public memory_size: number;
  public timeout: number;
  public runtime: string;
  public description?: string;
  public enterprise_project_id?: string;
  public xrole?: string;
  public app_xrole?: string;
  public initializer_handler?: string;
  public initializer_timeout?: string;
  public constructor(input: FunctionConfigProps) {
    this["func_name"] = input.func_name;
    this["handler"] = input.handler;
    this["memory_size"] = input.memory_size;
    this["timeout"] = input.timeout;
    this["runtime"] = input.runtime;
    this["description"] = input.description;
    this["enterprise_project_id"] = input.enterprise_project_id;
    this["xrole"] = input.xrole;
    this["app_xrole"] = input.app_xrole;
    this["initializer_handler"] = input.initializer_handler;
    this["initializer_timeout"] = input.initializer_timeout;
  }
  public withFunctionName(func_name: string): UpdateFunctionConfigRequestBody {
    this["func_name"] = func_name;
    return this;
  }
  public withHandler(handler: string): UpdateFunctionConfigRequestBody {
    this["handler"] = handler;
    return this;
  }
  public withMemorySize(memory_size: number): UpdateFunctionConfigRequestBody {
    this["memory_size"] = memory_size;
    return this;
  }
  public withTimeout(timeout: number): UpdateFunctionConfigRequestBody {
    this["timeout"] = timeout;
    return this;
  }
  public withRuntime(runtime: string): UpdateFunctionConfigRequestBody {
    this["runtime"] = runtime;
    return this;
  }
  public withEnterpriseProjectId(
    enterprise_project_id: string
  ): UpdateFunctionConfigRequestBody {
    this["enterprise_project_id"] = enterprise_project_id;
    return this;
  }
  public withXrole(xrole: string): UpdateFunctionConfigRequestBody {
    this["xrole"] = xrole;
    return this;
  }
  public withAppXrole(app_xrole: string): UpdateFunctionConfigRequestBody {
    this["app_xrole"] = app_xrole;
    return this;
  }
  public withInitializerHandler(
    initializer_handler: string
  ): UpdateFunctionConfigRequestBody {
    this["initializer_handler"] = initializer_handler;
    return this;
  }
  public withInitializerTimeout(
    initializer_timeout: string
  ): UpdateFunctionConfigRequestBody {
    this["initializer_timeout"] = initializer_timeout;
    return this;
  }
  public withDescription(des: string): UpdateFunctionConfigRequestBody {
    this["description"] = des;
    return this;
  }
}
