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
var stdout_formatter_1 = __importDefault(require("./stdout-formatter"));
var profile_1 = require("../interface/profile");
var CONFIGS = require("../config");
var COMMAND = ["all", "function", "trigger", "help"];
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
                            boolean: ["help"],
                            alias: { help: "h" },
                        });
                        parsedData = (parsedArgs === null || parsedArgs === void 0 ? void 0 : parsedArgs.data) || {};
                        rawData = parsedData._ || [];
                        if (!inputs.credentials.AccessKeyID || !inputs.credentials.SecretAccessKey) {
                            throw new Error("Havn't set huaweicloud credentials. Run $s config add .");
                        }
                        return [4 /*yield*/, stdout_formatter_1.default.initStdout()];
                    case 1:
                        _a.sent();
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using("access alias", inputs.credentials.Alias));
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using("accessKeySecret", profile_1.mark(String(inputs.credentials.AccessKeyID))));
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using("accessKeyID", profile_1.mark(String(inputs.credentials.SecretAccessKey))));
                        subCommand = rawData[0] || "all";
                        logger_1.default.debug("deploy subCommand: " + subCommand);
                        if (!COMMAND.includes(subCommand)) {
                            core.help(HELP.DEPLOY);
                            return [2 /*return*/, { errorMessage: "Does not support " + subCommand + " command" }];
                        }
                        if (parsedData.help) {
                            rawData[0]
                                ? core.help(HELP[("deploy_" + subCommand).toLocaleUpperCase()])
                                : core.help(HELP.DEPLOY);
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
            var functionName, vm1, isCreated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        functionName = this.functionClient.getFunctionName();
                        vm1 = core.spinner("Checking if " + functionName + " exits...");
                        return [4 /*yield*/, this.functionClient.check(this.client)];
                    case 1:
                        isCreated = _a.sent();
                        if (!isCreated) return [3 /*break*/, 5];
                        vm1.succeed("Function " + functionName + " is already online.");
                        return [4 /*yield*/, this.functionClient.getUrnByFunctionName(this.client)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.functionClient.updateConfig(this.client)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.functionClient.updateCode(this.client, props.function.codeUri)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        vm1.succeed("Function " + functionName + " does not exitst.");
                        return [4 /*yield*/, this.functionClient.create(this.client, props.function.codeUri)];
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
            var functionInputs, triggerClientFactory, functionInfo, triggerInfo, functionUrn, functionUrn, _a;
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
                                initializer_timeout: props.function.initializerTimeout,
                            };
                            this.functionClient = new function_1.default(functionInputs);
                        }
                        if (props.trigger) {
                            triggerClientFactory = new trigger_1.TriggerClientFactory(props);
                            this.triggerClient = triggerClientFactory.create();
                        }
                        if (!(subCommand === "all")) return [3 /*break*/, 6];
                        functionInfo = void 0;
                        triggerInfo = void 0;
                        functionUrn = void 0;
                        if (!props.function) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.deployFunction(props)];
                    case 1:
                        functionInfo = _b.sent();
                        functionUrn = functionInfo.functionUrn;
                        _b.label = 2;
                    case 2:
                        if (!props.trigger) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.deployTrigger(props, functionUrn)];
                    case 3:
                        triggerInfo = _b.sent();
                        if (!triggerInfo) {
                            return [2 /*return*/, functionInfo.res];
                        }
                        return [2 /*return*/, functionInfo.res.concat(triggerInfo)];
                    case 4:
                        if (!functionInfo.res) {
                            return [2 /*return*/, "Deployed noting."];
                        }
                        return [2 /*return*/, functionInfo.res];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        if (!(subCommand === "function")) return [3 /*break*/, 8];
                        if (!props.function) {
                            throw new Error("Missing function configuration.");
                        }
                        return [4 /*yield*/, this.deployFunction(props)];
                    case 7: return [2 /*return*/, (_b.sent()).res];
                    case 8:
                        if (!(subCommand === "trigger")) return [3 /*break*/, 12];
                        if (!props.trigger) {
                            throw new Error("Missing trigger configuration.");
                        }
                        if (!props.function.functionName) {
                            throw new Error("Missing function name. Please enter your function name or provide the functionUrn in trigger configuration in s.yaml.");
                        }
                        _a = props.trigger.functionUrn;
                        if (_a) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.functionClient.getFunctionUrn(this.client)];
                    case 9:
                        _a = (_b.sent());
                        _b.label = 10;
                    case 10:
                        functionUrn = _a;
                        return [4 /*yield*/, this.deployTrigger(props, functionUrn)];
                    case 11: return [2 /*return*/, _b.sent()];
                    case 12:
                        if (subCommand === "help") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvZGVwbG95LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUErQjtBQUMvQiwwREFBOEM7QUFDOUMsK0RBQXlDO0FBQ3pDLG1EQUF1QztBQUN2Qyx3REFBa0M7QUFDbEMscUNBQTBEO0FBQzFELHdFQUFpRDtBQUNqRCxnREFBNEM7QUFJNUMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ25DLElBQU0sT0FBTyxHQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFakU7SUFzRkUsZ0JBQVksV0FBeUIsRUFBRSxTQUFpQixFQUFFLFFBQWdCO1FBQ3hFLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBbEZZLG1CQUFZLEdBQXpCLFVBQTBCLE1BQU07Ozs7Ozt3QkFDOUIsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQWlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRyxDQUFDLENBQUM7d0JBRXhELFVBQVUsR0FBMkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7NEJBQ25FLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQzs0QkFDakIsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTt5QkFDckIsQ0FBQyxDQUFDO3dCQUVHLFVBQVUsR0FBRyxDQUFBLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxJQUFJLEtBQUksRUFBRSxDQUFDO3dC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