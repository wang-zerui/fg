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
var client_1 = __importDefault(require("../client"));
var core = __importStar(require("@serverless-devs/core"));
var logger_1 = __importDefault(require("../../common/logger"));
var HELP = __importStar(require("../help/deploy"));
var function_1 = __importDefault(require("./function"));
var trigger_1 = require("./trigger");
var CONFIGS = require('../config');
var stdout_formatter_1 = __importDefault(require("./stdout-formatter"));
var profile_1 = require("../interface/profile");
var COMMAND = ['all', 'function', 'trigger', 'help'];
var deploy = /** @class */ (function () {
    function deploy(credentials, projectId, endpoint) {
        client_1.default.setFgClient(credentials, projectId, endpoint);
        this.client = client_1.default.fgClient;
    }
    deploy.handleInputs = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedArgs, parsedData, rawData, subCommand, props, endProps, endpoint, projectId, credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("inputs.props: " + JSON.stringify(inputs.props));
                        parsedArgs = core.commandParse(inputs, {
                            boolean: ['help'],
                            alias: { help: 'h' },
                        });
                        parsedData = (parsedArgs === null || parsedArgs === void 0 ? void 0 : parsedArgs.data) || {};
                        rawData = parsedData._ || [];
                        return [4 /*yield*/, stdout_formatter_1.default.initStdout()];
                    case 1:
                        _a.sent();
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using('access alias', inputs.access));
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using('accessKeySecret', profile_1.mark(String(inputs.credentials.AccessKeyID))));
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using('accessKeyID', profile_1.mark(String(inputs.credentials.SecretAccessKey))));
                        subCommand = rawData[0] || 'all';
                        logger_1.default.debug("deploy subCommand: " + subCommand);
                        if (!COMMAND.includes(subCommand)) {
                            core.help(HELP.DEPLOY);
                            return [2 /*return*/, { errorMessage: "Does not support " + subCommand + " command" }];
                        }
                        if (parsedData.help) {
                            rawData[0] ? core.help(HELP[("deploy_" + subCommand).toLocaleUpperCase()]) : core.help(HELP.DEPLOY);
                            return [2 /*return*/, { help: true, subCommand: subCommand }];
                        }
                        props = inputs.props || {};
                        endProps = props;
                        if (!props.region) {
                            throw new Error("Region not found, please input one.");
                        }
                        endpoint = CONFIGS.endpoints[props.region];
                        if (!endpoint) {
                            throw new Error("Wrong region.");
                        }
                        projectId = props.projectId;
                        if (!projectId) {
                            throw new Error("ProjectId not found.");
                        }
                        credentials = inputs.credentials;
                        logger_1.default.debug("handler inputs props: " + JSON.stringify(endProps));
                        logger_1.default.info("Using region:" + props.region);
                        return [2 /*return*/, {
                                endpoint: endpoint,
                                projectId: projectId,
                                credentials: credentials,
                                subCommand: subCommand,
                                props: endProps,
                                args: props.args,
                                table: parsedData.table,
                            }];
                }
            });
        });
    };
    deploy.prototype.deployFunction = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var isCreated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.functionClient.check(this.client)];
                    case 1:
                        isCreated = _a.sent();
                        if (!isCreated) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.functionClient.getUrnByFunctionName(this.client)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.functionClient.updateConfig(this.client)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.functionClient.updateCode(this.client, props.function.codeUri)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [4 /*yield*/, this.functionClient.create(this.client, props.function.codeUri)];
                    case 6: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    deploy.prototype.deployTrigger = function (props, functionUrn) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.triggerClient.functionUrn = functionUrn;
                        return [4 /*yield*/, this.triggerClient.create(this.client)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    deploy.prototype.deploy = function (props, subCommand) {
        return __awaiter(this, void 0, void 0, function () {
            var functionInputs, functionInfo, triggerInfo, functionUrn, functionUrn, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (props.function) {
                            functionInputs = {
                                func_name: props.function.functionName,
                                handler: props.function.handler,
                                memory_size: props.function.memorySize,
                                timeout: props.function.timeout,
                                runtime: props.function.runtime,
                                pkg: props.function.package,
                                code_type: props.function.codeType,
                                code_filename: props.function.filename,
                                description: props.function.description,
                                enterprise_project_id: props.function.enterpriseProjectId,
                                xrole: props.function.xrole,
                                app_xrole: props.function.appXrole,
                                initializer_handler: props.function.initializerHandler,
                                initializer_timeout: props.function.initializerTimeout
                            };
                            this.functionClient = new function_1.default(functionInputs);
                        }
                        if (props.trigger) {
                            this.triggerClient = trigger_1.getTriggerClient(props);
                        }
                        if (!(subCommand === 'all')) return [3 /*break*/, 5];
                        functionInfo = void 0;
                        triggerInfo = void 0;
                        functionUrn = void 0;
                        if (!props.function) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.deployFunction(props)];
                    case 1:
                        functionInfo = _b.sent();
                        // 如果用户提供了functionUrn，则优先使用用户提供的functionUrn
                        functionUrn = props.trigger.functionUrn || functionInfo.functionUrn;
                        _b.label = 2;
                    case 2:
                        if (!props.trigger) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.deployTrigger(props, functionUrn)];
                    case 3:
                        triggerInfo = _b.sent();
                        return [2 /*return*/, functionInfo.res.concat(triggerInfo)];
                    case 4:
                        if (!functionInfo.res) {
                            return [2 /*return*/, "Deployed noting."];
                        }
                        return [2 /*return*/, functionInfo.res];
                    case 5:
                        if (!(subCommand === 'function')) return [3 /*break*/, 7];
                        if (!props.function) {
                            throw new Error("Missing function configuration.");
                        }
                        return [4 /*yield*/, this.deployFunction(props)];
                    case 6: return [2 /*return*/, (_b.sent()).res];
                    case 7:
                        if (!(subCommand === 'trigger')) return [3 /*break*/, 11];
                        if (!props.trigger) {
                            throw new Error("Missing trigger configuration.");
                        }
                        if (!props.function.functionName) {
                            throw new Error("Missing function name. Please enter your function name or provide the functionUrn in trigger configuration in s.yaml.");
                        }
                        _a = props.trigger.functionUrn;
                        if (_a) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.functionClient.getFunctionUrn(this.client)];
                    case 8:
                        _a = (_b.sent());
                        _b.label = 9;
                    case 9:
                        functionUrn = _a;
                        return [4 /*yield*/, this.deployTrigger(props, functionUrn)];
                    case 10: return [2 /*return*/, _b.sent()];
                    case 11:
                        if (subCommand === 'help') {
                            core.help(HELP.DEPLOY);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return deploy;
}());
exports.default = deploy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvZGVwbG95LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUErQjtBQUMvQiwwREFBOEM7QUFDOUMsK0RBQXlDO0FBQ3pDLG1EQUF1QztBQUN2Qyx3REFBa0M7QUFDbEMscUNBQXNEO0FBRXRELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuQyx3RUFBaUQ7QUFDakQsZ0RBQTRDO0FBSTVDLElBQU0sT0FBTyxHQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFakU7SUFpRUUsZ0JBQVksV0FBeUIsRUFBRSxTQUFpQixFQUFFLFFBQWdCO1FBQ3hFLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBaEVZLG1CQUFZLEdBQXpCLFVBQTBCLE1BQU07Ozs7Ozt3QkFDOUIsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQWlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRyxDQUFDLENBQUM7d0JBRXhELFVBQVUsR0FBMkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7NEJBQ25FLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQzs0QkFDakIsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTt5QkFDckIsQ0FBQyxDQUFDO3dCQUVHLFVBQVUsR0FBRyxDQUFBLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxJQUFJLEtBQUksRUFBRSxDQUFDO3dC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