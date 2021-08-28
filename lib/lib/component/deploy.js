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
var trigger_1 = __importDefault(require("./trigger"));
var CONFIGS = require('../config');
var stdout_formatter_1 = __importDefault(require("./stdout-formatter"));
var profile_1 = require("../interface/profile");
var COMMAND = ['all', 'function', 'trigger', 'help'];
var deploy = /** @class */ (function () {
    function deploy(_a) {
        var endpoint = _a.endpoint, credentials = _a.credentials;
        client_1.default.setCfcClient(credentials, endpoint);
    }
    deploy.handleInputs = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedArgs, parsedData, rawData, subCommand, props, endProps, credentials, protocol, postEndpoint, endpoint;
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
                        if (!endProps.endpoint) {
                            throw new Error('Not fount endpoint');
                        }
                        credentials = inputs.credentials;
                        logger_1.default.debug("handler inputs props: " + JSON.stringify(endProps));
                        protocol = props.protocol || CONFIGS.defaultProtocol;
                        postEndpoint = props.endpoint || CONFIGS.defaultEndpoint;
                        endpoint = protocol + '://' + postEndpoint;
                        logger_1.default.info('Using endpoing:' + endpoint);
                        return [2 /*return*/, {
                                endpoint: endpoint,
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
    deploy.prototype.deployFunction = function (_a) {
        var props = _a.props, credentials = _a.credentials;
        return __awaiter(this, void 0, void 0, function () {
            var protocol, postEndpoint, endpoint, functionClient, isCreated, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protocol = props.protocol || CONFIGS.defaultProtocol;
                        postEndpoint = props.endpoint || CONFIGS.defaultEndpoint;
                        endpoint = protocol + '://' + postEndpoint;
                        functionClient = new function_1.default({ endpoint: endpoint, credentials: credentials });
                        return [4 /*yield*/, functionClient.check(props.functionName)];
                    case 1:
                        isCreated = _b.sent();
                        if (!isCreated) return [3 /*break*/, 4];
                        return [4 /*yield*/, functionClient.updateConfig(props)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, functionClient.updateCode(props)];
                    case 3:
                        res = _b.sent();
                        return [2 /*return*/, res];
                    case 4: return [4 /*yield*/, functionClient.create(props)];
                    case 5: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    deploy.prototype.deployTrigger = function (functionBrn, props, credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var target, triggerClient, _a, isNew, relationId, data, source, IProps, IProps;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        target = functionBrn;
                        triggerClient = new trigger_1.default(credentials);
                        logger_1.default.info("Using FunctionBrn: " + target);
                        // 调用check&getRelationId
                        if (props.trigger.source === 'bos') {
                            if (!props.trigger.bucket) {
                                throw new Error('Missing trigger bucket name.');
                            }
                            props.trigger.source = "bos/" + props.trigger.bucket;
                            logger_1.default.debug(props.trigger.source);
                        }
                        return [4 /*yield*/, triggerClient.checkAndGetRelationId(target, props)];
                    case 1:
                        _a = _b.sent(), isNew = _a.isNew, relationId = _a.relationId;
                        data = props.trigger.data || {};
                        source = props.trigger.source;
                        if (!isNew) return [3 /*break*/, 3];
                        IProps = {
                            functionName: props.functionName,
                            target: target,
                            data: data,
                            source: source,
                        };
                        return [4 /*yield*/, triggerClient.create(IProps)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        IProps = {
                            functionName: props.functionName,
                            target: target,
                            data: data,
                            source: source,
                            relationId: relationId,
                        };
                        return [4 /*yield*/, triggerClient.update(IProps)];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    //未提供functionBrn时使用functionName获得functionBrn
    deploy.prototype.getBrn = function (props, credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var protocol, postEndpoint, endpoint, functionClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protocol = props.protocol || CONFIGS.defaultProtocol;
                        postEndpoint = props.endpoint || CONFIGS.defaultEndpoint;
                        endpoint = protocol + '://' + postEndpoint;
                        functionClient = new function_1.default({ endpoint: endpoint, credentials: credentials });
                        return [4 /*yield*/, functionClient.getBrnByFunctionName(props.functionName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    deploy.prototype.getInfo = function (props, credentials, relationId) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    deploy.prototype.deploy = function (props, subCommand, credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var functionInfo, functionBrn, triggerInfo, functionBrn, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(subCommand === 'all')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.deployFunction({ props: props, credentials: credentials })];
                    case 1:
                        functionInfo = _b.sent();
                        functionBrn = props.trigger.target || functionInfo.functionBrn;
                        if (!props.trigger) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.deployTrigger(functionBrn, props, credentials)];
                    case 2:
                        triggerInfo = _b.sent();
                        return [2 /*return*/, functionInfo.res.concat(triggerInfo)];
                    case 3: return [2 /*return*/, functionInfo.res];
                    case 4:
                        if (!(subCommand === 'function')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.deployFunction({ props: props, credentials: credentials })];
                    case 5: return [2 /*return*/, (_b.sent()).res];
                    case 6:
                        if (!(subCommand === 'trigger')) return [3 /*break*/, 10];
                        _a = props.trigger.target;
                        if (_a) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.getBrn(props, credentials)];
                    case 7:
                        _a = (_b.sent());
                        _b.label = 8;
                    case 8:
                        functionBrn = _a;
                        return [4 /*yield*/, this.deployTrigger(functionBrn, props, credentials)];
                    case 9: return [2 /*return*/, _b.sent()];
                    case 10:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvZGVwbG95LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUErQjtBQUMvQiwwREFBOEM7QUFDOUMsK0RBQXlDO0FBQ3pDLG1EQUF1QztBQUN2Qyx3REFBa0M7QUFDbEMsc0RBQWdDO0FBQ2hDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuQyx3RUFBaUQ7QUFDakQsZ0RBQTRDO0FBRTVDLElBQU0sT0FBTyxHQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFakU7SUFvREUsZ0JBQVksRUFBMEU7WUFBeEUsUUFBUSxjQUFBLEVBQUUsV0FBVyxpQkFBQTtRQUNqQyxnQkFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQXJEWSxtQkFBWSxHQUF6QixVQUEwQixNQUFNOzs7Ozs7d0JBQzlCLGdCQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFpQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUcsQ0FBQyxDQUFDO3dCQUV4RCxVQUFVLEdBQTJCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFOzRCQUNuRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7NEJBQ2pCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7eUJBQ3JCLENBQUMsQ0FBQzt3QkFFRyxVQUFVLEdBQUcsQ0FBQSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsSUFBSSxLQUFJLEVBQUUsQ0FBQzt3QkFDcEMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO3dC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