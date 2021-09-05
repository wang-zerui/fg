"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
var core = __importStar(require("@serverless-devs/core"));
var client_1 = __importDefault(require("../client"));
var utils_1 = require("../utils");
var logger_1 = __importDefault(require("../../common/logger"));
var CreateFunctionRequest_1 = require("./functionGraph/model/CreateFunctionRequest");
var CreateFunctionRequestBody_1 = require("./functionGraph/model/CreateFunctionRequestBody");
// import { FUNCTION_INFO_KEYS } from './functionGraph/model/FunctionInfo'
var UpdateFunctionConfigRequestBody_1 = require("./functionGraph/model/UpdateFunctionConfigRequestBody");
var UpdateFunctionRequestBody_1 = require("./functionGraph/model/UpdateFunctionRequestBody");
var UpdateFunctionRequest_1 = require("./functionGraph/model/UpdateFunctionRequest");
var GetFunctionListRequest_1 = require("./functionGraph/model/GetFunctionListRequest");
var UpdateFunctionConfigRequest_1 = require("./functionGraph/model/UpdateFunctionConfigRequest");
var DeleteFunctionRequest_1 = require("./functionGraph/model/DeleteFunctionRequest");
var CONFIGS = require('../config');
var Function = /** @class */ (function () {
    function Function(functionInfo) {
        this.functionInfo = this.handleInput(functionInfo);
    }
    Function.prototype.handleInput = function (functionInfo) {
        functionInfo.func_name = functionInfo.func_name || CONFIGS.functionName;
        functionInfo.handler = functionInfo.handler || CONFIGS.handler;
        functionInfo.memory_size = functionInfo.memory_size || CONFIGS.memorySize;
        functionInfo.timeout = functionInfo.timeout || CONFIGS.timeout;
        functionInfo.runtime = functionInfo.runtime || CONFIGS.handler(functionInfo.runtime);
        functionInfo.pkg = functionInfo.pkg || CONFIGS.pkg;
        functionInfo.code_type = functionInfo.code_type || CONFIGS.codeType;
        return functionInfo;
    };
    /**
     * 创建函数
     * @param props
     * @returns res
     * @returns functionBrn
     */
    Function.prototype.create = function (client, codeUri) {
        return __awaiter(this, void 0, void 0, function () {
            var vm1, ZipFile, body, vm, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vm1 = core.spinner('File compressing...');
                        return [4 /*yield*/, utils_1.startZip(codeUri || './')];
                    case 1:
                        ZipFile = _a.sent();
                        return [4 /*yield*/, utils_1.deleteZip('hello.zip')];
                    case 2:
                        _a.sent();
                        vm1.succeed('File compression completed');
                        body = new CreateFunctionRequestBody_1.CreateFunctionRequestBody(this.functionInfo)
                            .withFunctionCode(ZipFile);
                        vm = core.spinner("Function " + this.functionInfo.func_name + " creating.");
                        return [4 /*yield*/, client_1.default.fgClient.createFunction(new CreateFunctionRequest_1.CreateFunctionRequest()
                                .withBody(body))];
                    case 3:
                        response = _a.sent();
                        if (response.status === 200) {
                            vm.succeed("Function " + this.functionInfo.func_name + " created.");
                        }
                        else {
                            vm.fail("Function " + this.functionInfo.func_name + " creating failed.");
                            // TODO:使用更友好的错误返回
                            // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                            throw new Error(JSON.stringify(response.data));
                        }
                        return [2 /*return*/, this.handleResponse(response.data)];
                }
            });
        });
    };
    /**
     * 更新代码
     * @param props
     * @returns res
     * @returns functionBrn
     */
    Function.prototype.updateCode = function (client, codeUri) {
        return __awaiter(this, void 0, void 0, function () {
            var vm1, ZipFile, body, vm2, updateFunctionReqeust, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        vm1 = core.spinner('File compressing...');
                        return [4 /*yield*/, utils_1.startZip(codeUri || './')];
                    case 1:
                        ZipFile = _c.sent();
                        return [4 /*yield*/, utils_1.deleteZip('hello.zip')];
                    case 2:
                        _c.sent();
                        vm1.succeed('File compression completed');
                        body = new UpdateFunctionRequestBody_1.UpdateFunctionRequestBody()
                            .withCodeType(this.functionInfo.code_type)
                            .withFunctionCode(ZipFile);
                        vm2 = core.spinner('Function code updating...');
                        _b = (_a = new UpdateFunctionRequest_1.UpdateFunctionRequest()).withFunctionUrn;
                        return [4 /*yield*/, this.getFunctionUrn(client)];
                    case 3:
                        updateFunctionReqeust = _b.apply(_a, [_c.sent()])
                            .withBody(body);
                        return [4 /*yield*/, client_1.default.fgClient
                                .updateFunction(updateFunctionReqeust)];
                    case 4:
                        response = _c.sent();
                        if (response.status !== 200) {
                            vm2.fail("Function " + this.functionInfo.func_name + " updating failed.");
                            // TODO:使用更友好的错误返回
                            // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                            throw new Error(JSON.stringify(response.data));
                        }
                        else {
                            vm2.succeed("Function " + this.functionInfo.func_name + " updated.");
                        }
                        return [2 /*return*/, this.handleResponse(response.data)];
                }
            });
        });
    };
    /**
     * 更新配置
     * @param props
     * @returns res
     * @returns functionBrn
     */
    Function.prototype.updateConfig = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var vm, body, response, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        vm = core.spinner('Function configuration updating...');
                        body = new UpdateFunctionConfigRequestBody_1.UpdateFunctionConfigRequestBody(this.functionInfo);
                        _b = (_a = client_1.default.fgClient).updateFunctionConfig;
                        _d = (_c = new UpdateFunctionConfigRequest_1.UpdateFunctionConfigRequest()).withFunctionUrn;
                        return [4 /*yield*/, this.getFunctionUrn(client)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_e.sent()])
                                .withBody(body)])];
                    case 2:
                        response = _e.sent();
                        if (response.status !== 200) {
                            vm.fail("Function " + this.functionInfo.func_name + " configuration updating failed.");
                            // TODO:使用更友好的错误返回
                            // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                            throw new Error(JSON.stringify(response.data));
                        }
                        else {
                            vm.succeed("Function " + this.functionInfo.func_name + " configuration updated.");
                        }
                        // 处理返回
                        // res返回response.body
                        // 返回funcitonBrn用于创建触发器
                        return [2 /*return*/, this.handleResponse(response.data)];
                }
            });
        });
    };
    Function.prototype.list = function (client, table) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client
                            .getFunctionList(new GetFunctionListRequest_1.GetFunctionListRequest()
                            .withPackage(this.functionInfo.pkg))];
                    case 1:
                        data = _a.sent();
                        if (data.status !== 200) {
                            logger_1.default.debug("获取函数列表错误");
                            throw new Error("Getting function list error");
                        }
                        if (table) {
                            utils_1.tableShow(data.data.functions, ['FunctionName', 'Description', 'UpdatedAt', 'LastModified', 'Region']);
                            return [2 /*return*/, data.data.functions];
                        }
                        else {
                            return [2 /*return*/, data.data.functions];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Function.prototype.remove = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var func_urn, vm, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFunctionUrn(client)];
                    case 1:
                        func_urn = _a.sent();
                        vm = core.spinner("Function " + this.functionInfo.func_name + " deleting...");
                        return [4 /*yield*/, client
                                .deleteFunction(new DeleteFunctionRequest_1.DeleteFunctionRequest(func_urn))];
                    case 2:
                        response = _a.sent();
                        if (response.status !== 200) {
                            logger_1.default.debug(JSON.stringify(response));
                            vm.fail("Function " + this.functionInfo.func_name + " delete failed.");
                            throw new Error(JSON.stringify(response.data));
                        }
                        else {
                            logger_1.default.debug(JSON.stringify(response));
                            vm.succeed("Function " + func_urn + " deleted.");
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * 一些衍生方法
     */
    /**
     * Check function existance
     */
    Function.prototype.check = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var functionName, vm, functions, isCreated, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("Checking function exists.");
                        functionName = this.functionInfo.func_name;
                        vm = core.spinner('Checking if ' + functionName + ' exits...');
                        return [4 /*yield*/, this.list(client)];
                    case 1:
                        functions = _a.sent();
                        isCreated = false;
                        for (i = 0; i < functions.length; i++) {
                            if (functions[i].func_name === functionName) {
                                isCreated = true;
                                break;
                            }
                        }
                        if (isCreated) {
                            vm.succeed("Function " + functionName + " is already online.");
                        }
                        else {
                            vm.succeed("Function " + functionName + " does not exitst.");
                        }
                        return [2 /*return*/, isCreated];
                }
            });
        });
    };
    /**
     * 使用函数名获得func_urn
     * @param functionName
     * @param pkg
     * @returns
     */
    Function.prototype.getUrnByFunctionName = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var functions, _i, functions_1, func;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug('Get functionBrn by function name:' + this.functionInfo.func_name);
                        return [4 /*yield*/, this.list(client)];
                    case 1:
                        functions = _a.sent();
                        for (_i = 0, functions_1 = functions; _i < functions_1.length; _i++) {
                            func = functions_1[_i];
                            if (func.func_name === this.functionInfo.func_name) {
                                this.functionUrn = func.func_urn;
                                return [2 /*return*/, func.func_urn];
                            }
                        }
                        throw new Error("Function not found.");
                }
            });
        });
    };
    Function.prototype.getFunctionUrn = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.functionUrn;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getUrnByFunctionName(client)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2: return [2 /*return*/, _a];
                }
            });
        });
    };
    /**
     * 处理函数信息输出
     * @param response
     * @returns
     */
    Function.prototype.handleResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var content, noNeedKeys, _i, _a, i;
            return __generator(this, function (_b) {
                logger_1.default.debug("" + response);
                content = [];
                noNeedKeys = ['digest', 'last_modified', 'func_code', 'strategy_config', 'type', 'log_stream_id', 'log_group_id ', 'long_time'];
                for (_i = 0, _a = Object.keys(response); _i < _a.length; _i++) {
                    i = _a[_i];
                    if (noNeedKeys.indexOf(i) < 0 && response[i]) {
                        content.push({
                            desc: i,
                            example: "" + response[i],
                        });
                    }
                }
                content.push({
                    desc: 'More',
                    example: CONFIGS.dashBoardUrl
                });
                logger_1.default.debug("Calling Function response" + JSON.stringify(content));
                return [2 /*return*/, {
                        res: [
                            {
                                header: 'Function',
                                content: content,
                            },
                        ],
                        functionUrn: response.func_urn,
                    }];
            });
        });
    };
    return Function;
}());
exports.default = Function;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBQ1osMERBQThDO0FBQzlDLHFEQUErQjtBQUMvQixrQ0FBMEQ7QUFDMUQsK0RBQXlDO0FBRXpDLHFGQUFvRjtBQUNwRiw2RkFBNEY7QUFDNUYsMEVBQTBFO0FBQzFFLHlHQUF3RztBQUN4Ryw2RkFBNEY7QUFDNUYscUZBQW9GO0FBQ3BGLHVGQUFzRjtBQUN0RixpR0FBZ0c7QUFFaEcscUZBQW9GO0FBQ3BGLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVuQztJQUdFLGtCQUFtQixZQUFnQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLDhCQUFXLEdBQW5CLFVBQW9CLFlBQWdDO1FBQ2hELFlBQVksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3hFLFlBQVksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQy9ELFlBQVksQ0FBQyxXQUFXLEdBQUksWUFBWSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQzNFLFlBQVksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQy9ELFlBQVksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRixZQUFZ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