"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTriggerRequest = void 0;
var DeleteTriggerRequest = /** @class */ (function () {
    function DeleteTriggerRequest(func_urn, trigger_type_code, trigger_id) {
        this["func_urn"] = func_urn;
        this["trigger_type_code"] = trigger_type_code;
        this["trigger_id"] = trigger_id;
    }
    DeleteTriggerRequest.prototype.withFunctionUrn = function (func_urn) {
        this["func_urn"] = func_urn;
        return this;
    };
    DeleteTriggerRequest.prototype.withTriggerTypeCode = function (trigger_type_code) {
        this["trigger_type_code"] = trigger_type_code;
        return this;
    };
    DeleteTriggerRequest.prototype.withTriggerId = function (trigger_id) {
        this["trigger_id"] = trigger_id;
        return this;
    };
    return DeleteTriggerRequest;
}());
exports.DeleteTriggerRequest = DeleteTriggerRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlVHJpZ2dlclJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9mdW5jdGlvbkdyYXBoL21vZGVsL0RlbGV0ZVRyaWdnZXJSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBSUUsOEJBQ0UsUUFBaUIsRUFDakIsaUJBQTBCLEVBQzFCLFVBQW1CO1FBRW5CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ00sOENBQWUsR0FBdEIsVUFBdUIsUUFBaUI7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxrREFBbUIsR0FBMUIsVUFBMkIsaUJBQTBCO1FBQ25ELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLDRDQUFhLEdBQXBCLFVBQXFCLFVBQW1CO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBekJZLG9EQUFvQiJ9