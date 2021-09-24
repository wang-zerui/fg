export class CreateTriggerRequestBody {
  public trigger_type_code?: string;
  public trigger_status?: string;
  public event_type_code?: string;
  public event_data?: object;
  public constructor(
    trigger_type_code?: string,
    trigger_status?: string,
    event_type_code?: string,
    event_date?: object
  ) {
    this["trigger_type_code"] = trigger_type_code;
    this["trigger_status"] = trigger_status;
    this["event_type_code"] = event_type_code;
    this["event_data"] = this.event_data;
  }
  public withTriggerTypeCode(
    trigger_type_code: string
  ): CreateTriggerRequestBody {
    this["trigger_type_code"] = trigger_type_code;
    return this;
  }
  public withTriggerStatus(trigger_status: string): CreateTriggerRequestBody {
    this["trigger_status"] = trigger_status;
    return this;
  }
  public withEventTypeCode(event_type_code: string): CreateTriggerRequestBody {
    this["event_type_code"] = event_type_code;
    return this;
  }
  public withEventData(event_data: object): CreateTriggerRequestBody {
    this["event_data"] = event_data;
    return this;
  }
}
