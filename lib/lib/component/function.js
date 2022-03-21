"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var huaweicloud_sdk_functiongraph_3 = require("@huaweicloud/huaweicloud-sdk-functiongraph");
var huaweicloud_sdk_functiongraph_4 = require("@huaweicloud/huaweicloud-sdk-functiongraph");
var huaweicloud_sdk_functiongraph_5 = require("@huaweicloud/huaweicloud-sdk-functiongraph");
var huaweicloud_sdk_functiongraph_6 = require("@huaweicloud/huaweicloud-sdk-functiongraph");
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
     * @param codeUri {string} 函数代码路径
     * @returns res {Object} 函数信息
     * @returns functionBrn {string} 函数Urn
     */
    Function.prototype.create = function (codeUri) {
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
                        return [4 /*yield*/, client_1.default.fgClient.createFunction(new huaweicloud_sdk_functiongraph_1.CreateFunctionRequest().withBody(body))
                                .then(function (result) {
                                vm.succeed("Function ".concat(_this.functionInfo.func_name, " created."));
                                logger_1.default.debug("\u8FD4\u56DE\u7ED3\u679C\uFF0C".concat(JSON.stringify(response.data)));
                                response = result;
                            })
                                .catch(function (ex) {
                                vm.fail("Fail to create function.");
                                // TODO:使用更友好的错误返回
                                // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                                throw new Error(JSON.stringify(ex.data));
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.handleResponse(response.data)];
                }
            });
        });
    };
    /**
     *  更新代码
     * @param codeUri {string} 代码路径
     * @returns res {object} 函数信息
     * @returns functionUrn {string} functionBrn
     */
    Function.prototype.updateCode = function (client, codeUri) {
        return __awaiter(this, void 0, void 0, function () {
            var vm1, ZipFile, body, vm2, updateFunctionCodeReqeust, _a, _b, response;
            var _this = this;
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
                        body = new huaweicloud_sdk_functiongraph_3.UpdateFunctionCodeRequestBody()
                            .withCodeType(huaweicloud_sdk_functiongraph_3.UpdateFunctionCodeRequestBodyCodeTypeEnum.ZIP)
                            .withFuncCode(new huaweicloud_sdk_functiongraph_2.FuncCode().withFile(ZipFile));
                        vm2 = core.spinner("Function code updating...");
                        _b = (_a = new huaweicloud_sdk_functiongraph_3.UpdateFunctionCodeRequest())
                            .withFunctionUrn;
                        return [4 /*yield*/, this.getFunctionUrn(client)];
                    case 3:
                        updateFunctionCodeReqeust = _b.apply(_a, [_c.sent()])
                            .withBody(body);
                        return [4 /*yield*/, client_1.default.fgClient.updateFunctionCode(updateFunctionCodeReqeust)
                                .then(function (result) {
                                vm2.succeed("Function code of ".concat(_this.functionInfo.func_name, " updated successfully."));
                                logger_1.default.debug("updateFunctionCode\u8FD4\u56DE\u7ED3\u679C: ".concat(JSON.stringify(result)));
                                response = result;
                            })
                                .catch(function (ex) {
                                vm2.fail("Fail to update function code.");
                                logger_1.default.debug("\u9519\u8BEF\u4FE1\u606F\uFF1A".concat(JSON.stringify(ex)));
                                throw new Error(JSON.stringify(ex));
                            })];
                    case 4:
                        _c.sent();
                        return [2 /*return*/, this.handleResponse(response)];
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
            var vm, functionInfo, body, func_urn, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("调用updateFunctionConfig");
                        vm = core.spinner("Function configuration updating...");
                        functionInfo = this.functionInfo;
                        body = new huaweicloud_sdk_functiongraph_6.UpdateFunctionConfigRequestBody()
                            .withFuncName(functionInfo.func_name)
                            .withRuntime(huaweicloud_sdk_functiongraph_1.UpdateFunctionConfigRequestBodyRuntimeEnum['NODE_JS6_10'])
                            .withTimeout(functionInfo.timeout)
                            .withHandler(functionInfo.handler)
                            .withMemorySize(functionInfo.memory_size)
                            .withDescription(functionInfo.description)
                            .withXrole(functionInfo.xrole)
                            .withAppXrole(functionInfo.app_xrole)
                            .withInitializerHandler(functionInfo.initializer_handler)
                            .withInitializerTimeout(functionInfo.initializer_timeout);
                        return [4 /*yield*/, this.getFunctionUrn(client)];
                    case 1:
                        func_urn = _a.sent();
                        return [4 /*yield*/, client_1.default.fgClient.updateFunctionConfig(new huaweicloud_sdk_functiongraph_6.UpdateFunctionConfigRequest()
                                .withFunctionUrn(func_urn)
                                .withBody(body))
                                .then(function (result) {
                                response = result;
                                vm.succeed("Function ".concat(_this.getFunctionName(), " configuration updated."));
                                logger_1.default.debug(JSON.stringify(response));
                            })
                                .catch(function (ex) {
                                vm.fail("Function ".concat(_this.getFunctionName(), " configuration updating failed."));
                                // TODO:使用更友好的错误返回
                                // 错误码说明 https://support.huaweicloud.com/api-functiongraph/ErrorCode.html
                                logger_1.default.debug(JSON.stringify(response));
                                logger_1.default.debug("TODO: More friendly error response needed!");
                                throw new Error(JSON.stringify(response));
                            })
                            // 处理返回
                            // res返回response.body
                            // 返回funcitonBrn用于创建触发器
                        ];
                    case 2:
                        _a.sent();
                        // 处理返回
                        // res返回response.body
                        // 返回funcitonBrn用于创建触发器
                        return [2 /*return*/, this.handleResponse(response)];
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
    Function.prototype.list = function (table) {
        return __awaiter(this, void 0, void 0, function () {
            var functions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client_1.default.fgClient.listFunctions(new huaweicloud_sdk_functiongraph_5.ListFunctionsRequest().withPackageName(this.functionInfo.pkg))
                            .then(function (result) {
                            logger_1.default.info("ListFunctionsRequest result: ".concat(JSON.stringify(result)));
                            functions = result.functions;
                        })
                            .catch(function (ex) {
                            logger_1.default.debug("\u9519\u8BEF\u4FE1\u606F\uFF1A".concat(JSON.stringify(ex.data)));
                            throw new Error(JSON.stringify(ex.data));
                        })];
                    case 1:
                        _a.sent();
                        if (table) {
                            (0, utils_1.tableShow)(functions, [
                                "FunctionName",
                                "Description",
                                "UpdatedAt",
                                "LastModified",
                                "Region",
                            ]);
                        }
                        return [2 /*return*/, functions];
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
                        return [4 /*yield*/, client.deleteFunction(new huaweicloud_sdk_functiongraph_4.DeleteFunctionRequest(func_urn))
                                .then(function (result) {
                                logger_1.default.debug(JSON.stringify(result));
                                response = result;
                                vm.succeed("Function ".concat(func_urn, " deleted."));
                            })
                                .catch(function (ex) {
                                logger_1.default.debug("\u9519\u8BEF\u4FE1\u606F\uFF1A".concat(JSON.stringify(ex.data)));
                                throw new Error(JSON.stringify(ex.data));
                            })];
                    case 2:
                        _a.sent();
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
                        return [4 /*yield*/, this.list()];
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
                        return [4 /*yield*/, this.list()];
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
            var content;
            return __generator(this, function (_a) {
                content = [];
                // Display basic information.
                content.push({ desc: "Function name", example: "".concat(response.func_name) });
                content.push({ desc: "Function urn", example: "".concat(response.func_urn) });
                content.push({ desc: "Project name", example: "".concat(response.project_name) });
                content.push({ desc: "Runtime", example: "".concat(response.runtime) });
                content.push({ desc: "Handler", example: "".concat(response.handler) });
                content.push({ desc: "Code size", example: "".concat(response.code_size) });
                content.push({ desc: "Timeout", example: "".concat(response.timeout) });
                content.push({ desc: "Description", example: "".concat(response.description || "No description") });
                // Display dashboardUrl
                content.push({ desc: "More", example: CONFIGS.dashBoardUrl, });
                logger_1.default.debug("Function handle response".concat(JSON.stringify(content)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQThDO0FBQzlDLHFEQUErQjtBQUMvQixrQ0FBMEQ7QUFDMUQsK0RBQXlDO0FBRXpDLDRGQUErSDtBQUMvSCw0RkFBOEs7QUFDOUssNEZBQWdLO0FBQ2hLLDRGQUFtRjtBQUNuRiw0RkFBa0Y7QUFDbEYsNEZBQTBIO0FBRzFILElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVuQztJQUtFLGtCQUFtQixZQUFnQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLDhCQUFXLEdBQW5CLFVBQW9CLFlBQWdDO1FBQ2xELFlBQVksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3hFLFlBQVksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQy9ELFlBQVksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQzFFLFlBQVksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQy9ELFlBQVksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFNLENBQUMsQ0FBQztRQUNyRSxZQUFZLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FB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