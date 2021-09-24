export class UpdateTriggerRequestBody {
  public trigger_status?: string;
  public constructor(trigger_status?: string) {
    this["trigger_status"] = trigger_status;
  }
  public withTriggerStatus(trigger_status?: string): UpdateTriggerRequestBody {
    this["trigger_status"] = trigger_status;
    return this;
  }
}
