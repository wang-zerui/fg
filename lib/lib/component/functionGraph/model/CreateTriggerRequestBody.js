"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTriggerRequestBody = void 0;
var CreateTriggerRequestBody = /** @class */ (function () {
    function CreateTriggerRequestBody(trigger_type_code, trigger_status, event_type_code, event_date) {
        this['trigger_type_code'] = trigger_type_code;
        this['trigger_status'] = trigger_status;
        this['event_type_code'] = event_type_code;
        this['event_data'] = this.event_data;
    }
    CreateTriggerRequestBody.prototype.withTriggerTypeCode = function (trigger_type_code) {
        this['trigger_type_code'] = trigger_type_code;
        return this;
    };
    CreateTriggerRequestBody.prototype.withTriggerStatus = function (trigger_status) {
        this['trigger_status'] = trigger_status;
        return this;
    };
    CreateTriggerRequestBody.prototype.withEventTypeCode = function (event_type_code) {
        this['event_type_code'] = event_type_code;
        return this;
    };
    CreateTriggerRequestBody.prototype.withEventData = function (event_data) {
        this['event_data'] = event_data;
        return this;
    };
    return CreateTriggerRequestBody;
}());
exports.CreateTriggerRequestBody = CreateTriggerRequestBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlVHJpZ2dlclJlcXVlc3RCb2R5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvZnVuY3Rpb25HcmFwaC9tb2RlbC9DcmVhdGVUcmlnZ2VyUmVxdWVzdEJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7SUFLSSxrQ0FBbUIsaUJBQTBCLEVBQUUsY0FBdUIsRUFBRSxlQUF3QixFQUFFLFVBQWtCO1FBQ2hILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxlQUFlLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekMsQ0FBQztJQUNNLHNEQUFtQixHQUExQixVQUEyQixpQkFBeUI7UUFDaEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLG9EQUFpQixHQUF4QixVQUF5QixjQUFzQjtRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxjQUFjLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLG9EQUFpQixHQUF4QixVQUF5QixlQUF1QjtRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxlQUFlLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLGdEQUFhLEdBQXBCLFVBQXFCLFVBQWtCO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSw0REFBd0IifQ==