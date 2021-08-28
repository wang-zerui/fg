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
var lodash_get_1 = __importDefault(require("lodash.get"));
var utils_1 = require("../utils");
var logger_1 = __importDefault(require("../../common/logger"));
var CONFIGS = require('../config');
// const FUNCTION_COMMAND: string[] = ['create', 'list', 'info', 'remove', 'updateCode', 'updateConfig', 'getConfig'];
// const FUNCTION_COMMAND_HELP_KEY = {
//   create: 'FunctionCreateInputsArgs',
//   list: 'FunctionListInputsArgs',
//   info: 'FunctionInfoInputsArgs',
//   remove: 'FunctionDeleteInputsArgs',
//   updateCode: 'UpdateCodeInputsArgs',
//   updateConfig: 'UpdateCofigInputsArgs',
//   getConfig: 'GetConfigInputsArgs',
// };
var Function = /** @class */ (function () {
    function Function(_a) {
        var endpoint = _a.endpoint, credentials = _a.credentials;
        client_1.default.setCfcClient(credentials, endpoint);
    }
    /**
     * 创建函数
     * @param props
     * @returns res
     * @returns functionBrn
     */
    Function.prototype.create = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var ZipFile, tempInputs, keys, _i, keys_1, i, value, body, vm, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.startZip(props.code.codeUri || './')];
                    case 1:
                        ZipFile = _a.sent();
                        tempInputs = {
                            Code: {
                                ZipFile: ZipFile,
                            },
                            Description: props.description || CONFIGS.description,
                            FunctionName: props.functionName || CONFIGS.functionName,
                            Runtime: props.runtime,
                            MemorySize: props.memorySize || CONFIGS.memorySize,
                            Handler: props.handler || CONFIGS.handler(props.runtime),
                            Timeout: props.timeout || CONFIGS.timeout,
                        };
                        if (props.code.publish) {
                            tempInputs.Code['Publish'] = props.code.publish;
                        }
                        if (props.code.dryRun) {
                            tempInputs.Code['DryRun'] = props.code.dryRun;
                        }
                        keys = ['Environment', 'LogType', 'DeadLetterTopic', 'LogBosDir'];
                        for (_i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                            i = keys_1[_i];
                            value = lodash_get_1.default(props, i.toLowerCase());
                            if (value) {
                                tempInputs[i] = value;
                            }
                        }
                        body = tempInputs;
                        vm = core.spinner("Function " + props.functionName + " creating.");
                        return [4 /*yield*/, utils_1.deleteZip(props.code.codeUri + '/hello.zip')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client_1.default.cfcClient
                                .createFunction(body)
                                .then(function (response) {
                                vm.succeed("Function " + props.functionName + " created.");
                                return response.body;
                            })
                                .catch(function (err) {
                                vm.fail("Function " + props.functionName + " creating failed.");
                                throw new Error(err.message.Message);
                            })];
                    case 3:
                        response = _a.sent();
                        // 处理返回
                        // res返回response.body
                        // 返回funcitonBrn用于创建触发器
                        return [2 /*return*/, this.handleResponse(response)];
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
    Function.prototype.updateCode = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var functionName, codeUri, vm1, ZipFile, body, vm2, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        functionName = props.functionName;
                        if (!functionName) {
                            throw new Error('FunctionName not found.');
                        }
                        codeUri = props.code.codeUri || CONFIGS.codeUri;
                        vm1 = core.spinner('File compressing...');
                        return [4 /*yield*/, utils_1.startZip(codeUri)];
                    case 1:
                        ZipFile = _a.sent();
                        return [4 /*yield*/, utils_1.deleteZip(props.code.codeUri + '/hello.zip')];
                    case 2:
                        _a.sent();
                        vm1.succeed('File compression completed');
                        body = {
                            ZipFile: ZipFile,
                        };
                        if (props.code.publish) {
                            body['Publish'] = props.code.publish;
                        }
                        if (props.code.dryRun) {
                            body['DryRun'] = props.code.dryRun;
                        }
                        vm2 = core.spinner('Function code updating...');
                        return [4 /*yield*/, client_1.default.cfcClient
                                .updateFunctionCode(functionName, body)
                                .then(function (response) {
                                vm2.succeed("Function " + functionName + " code updated");
                                return response.body;
                            })
                                .catch(function (err) {
                                vm2.fail('Function deploy failed');
                                throw new Error(err.message.Message);
                            })];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse(response)];
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
    Function.prototype.updateConfig = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var vm, FunctionName, keys, body, _i, keys_2, i, value, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vm = core.spinner('Function configuration updating...');
                        FunctionName = props.functionName;
                        if (!FunctionName) {
                            throw new Error('FunctionName not found.');
                        }
                        keys = ['Description', 'Timeout', 'Handler', 'Runtime', 'Environment'];
                        body = {};
                        for (_i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                            i = keys_2[_i];
                            value = lodash_get_1.default(props, i.toLowerCase());
                            if (value) {
                                body[i] = value;
                            }
                        }
                        return [4 /*yield*/, client_1.default.cfcClient
                                .updateFunctionConfiguration(FunctionName, body)
                                .then(function (response) {
                                vm.succeed('Function configuration update completed');
                                return response;
                            })
                                .catch(function (err) {
                                vm.fail('Function configuration update failed');
                                throw new Error(err.message.Message);
                            })];
                    case 1:
                        response = _a.sent();
                        // 处理返回
                        // res返回response.body
                        // 返回funcitonBrn用于创建触发器
                        return [2 /*return*/, this.handleResponse(response)];
                }
            });
        });
    };
    Function.prototype.info = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var FunctionName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        FunctionName = props.functionName;
                        if (!FunctionName) {
                            throw new Error('Not found functionName');
                        }
                        return [4 /*yield*/, client_1.default.cfcClient
                                .getFunction(FunctionName)
                                .then(function (response) {
                                return response.body;
                            })
                                .catch(function (err) {
                                logger_1.default.error('获取函数信息失败');
                                logger_1.default.error(err.body);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Function.prototype.list = function (table) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client_1.default.cfcClient
                            .listFunctions()
                            .then(function (response) {
                            return response.body.Functions;
                        })
                            .catch(function (err) {
                            logger_1.default.info(err);
                            logger_1.default.debug("" + err);
                            throw new Error(err.message.Message);
                        })];
                    case 1:
                        data = _a.sent();
                        if (table) {
                            utils_1.tableShow(data, ['FunctionName', 'Description', 'UpdatedAt', 'LastModified', 'Region']);
                            return [2 /*return*/, data];
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Function.prototype.remove = function (FunctionName) {
        return __awaiter(this, void 0, void 0, function () {
            var vm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!FunctionName) {
                            throw new Error('Not found functionName');
                        }
                        vm = core.spinner('Function ' + FunctionName + ' deleting...');
                        return [4 /*yield*/, client_1.default.cfcClient
                                .deleteFunction(FunctionName)
                                .then(function (response) {
                                vm.succeed("Function " + FunctionName + " deleted");
                                return response;
                            })
                                .catch(function (err) {
                                vm.fail('Function delete failed.');
                                logger_1.default.error('Function remove failed. ');
                                logger_1.default.debug(JSON.stringify(err));
                                throw new Error(err.message.Message);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Function.prototype.getConfig = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var FunctionName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        FunctionName = props.functionName;
                        if (!FunctionName) {
                            throw new Error('Not found functionName');
                        }
                        return [4 /*yield*/, client_1.default.cfcClient
                                .getFunctionConfiguration(FunctionName)
                                .then(function (response) {
                                logger_1.default.info(response.body);
                                return response.body;
                            })
                                .catch(function (err) {
                                logger_1.default.error('函数配置获取错误');
                                logger_1.default.error(err.message.Message);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
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
    Function.prototype.check = function (functionName) {
        return __awaiter(this, void 0, void 0, function () {
            var vm, functions, isCreated, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vm = core.spinner('Checking if ' + functionName + ' exits...');
                        return [4 /*yield*/, this.list()];
                    case 1:
                        functions = _a.sent();
                        isCreated = false;
                        for (i = 0; i < functions.length; i++) {
                            if (functions[i].FunctionName === functionName) {
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
    Function.prototype.getBrnByFunctionName = function (functionName) {
        return __awaiter(this, void 0, void 0, function () {
            var FunctionName, functionBrn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        FunctionName = functionName;
                        logger_1.default.debug('Get functionBrn by function name:' + FunctionName);
                        return [4 /*yield*/, client_1.default.cfcClient
                                .getFunction(FunctionName)
                                .then(function (response) {
                                return response.body.Configuration.FunctionBrn;
                            })
                                .catch(function (err) {
                                logger_1.default.error('Getting functionBrn failed!');
                                throw new Error(err.message.Message);
                            })];
                    case 1:
                        functionBrn = _a.sent();
                        return [2 /*return*/, functionBrn];
                }
            });
        });
    };
    Function.prototype.handleResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var content, descs, _i, descs_1, i;
            return __generator(this, function (_a) {
                logger_1.default.debug("" + response);
                content = [];
                descs = ['Description', 'Region', 'Timeout', 'Handler', 'Version', 'CodeSize', 'FunctionBrn', 'MemorySize'];
                for (_i = 0, descs_1 = descs; _i < descs_1.length; _i++) {
                    i = descs_1[_i];
                    content.push({
                        desc: i,
                        example: "" + response[i],
                    });
                }
                content.push({
                    desc: 'More',
                    example: 'https://console.bce.baidu.com/cfc/#/cfc/function/info~name=TestTriggers',
                });
                logger_1.default.debug("Calling Function response" + JSON.stringify(content));
                return [2 /*return*/, {
                        res: [
                            {
                                header: 'Function',
                                content: content,
                            },
                        ],
                        functionBrn: response.FunctionBrn,
                    }];
            });
        });
    };
    return Function;
}());
exports.default = Function;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBQ1osMERBQThDO0FBRTlDLHFEQUErQjtBQUMvQiwwREFBNkI7QUFDN0Isa0NBQTBEO0FBQzFELCtEQUF5QztBQUN6QyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFTbkMsc0hBQXNIO0FBQ3RILHNDQUFzQztBQUN0Qyx3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLDJDQUEyQztBQUMzQyxzQ0FBc0M7QUFDdEMsS0FBSztBQUVMO0lBQ0Usa0JBQVksRUFBMEU7WUFBeEUsUUFBUSxjQUFBLEVBQUUsV0FBVyxpQkFBQTtRQUNqQyxnQkFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0cseUJBQU0sR0FBWixVQUFhLEtBQUs7Ozs7OzRCQUVBLHFCQUFNLGdCQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEVBQUE7O3dCQUFwRCxPQUFPLEdBQUcsU0FBMEM7d0JBRXRELFVBQVUsR0FBRzs0QkFDZixJQUFJLEVBQUU7Z0NBQ0osT0FBTyxTQUFBOzZCQUNSOzRCQUNELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxXQUFXOzRCQUNyRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWTs0QkFDeEQsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPOzRCQUN0QixVQUFVLEVBQUUsS0FBSyxD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