

export class ListTriggerRequest {
    public func_urn?: string;
    public constructor(func_urn?: string) {
        this['func_urn'] = func_urn;
    }
    public withFunctionUrn(func_urn?: string): ListTriggerRequest {
        this['func_urn'] = func_urn;
        return this;
    }
}