"use strict";
// export class CreateFunctionRequestBody {
//     private 'security_group': CreateFunctionRequestBody | undefined;
//     public constructor(security_group?: any){
//         this['security_group'] = security_group;
//     }
//     public withSecurityGroup(security_group: CreateFunctionRequestBody): CreateFunctionRequestBody{
//         this['security_group'] = security_group;
//         return this;
//     }
//     public set securityGroup(securityGroup: CreateFunctionRequestBody | undefined){
//         this['securityGroup'] = securityGroup;
//     }
//     public get securithGroup(){
//         return this['securith_group'];
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFunctionRequestBody = void 0;
var CreateFunctionRequestBody = /** @class */ (function () {
    function CreateFunctionRequestBody(input) {
        this["func_name"] = input.func_name;
        this["handler"] = input.handler;
        this["memory_size"] = input.memory_size;
        this["timeout"] = input.timeout;
        this["runtime"] = input.runtime;
        this["package"] = input.pkg;
        this["code_type"] = input.code_type;
        this["code_filename"] = input.code_filename;
        this["func_code"] = input.func_code;
        this["description"] = input.description;
        this["enterprise_project_id"] = input.enterprise_project_id;
        this["xrole"] = input.xrole;
        this["app_xrole"] = input.app_xrole;
        this["initializer_handler"] = input.initializer_handler;
        this["initializer_timeout"] = input.initializer_timeout;
    }
    CreateFunctionRequestBody.prototype.withFunctionName = function (func_name) {
        this["func_name"] = func_name;
        return this;
    };
    CreateFunctionRequestBody.prototype.withHandler = function (handler) {
        this["handler"] = handler;
        return this;
    };
    CreateFunctionRequestBody.prototype.withMemorySize = function (memory_size) {
        this["memory_size"] = memory_size;
        return this;
    };
    CreateFunctionRequestBody.prototype.withTimeout = function (timeout) {
        this["timeout"] = timeout;
        return this;
    };
    CreateFunctionRequestBody.prototype.withRuntime = function (runtime) {
        this["runtime"] = runtime;
        return this;
    };
    CreateFunctionRequestBody.prototype.withpkg = function (pkg) {
        this["package"] = pkg;
        return this;
    };
    CreateFunctionRequestBody.prototype.withCodeType = function (code_type) {
        this["code_type"] = code_type;
        return this;
    };
    CreateFunctionRequestBody.prototype.withCodeFileName = function (code_filename) {
        this["code_filename"] = code_filename;
        return this;
    };
    CreateFunctionRequestBody.prototype.withFunctionCode = function (functionCode) {
        this["func_code"] = { file: functionCode };
        return this;
    };
    CreateFunctionRequestBody.prototype.withEnterpriseProjectId = function (enterprise_project_id) {
        this["enterprise_project_id"] = enterprise_project_id;
        return this;
    };
    CreateFunctionRequestBody.prototype.withAppXrole = function (app_xrole) {
        this["app_xrole"] = app_xrole;
        return this;
    };
    CreateFunctionRequestBody.prototype.withInitializerHandler = function (initializer_handler) {
        this["initializer_handler"] = initializer_handler;
        return this;
    };
    CreateFunctionRequestBody.prototype.withInitializerTimeout = function (initializer_timeout) {
        this["initializer_timeout"] = initializer_timeout;
        return this;
    };
    CreateFunctionRequestBody.prototype.withDescription = function (des) {
        this["description"] = des;
        return this;
    };
    return CreateFunctionRequestBody;
}());
exports.CreateFunctionRequestBody = CreateFunctionRequestBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRnVuY3Rpb25SZXF1ZXN0Qm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2Z1bmN0aW9uR3JhcGgvbW9kZWwvQ3JlYXRlRnVuY3Rpb25SZXF1ZXN0Qm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkNBQTJDO0FBQzNDLHVFQUF1RTtBQUN2RSxnREFBZ0Q7QUFDaEQsbURBQW1EO0FBQ25ELFFBQVE7QUFDUixzR0FBc0c7QUFDdEcsbURBQW1EO0FBQ25ELHVCQUF1QjtBQUN2QixRQUFRO0FBQ1Isc0ZBQXNGO0FBQ3RGLGlEQUFpRDtBQUNqRCxRQUFRO0FBQ1Isa0NBQWtDO0FBQ2xDLHlDQUF5QztBQUN6QyxRQUFRO0FBQ1IsSUFBSTs7O0FBb0JKO0lBZ0JFLG1DQUFtQixLQUF5QjtRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FB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