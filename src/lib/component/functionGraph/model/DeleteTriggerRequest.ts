export class DeleteTriggerRequest {
  public func_urn?: string;
  public trigger_type_code?: string;
  public trigger_id?: string;
  public constructor(
    func_urn?: string,
    trigger_type_code?: string,
    trigger_id?: string
  ) {
    this["func_urn"] = func_urn;
    this["trigger_type_code"] = trigger_type_code;
    this["trigger_id"] = trigger_id;
  }
  public withFunctionUrn(func_urn?: string): DeleteTriggerRequest {
    this["func_urn"] = func_urn;
    return this;
  }
  public withTriggerTypeCode(trigger_type_code?: string): DeleteTriggerRequest {
    this["trigger_type_code"] = trigger_type_code;
    return this;
  }
  public withTriggerId(trigger_id?: string): DeleteTriggerRequest {
    this["trigger_id"] = trigger_id;
    return this;
  }
}
