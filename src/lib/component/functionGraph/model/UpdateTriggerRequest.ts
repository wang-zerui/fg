import { UpdateTriggerRequestBody } from "./UpdateTriggerRequestBody";

export class UpdateTriggerRequest {
  public func_urn?: string;
  public trigger_type_code?: string;
  public trigger_id?: string;
  public body?: UpdateTriggerRequestBody;

  public constructor(
    func_urn?: string,
    trigger_type_code?: string,
    trigger_id?: string,
    body?: UpdateTriggerRequestBody
  ) {
    this["func_urn"] = func_urn;
    this["trigger_type_code"] = trigger_type_code;
    this["trigger_id"] = trigger_id;
    this["body"] = body;
  }

  public withFunctionUrn(func_urn?: string): UpdateTriggerRequest {
    this["func_urn"] = func_urn;
    return this;
  }

  public withTriggerTypeCode(trigger_type_code: string): UpdateTriggerRequest {
    this["trigger_type_code"] = trigger_type_code;
    return this;
  }

  public withTriggerId(trigger_id: string): UpdateTriggerRequest {
    this["trigger_id"] = trigger_id;
    return this;
  }

  public withBody(body?: UpdateTriggerRequestBody): UpdateTriggerRequest {
    this["body"] = body;
    return this;
  }
}
