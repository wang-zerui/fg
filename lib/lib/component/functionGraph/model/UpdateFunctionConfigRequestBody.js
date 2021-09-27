"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFunctionConfigRequestBody = void 0;
var UpdateFunctionConfigRequestBody = /** @class */ (function () {
    function UpdateFunctionConfigRequestBody(input) {
        this["func_name"] = input.func_name;
        this["handler"] = input.handler;
        this["memory_size"] = input.memory_size;
        this["timeout"] = input.timeout;
        this["runtime"] = input.runtime;
        this["description"] = input.description;
        this["enterprise_project_id"] = input.enterprise_project_id;
        this["xrole"] = input.xrole;
        this["app_xrole"] = input.app_xrole;
        this["initializer_handler"] = input.initializer_handler;
        this["initializer_timeout"] = input.initializer_timeout;
    }
    UpdateFunctionConfigRequestBody.prototype.withFunctionName = function (func_name) {
        this["func_name"] = func_name;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withHandler = function (handler) {
        this["handler"] = handler;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withMemorySize = function (memory_size) {
        this["memory_size"] = memory_size;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withTimeout = function (timeout) {
        this["timeout"] = timeout;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withRuntime = function (runtime) {
        this["runtime"] = runtime;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withEnterpriseProjectId = function (enterprise_project_id) {
        this["enterprise_project_id"] = enterprise_project_id;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withXrole = function (xrole) {
        this["xrole"] = xrole;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withAppXrole = function (app_xrole) {
        this["app_xrole"] = app_xrole;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withInitializerHandler = function (initializer_handler) {
        this["initializer_handler"] = initializer_handler;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withInitializerTimeout = function (initializer_timeout) {
        this["initializer_timeout"] = initializer_timeout;
        return this;
    };
    UpdateFunctionConfigRequestBody.prototype.withDescription = function (des) {
        this["description"] = des;
        return this;
    };
    return UpdateFunctionConfigRequestBody;
}());
exports.UpdateFunctionConfigRequestBody = UpdateFunctionConfigRequestBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlRnVuY3Rpb25Db25maWdSZXF1ZXN0Qm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2Z1bmN0aW9uR3JhcGgvbW9kZWwvVXBkYXRlRnVuY3Rpb25Db25maWdSZXF1ZXN0Qm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFjQTtJQVlFLHlDQUFtQixLQUEwQjtRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1FBQ3hELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztJQUMxRCxDQUFDO0lBQ00sMERBQWdCLEdBQXZCLFVBQXdCLFNBQWlCO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00scURBQVcsR0FBbEIsVUFBbUIsT0FBZTtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHdEQUFjLEdBQXJCLFVBQXNCLFdBQW1CO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00scURBQVcsR0FBbEIsVUFBbUIsT0FBZTtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHFEQUFXLEdBQWxCLFVBQW1CLE9BQWU7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxpRUFBdUIsR0FBOUIsVUFDRSxxQkFBNkI7UUFFN0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sbURBQVMsR0FBaEIsVUFBaUIsS0FBYTtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHNEQUFZLEdBQW5CLFVBQW9CLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sZ0VBQXNCLEdBQTdCLFVBQ0UsbUJBQTJCO1FBRTNCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLG1CQUFtQixDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLGdFQUFzQixHQUE3QixVQUNFLG1CQUEyQjtRQUUzQixJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSx5REFBZSxHQUF0QixVQUF1QixHQUFXO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsc0NBQUM7QUFBRCxDQUFDLEFBM0VELElBMkVDO0FBM0VZLDBFQUErQiJ9