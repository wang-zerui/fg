"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTriggerRequestBody = void 0;
var CreateTriggerRequestBody = /** @class */ (function () {
    function CreateTriggerRequestBody(trigger_type_code, trigger_status, event_type_code, event_date) {
        this["trigger_type_code"] = trigger_type_code;
        this["trigger_status"] = trigger_status;
        this["event_type_code"] = event_type_code;
        this["event_data"] = this.event_data;
    }
    CreateTriggerRequestBody.prototype.withTriggerTypeCode = function (trigger_type_code) {
        this["trigger_type_code"] = trigger_type_code;
        return this;
    };
    CreateTriggerRequestBody.prototype.withTriggerStatus = function (trigger_status) {
        this["trigger_status"] = trigger_status;
        return this;
    };
    CreateTriggerRequestBody.prototype.withEventTypeCode = function (event_type_code) {
        this["event_type_code"] = event_type_code;
        return this;
    };
    CreateTriggerRequestBody.prototype.withEventData = function (event_data) {
        this["event_data"] = event_data;
        return this;
    };
    return CreateTriggerRequestBody;
}());
exports.CreateTriggerRequestBody = CreateTriggerRequestBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlVHJpZ2dlclJlcXVlc3RCb2R5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvZnVuY3Rpb25HcmFwaC9tb2RlbC9DcmVhdGVUcmlnZ2VyUmVxdWVzdEJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7SUFLRSxrQ0FDRSxpQkFBMEIsRUFDMUIsY0FBdUIsRUFDdkIsZUFBd0IsRUFDeEIsVUFBbUI7UUFFbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsY0FBYyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDO0lBQ00sc0RBQW1CLEdBQTFCLFVBQ0UsaUJBQXlCO1FBRXpCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLG9EQUFpQixHQUF4QixVQUF5QixjQUFzQjtRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxjQUFjLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sb0RBQWlCLEdBQXhCLFVBQXlCLGVBQXVCO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxnREFBYSxHQUFwQixVQUFxQixVQUFrQjtRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSw0REFBd0IifQ==