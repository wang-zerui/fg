import { CreateTriggerRequestBody } from "./CreateTriggerRequestBody";

export class CreateTriggerRequest {
  public func_urn?: string;
  public body?: object;
  public constructor(func_urn?: string, body?: CreateTriggerRequestBody) {
    this["func_urn"] = func_urn;
    this["body"] = body;
  }
  public withFunctionUrn(func_urn: string): CreateTriggerRequest {
    this["func_urn"] = func_urn;
    return this;
  }
  public withBody(body: CreateTriggerRequestBody): CreateTriggerRequest {
    this["body"] = body;
    return this;
  }
}
