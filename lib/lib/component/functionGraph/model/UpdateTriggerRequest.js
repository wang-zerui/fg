"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTriggerRequest = void 0;
var UpdateTriggerRequest = /** @class */ (function () {
    function UpdateTriggerRequest(func_urn, trigger_type_code, trigger_id, body) {
        this["func_urn"] = func_urn;
        this["trigger_type_code"] = trigger_type_code;
        this["trigger_id"] = trigger_id;
        this["body"] = body;
    }
    UpdateTriggerRequest.prototype.withFunctionUrn = function (func_urn) {
        this["func_urn"] = func_urn;
        return this;
    };
    UpdateTriggerRequest.prototype.withTriggerTypeCode = function (trigger_type_code) {
        this["trigger_type_code"] = trigger_type_code;
        return this;
    };
    UpdateTriggerRequest.prototype.withTriggerId = function (trigger_id) {
        this["trigger_id"] = trigger_id;
        return this;
    };
    UpdateTriggerRequest.prototype.withBody = function (body) {
        this["body"] = body;
        return this;
    };
    return UpdateTriggerRequest;
}());
exports.UpdateTriggerRequest = UpdateTriggerRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlVHJpZ2dlclJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9mdW5jdGlvbkdyYXBoL21vZGVsL1VwZGF0ZVRyaWdnZXJSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBTUUsOEJBQ0UsUUFBaUIsRUFDakIsaUJBQTBCLEVBQzFCLFVBQW1CLEVBQ25CLElBQStCO1FBRS9CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw4Q0FBZSxHQUF0QixVQUF1QixRQUFpQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLGtEQUFtQixHQUExQixVQUEyQixpQkFBeUI7UUFDbEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sNENBQWEsR0FBcEIsVUFBcUIsVUFBa0I7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSx1Q0FBUSxHQUFmLFVBQWdCLElBQStCO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLG9EQUFvQiJ9