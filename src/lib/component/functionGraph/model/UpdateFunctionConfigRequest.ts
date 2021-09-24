import { UpdateFunctionConfigRequestBody } from "./UpdateFunctionConfigRequestBody";

export class UpdateFunctionConfigRequest {
  public func_urn?: string;
  public body?: UpdateFunctionConfigRequestBody;
  public constructor(func_urn?: string) {
    this["func_urn"] = func_urn;
  }
  public withFunctionUrn(func_urn?: string): UpdateFunctionConfigRequest {
    this["func_urn"] = func_urn;
    return this;
  }
  public withBody(
    body?: UpdateFunctionConfigRequestBody
  ): UpdateFunctionConfigRequest {
    this["body"] = body;
    return this;
  }
}
