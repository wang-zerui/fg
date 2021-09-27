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
        functionInfo.runtime =
            functionInfo.runtime || CONFIGS.handler(functionInfo.runtime);
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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("调用CreateFunction");
                        vm1 = core.spinner("File compressing...");
                        return [4 /*yield*/, utils_1.startZip(codeUri || "./")];
                    case 1:
                        ZipFile = _a.sent();
                        return [4 /*yield*/, utils_1.deleteZip("hello.zip")];
                    case 2:
                        _a.sent();
                        vm1.succeed("File compression completed");
                        body = new CreateFunctionRequestBody_1.CreateFunctionRequestBody(this.functionInfo).withFunctionCode(ZipFile);
                        logger_1.default.debug(JSON.stringify(body));
                        vm = core.spinner("Function " + this.functionInfo.func_name + " creating.");
                        return [4 /*yield*/, client_1.default.fgClient.createFunction(new CreateFunctionRequest_1.CreateFunctionRequest().withBody(body))];
                    case 3:
                        response = _a.sent();
                        if (response.status === 200) {
                            vm.succeed("Function " + this.functionInfo.func_name + " created.");
                            logger_1.default.debug("\u8FD4\u56DE\u7ED3\u679C\uFF0C" + JSON.stringify(response.data));
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
                        return [4 /*yield*/, utils_1.startZip(codeUri || "./")];
                    case 1:
                        ZipFile = _c.sent();
                        return [4 /*yield*/, utils_1.deleteZip("hello.zip")];
                    case 2:
                        _c.sent();
                        vm1.succeed("File compression completed");
                        body = new UpdateFunctionRequestBody_1.UpdateFunctionRequestBody()
                            .withCodeType(this.functionInfo.code_type)
                            .withFunctionCode(ZipFile);
                        vm2 = core.spinner("Function code updating...");
                        _b = (_a = new UpdateFunctionRequest_1.UpdateFunctionRequest()).withFunctionUrn;
                        return [4 /*yield*/, this.getFunctionUrn(client)];
                    case 3:
                        updateFunctionReqeust = _b.apply(_a, [_c.sent()])
                            .withBody(body);
                        return [4 /*yield*/, client_1.default.fgClient.updateFunction(updateFunctionReqeust)];
                    case 4:
                        response = _c.sent();
                        if (response.status !== 200) {
                            vm2.fail("Function " + this.functionInfo.func_name + " updating failed.");
                            // TODO:使用更友好的错误返回
                            // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                            logger_1.default.debug(JSON.stringify(response.data));
                            logger_1.default.debug("TODO: More friendly error response needed!");
                            throw new Error(JSON.stringify(response.data));
                        }
                        else {
                            vm2.succeed("Function " + this.functionInfo.func_name + " updated.");
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
                            vm.fail("Function " + this.getFunctionName() + " configuration updating failed.");
                            // TODO:使用更友好的错误返回
                            // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                            logger_1.default.debug(JSON.stringify(response.data));
                            logger_1.default.debug("TODO: More friendly error response needed!");
                            throw new Error(JSON.stringify(response.data));
                        }
                        else {
                            vm.succeed("Function " + this.getFunctionName() + " configuration updated.");
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
                            utils_1.tableShow(data.data.functions, [
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
                        vm = core.spinner("Function " + this.functionInfo.func_name + " deleting...");
                        return [4 /*yield*/, client.deleteFunction(new DeleteFunctionRequest_1.DeleteFunctionRequest(func_urn))];
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
                            logger_1.default.debug("functionUrn: " + this.functionUrn);
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
                logger_1.default.debug("" + response);
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
                            example: "" + response[i],
                        });
                    }
                }
                content.push({
                    desc: "More",
                    example: CONFIGS.dashBoardUrl,
                });
                logger_1.default.debug("Calling Function response" + JSON.stringify(content));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBOEM7QUFDOUMscURBQStCO0FBQy9CLGtDQUEwRDtBQUMxRCwrREFBeUM7QUFFekMscUZBQW9GO0FBQ3BGLDZGQUE0RjtBQUM1RiwwRUFBMEU7QUFDMUUseUdBQXdHO0FBQ3hHLDZGQUE0RjtBQUM1RixxRkFBb0Y7QUFDcEYsdUZBQXNGO0FBQ3RGLGlHQUFnRztBQUVoRyxxRkFBb0Y7QUFDcEYsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRW5DO0lBS0Usa0JBQW1CLFlBQWdDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sOEJBQVcsR0FBbkIsVUFBb0IsWUFBZ0M7UUFDbEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDeEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDL0QsWUFBWSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDMUUsWUFBWSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDL0QsWUFBWSxDQUFDLE9BQU87WUFDbEIsWUFBWSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxZQUFZLENBQUMsR0FB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