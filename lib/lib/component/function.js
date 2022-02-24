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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
var core = __importStar(require("@serverless-devs/core"));
var client_1 = __importDefault(require("../client"));
var utils_1 = require("../utils");
var logger_1 = __importDefault(require("../../common/logger"));
var huaweicloud_sdk_functiongraph_1 = require("@huaweicloud/huaweicloud-sdk-functiongraph");
var huaweicloud_sdk_functiongraph_2 = require("@huaweicloud/huaweicloud-sdk-functiongraph");
// import { FUNCTION_INFO_KEYS } from './functionGraph/model/FunctionInfo'
var UpdateFunctionConfigRequestBody_1 = require("./functionGraph/model/UpdateFunctionConfigRequestBody");
var UpdateFunctionRequestBody_1 = require("./functionGraph/model/UpdateFunctionRequestBody");
var UpdateFunctionRequest_1 = require("./functionGraph/model/UpdateFunctionRequest");
var GetFunctionListRequest_1 = require("./functionGraph/model/GetFunctionListRequest");
var UpdateFunctionConfigRequest_1 = require("./functionGraph/model/UpdateFunctionConfigRequest");
var DeleteFunctionRequest_1 = require("./functionGraph/model/DeleteFunctionRequest");
var CONFIGS = require("../config");
var Function = /** @class */ (function () {
    function Function(functionInfo) {
        this.functionInfo = this.handleInput(functionInfo);
    }
    Function.prototype.handleInput = function (functionInfo) {
        functionInfo.func_name = functionInfo.func_name || CONFIGS.functionName;
        functionInfo.handler = functionInfo.handler || CONFIGS.handler;
        functionInfo.memory_size = functionInfo.memory_size || CONFIGS.memorySize;
        functionInfo.timeout = functionInfo.timeout || CONFIGS.timeout;
        functionInfo.runtime = CONFIGS.runtime(functionInfo.runtime, logger_1.default);
        functionInfo.pkg = functionInfo.pkg || CONFIGS.pkg;
        functionInfo.code_type = functionInfo.code_type || CONFIGS.codeType;
        return functionInfo;
    };
    /**
     *  创建云函数
     * @param client {FunctionGraphClient}
     * @param codeUri {string} 函数代码路径
     * @returns res {Object} 函数信息
     * @returns functionBrn {string} 函数Urn
     */
    Function.prototype.create = function (client, codeUri) {
        return __awaiter(this, void 0, void 0, function () {
            var vm1, ZipFile, body, vm, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("调用CreateFunction");
                        vm1 = core.spinner("File compressing...");
                        return [4 /*yield*/, (0, utils_1.startZip)(codeUri || "./")];
                    case 1:
                        ZipFile = _a.sent();
                        return [4 /*yield*/, (0, utils_1.deleteZip)("hello.zip")];
                    case 2:
                        _a.sent();
                        vm1.succeed("File compression completed");
                        body = new huaweicloud_sdk_functiongraph_2.CreateFunctionRequestBody()
                            .withFuncName(this.functionInfo.func_name)
                            .withHandler(this.functionInfo.handler)
                            .withMemorySize(this.functionInfo.memory_size)
                            .withTimeout(this.functionInfo.timeout)
                            .withRuntime(huaweicloud_sdk_functiongraph_2.CreateFunctionRequestBodyRuntimeEnum.NODE_JS8_10)
                            .withPackage(this.functionInfo.pkg)
                            .withCodeType(huaweicloud_sdk_functiongraph_2.CreateFunctionRequestBodyCodeTypeEnum.ZIP)
                            .withFuncCode(new huaweicloud_sdk_functiongraph_2.FuncCode().withFile(ZipFile));
                        logger_1.default.debug(JSON.stringify(body));
                        vm = core.spinner("Function ".concat(this.functionInfo.func_name, " creating."));
                        client_1.default.fgClient.createFunction(new huaweicloud_sdk_functiongraph_1.CreateFunctionRequest().withBody(body))
                            .then(function (result) {
                            vm.succeed("Function ".concat(_this.functionInfo.func_name, " created."));
                            logger_1.default.debug("\u8FD4\u56DE\u7ED3\u679C\uFF0C".concat(JSON.stringify(response.data)));
                            response = result;
                        })
                            .catch(function (ex) {
                            vm.fail("CreatingFunction API call failed.");
                            // TODO:使用更友好的错误返回
                            // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                            throw new Error(JSON.stringify(response.data));
                        });
                        return [2 /*return*/, this.handleResponse(response.data)];
                }
            });
        });
    };
    /**
     *  更新代码
     * @param client {FunctionGraphClient}
     * @param codeUri {string} 代码路径
     * @returns res {object} 函数信息
     * @returns functionUrn {string} functionBrn
     */
    Function.prototype.updateCode = function (client, codeUri) {
        return __awaiter(this, void 0, void 0, function () {
            var vm1, ZipFile, body, vm2, updateFunctionReqeust, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        vm1 = core.spinner("File compressing...");
                        return [4 /*yield*/, (0, utils_1.startZip)(codeUri || "./")];
                    case 1:
                        ZipFile = _c.sent();
                        return [4 /*yield*/, (0, utils_1.deleteZip)("hello.zip")];
                    case 2:
                        _c.sent();
                        vm1.succeed("File compression completed");
                        body = new UpdateFunctionRequestBody_1.UpdateFunctionRequestBody()
                            .withCodeType(this.functionInfo.code_type)
                            .withFunctionCode(ZipFile);
                        vm2 = core.spinner("Function code updating...");
                        _b = (_a = new UpdateFunctionRequest_1.UpdateFunctionRequest())
                            .withFunctionUrn;
                        return [4 /*yield*/, this.getFunctionUrn(client)];
                    case 3:
                        updateFunctionReqeust = _b.apply(_a, [_c.sent()])
                            .withBody(body);
                        return [4 /*yield*/, client_1.default.fgClient.updateFunction(updateFunctionReqeust)];
                    case 4:
                        response = _c.sent();
                        if (response.status !== 200) {
                            vm2.fail("Function ".concat(this.functionInfo.func_name, " updating failed."));
                            // TODO:使用更友好的错误返回
                            // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                            logger_1.default.debug(JSON.stringify(response.data));
                            logger_1.default.debug("TODO: More friendly error response needed!");
                            throw new Error(JSON.stringify(response.data));
                        }
                        else {
                            vm2.succeed("Function ".concat(this.functionInfo.func_name, " updated."));
                            logger_1.default.debug(JSON.stringify(response.data));
                        }
                        return [2 /*return*/, this.handleResponse(response.data)];
                }
            });
        });
    };
    /**
     *  更新函数配置
     * @param client {FunctionGraphClinet}
     * @returns res {Object} 函数信息，包括函数基本信息和函数Urn
     */
    Function.prototype.updateConfig = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var vm, body, func_urn, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("调用updateFunctionConfig");
                        vm = core.spinner("Function configuration updating...");
                        body = new UpdateFunctionConfigRequestBody_1.UpdateFunctionConfigRequestBody(this.functionInfo);
                        return [4 /*yield*/, this.getFunctionUrn(client)];
                    case 1:
                        func_urn = _a.sent();
                        return [4 /*yield*/, client_1.default.fgClient.updateFunctionConfig(new UpdateFunctionConfigRequest_1.UpdateFunctionConfigRequest()
                                .withFunctionUrn(func_urn)
                                .withBody(body))];
                    case 2:
                        response = _a.sent();
                        if (response.status !== 200) {
                            vm.fail("Function ".concat(this.getFunctionName(), " configuration updating failed."));
                            // TODO:使用更友好的错误返回
                            // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                            logger_1.default.debug(JSON.stringify(response.data));
                            logger_1.default.debug("TODO: More friendly error response needed!");
                            throw new Error(JSON.stringify(response.data));
                        }
                        else {
                            vm.succeed("Function ".concat(this.getFunctionName(), " configuration updated."));
                            logger_1.default.debug(JSON.stringify(response.data));
                        }
                        // 处理返回
                        // res返回response.body
                        // 返回funcitonBrn用于创建触发器
                        return [2 /*return*/, this.handleResponse(response.data)];
                }
            });
        });
    };
    /**
     *  获取函数列表
     * @param client {FunctionGraphClient}
     * @param table {boolean} 是否显示函数表
     * @retrun functions {Ayyay<any>} 函数列表信息,每一项对应一个函数,包含函数信息
     */
    Function.prototype.list = function (client, table) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.getFunctionList(new GetFunctionListRequest_1.GetFunctionListRequest().withPackage(this.functionInfo.pkg))];
                    case 1:
                        data = _a.sent();
                        if (data.status !== 200) {
                            logger_1.default.debug("获取函数列表错误");
                            throw new Error("Getting function list error");
                        }
                        if (table) {
                            (0, utils_1.tableShow)(data.data.functions, [
                                "FunctionName",
                                "Description",
                                "UpdatedAt",
                                "LastModified",
                                "Region",
                            ]);
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
    /**
     *  删除函数(及其触发器)
     * @param client {FunctionGraphClinet}
     * @return 调用结果
     */
    Function.prototype.remove = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var vmExistance, func_urn, vm, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vmExistance = core.spinner("Checking if function exists...");
                        return [4 /*yield*/, this.getFunctionUrn(client)];
                    case 1:
                        func_urn = _a.sent();
                        if (!func_urn) {
                            vmExistance.fail("Function does not exist.");
                            logger_1.default.log("Check your functionName or functionUrn.\nYou can get them in https://console.huaweicloud.com/functiongraph/#/serverless/functionList", "red");
                            return [2 /*return*/];
                        }
                        vmExistance.succeed("Function exists.");
                        vm = core.spinner("Function ".concat(this.functionInfo.func_name, " deleting..."));
                        return [4 /*yield*/, client.deleteFunction(new DeleteFunctionRequest_1.DeleteFunctionRequest(func_urn))];
                    case 2:
                        response = _a.sent();
                        if (response.status !== 200) {
                            logger_1.default.debug(JSON.stringify(response));
                            vm.fail("Function ".concat(this.functionInfo.func_name, " delete failed."));
                            throw new Error(JSON.stringify(response.data));
                        }
                        else {
                            logger_1.default.debug(JSON.stringify(response));
                            vm.succeed("Function ".concat(func_urn, " deleted."));
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     *  检查函数是否已经存在
     * @params client {FunctionGraphClient}
     * @return isCreated {Boolean}: true表示函数存在；false表示不存在
     */
    Function.prototype.check = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var functionName, functions, isCreated, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("Checking function exists.");
                        functionName = this.functionInfo.func_name;
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
                        return [2 /*return*/, isCreated];
                }
            });
        });
    };
    /**
     *  通过函数名获得func_urn，同时设置实例的functionUrn属性
     * @param client {FunctionGraphClient}
     * @returns functionUrn {stirng} 函数Urn
     */
    Function.prototype.getUrnByFunctionName = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var functions, targetFunctionName, targetFunction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("Get functionUrn by function name:" + this.functionInfo.func_name);
                        return [4 /*yield*/, this.list(client)];
                    case 1:
                        functions = _a.sent();
                        targetFunctionName = this.getFunctionName();
                        targetFunction = functions.find(function (func) {
                            return func.func_name === targetFunctionName;
                        });
                        if (targetFunction) {
                            this.functionUrn = targetFunction.func_urn;
                            logger_1.default.debug("functionUrn: ".concat(this.functionUrn));
                            return [2 /*return*/, targetFunction.func_urn];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  获得函数实例的func_urn
     * @param client {FunctionGraphClient}
     * @returns functionUrn {string} 函数Urn
     */
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
     *  处理函数信息输出
     * @param response
     * @returns
     */
    Function.prototype.handleResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var content, noNeedKeys, _i, _a, i;
            return __generator(this, function (_b) {
                logger_1.default.debug("".concat(response));
                content = [];
                noNeedKeys = [
                    "digest",
                    "last_modified",
                    "func_code",
                    "strategy_config",
                    "type",
                    "log_stream_id",
                    "log_group_id ",
                    "long_time",
                    "image_name"
                ];
                for (_i = 0, _a = Object.keys(response); _i < _a.length; _i++) {
                    i = _a[_i];
                    if (noNeedKeys.indexOf(i) < 0 && response[i]) {
                        content.push({
                            desc: i,
                            example: "".concat(response[i]),
                        });
                    }
                }
                content.push({
                    desc: "More",
                    example: CONFIGS.dashBoardUrl,
                });
                logger_1.default.debug("Calling Function response".concat(JSON.stringify(content)));
                return [2 /*return*/, {
                        res: [
                            {
                                header: "Function",
                                content: content,
                            },
                        ],
                        functionUrn: response.func_urn,
                    }];
            });
        });
    };
    /**
     *  获取函数名
     * @returns functionName {string} 函数名
     */
    Function.prototype.getFunctionName = function () {
        return this.functionInfo.func_name;
    };
    return Function;
}());
exports.default = Function;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBOEM7QUFDOUMscURBQStCO0FBQy9CLGtDQUEwRDtBQUMxRCwrREFBeUM7QUFFekMsNEZBQW1GO0FBQ25GLDRGQUE4SztBQUM5SywwRUFBMEU7QUFDMUUseUdBQXdHO0FBQ3hHLDZGQUE0RjtBQUM1RixxRkFBb0Y7QUFDcEYsdUZBQXNGO0FBQ3RGLGlHQUFnRztBQUVoRyxxRkFBb0Y7QUFDcEYsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRW5DO0lBS0Usa0JBQW1CLFlBQWdDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sOEJBQVcsR0FBbkIsVUFBb0IsWUFBZ0M7UUFDbEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDeEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDL0QsWUFBWSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDMUUsWUFBWSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDL0QsWUFBWSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0JBQU0sQ0FBQyxDQUFDO1FBQ3JFLFlBQVksQ0FBQyxHQUFHLEdBQUcsWUFB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