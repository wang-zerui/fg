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
var HELP = __importStar(require("../help/remove"));
var function_1 = __importDefault(require("./function"));
var trigger_1 = __importDefault(require("./trigger"));
var CONFIGS = require('../config');
var stdout_formatter_1 = __importDefault(require("./stdout-formatter"));
var profile_1 = require("../interface/profile");
var COMMAND = ['all', 'function', 'trigger', 'help'];
// interface EndProps {
//   region: string;
//   assumeYes?: boolean;
//   onlyLocal?: boolean;
//   serviceName?: string;
//   functionName?: string;
//   qualifier?: string;
//   layerName?: string;
//   version?: string;
//   aliasName?: string;
// }
var remove = /** @class */ (function () {
    function remove(_a) {
        var credentials = _a.credentials;
        client_1.default.setCfcClient(credentials);
    }
    remove.handleInputs = function (inputs) {
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
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using('endpoint', inputs.props.endpoint));
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using('access alias', inputs.access));
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using('accessKeySecret', profile_1.mark(String(inputs.credentials.AccessKeyID))));
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using('accessKeyID', profile_1.mark(String(inputs.credentials.SecretAccessKey))));
                        subCommand = rawData[0] || 'all';
                        logger_1.default.debug("remove subCommand: " + subCommand);
                        if (!COMMAND.includes(subCommand)) {
                            core.help(HELP.REMOVE);
                            return [2 /*return*/, { errorMessage: "Does not support " + subCommand + " command" }];
                        }
                        if (parsedData.help) {
                            rawData[0] ? core.help(HELP[("remove_" + subCommand).toLocaleUpperCase()]) : core.help(HELP.REMOVE);
                            return [2 /*return*/, { help: true, subCommand: subCommand }];
                        }
                        props = inputs.props || {};
                        endProps = props;
                        credentials = inputs.credentials;
                        logger_1.default.debug("handler inputs props: " + JSON.stringify(endProps));
                        protocol = props.protocol || CONFIGS.defaultProtocol;
                        postEndpoint = props.endpoint || CONFIGS.defaultEndpoint;
                        endpoint = protocol + '://' + postEndpoint;
                        return [2 /*return*/, {
                                endpoint: endpoint,
                                credentials: credentials,
                                subCommand: subCommand,
                                props: endProps,
                                args: props.args,
                            }];
                }
            });
        });
    };
    remove.prototype.removeFunction = function (_a) {
        var endpoint = _a.endpoint, credentials = _a.credentials, functionName = _a.functionName;
        return __awaiter(this, void 0, void 0, function () {
            var functionClient, isCreated;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        functionClient = new function_1.default({ endpoint: endpoint, credentials: credentials });
                        return [4 /*yield*/, functionClient.check(functionName)];
                    case 1:
                        isCreated = _b.sent();
                        if (!isCreated) {
                            throw new Error("Function not found.");
                        }
                        return [2 /*return*/, functionClient.remove(functionName)];
                }
            });
        });
    };
    remove.prototype.removeTrigger = function (_a) {
        var credentials = _a.credentials, props = _a.props, functionBrn = _a.functionBrn;
        return __awaiter(this, void 0, void 0, function () {
            var triggerClient, target, source, data, relationId, IProps, checkRes, IProps;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        triggerClient = new trigger_1.default(credentials);
                        target = functionBrn;
                        source = props.trigger.source;
                        data = props.trigger.data;
                        if (!props.trigger.relationId) return [3 /*break*/, 2];
                        relationId = props.trigger.relationId;
                        IProps = {
                            target: target,
                            data: data,
                            source: source,
                            relationId: relationId,
                        };
                        return [4 /*yield*/, triggerClient.remove(IProps)];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2: return [4 /*yield*/, triggerClient.checkAndGetRelationId(functionBrn, props)];
                    case 3:
                        checkRes = _b.sent();
                        if (!checkRes.isNew) return [3 /*break*/, 4];
                        throw new Error('Trigger not found.');
                    case 4:
                        IProps = {
                            target: target,
                            data: data,
                            source: source,
                            relationId: checkRes.relationId,
                        };
                        return [4 /*yield*/, triggerClient.remove(IProps)];
                    case 5: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    remove.prototype.getBrn = function (props, credentials) {
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
    remove.prototype.remove = function (endpoint, props, subCommand, credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var functionName, vm, functionName, functionBrn, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(subCommand === 'all')) return [3 /*break*/, 2];
                        functionName = props.functionName;
                        return [4 /*yield*/, this.removeFunction({ endpoint: endpoint, credentials: credentials, functionName: functionName })];
                    case 1:
                        _b.sent();
                        vm = core.spinner("All triggers of function " + functionName + " deleting...");
                        vm.succeed("All triggers of function " + functionName + " deleted");
                        _b.label = 2;
                    case 2:
                        if (!(subCommand === 'function')) return [3 /*break*/, 4];
                        functionName = props.functionName;
                        return [4 /*yield*/, this.removeFunction({ endpoint: endpoint, credentials: credentials, functionName: functionName })];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        if (!(subCommand === 'trigger')) return [3 /*break*/, 8];
                        _a = props.trigger.target;
                        if (_a) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getBrn(props, credentials)];
                    case 5:
                        _a = (_b.sent());
                        _b.label = 6;
                    case 6:
                        functionBrn = _a;
                        return [4 /*yield*/, this.removeTrigger({ credentials: credentials, props: props, functionBrn: functionBrn })];
                    case 7: return [2 /*return*/, _b.sent()];
                    case 8:
                        if (subCommand === 'help') {
                            core.help(HELP.REMOVE);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return remove;
}());
exports.default = remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvcmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUErQjtBQUMvQiwwREFBOEM7QUFDOUMsK0RBQXlDO0FBQ3pDLG1EQUF1QztBQUN2Qyx3REFBa0M7QUFDbEMsc0RBQWdDO0FBQ2hDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuQyx3RUFBaUQ7QUFDakQsZ0RBQTRDO0FBRTVDLElBQU0sT0FBTyxHQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFakUsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0Isd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLElBQUk7QUFFSjtJQStDRSxnQkFBWSxFQUE4QztZQUE1QyxXQUFXLGlCQUFBO1FBQ3ZCLGdCQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFoRFksbUJBQVksR0FBekIsVUFBMEIsTUFBTTs7Ozs7O3dCQUM5QixnQkFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFHLENBQUMsQ0FBQzt3QkFFeEQsVUFBVSxHQUEyQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTs0QkFDbkUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDOzRCQUNqQixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO3lCQUNyQixDQUFDLENBQUM7d0JBRUcsVUFBVSxHQUFHLENBQUEsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLElBQUksS0FBSSxFQUFFLENBQUM7d0JBQ3BDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbkMscUJBQU0sMEJBQWUsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUM7d0JBQ25DLGdCQUFNLENBQUMsSUFBSSxDQUFDLDBCQUFlLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN0RixnQkFBTSxDQUFDLElBQUksQ0FBQywwQkFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNsRixnQkFBTSxDQUFDLElBQUksQ0FBQywwQkFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsY0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwSCxnQkFBTSxDQUFDLElBQUksQ0FBQywwQkFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGNBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFOUcsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7d0JBQ3ZDLGdCQUFNLENBQUMsS0FBSyxDQUFDLHdCQUFzQixVQUFZLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7NEJBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUN2QixzQkFBTyxFQUFFLFlBQVksRUFBRSxzQkFBb0IsVUFBVSxhQUFVLEVBQUUsRUFBQzt5QkFDbkU7d0JBRUQsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFOzRCQUNuQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsWUFBVSxVQUFZLENBQUEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ2xHLHNCQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLFlBQUEsRUFBRSxFQUFDO3lCQUNuQzt3QkFFSyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7d0JBRTNCLFFBQVEsR0FBRyxLQUFLLENBQUM7d0JBRWpCLFdBQVcsR0FBaUIsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDckQsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsMkJBQXlCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQzt3QkFDNUQsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQzt3QkFDckQsWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQzt3QkFDekQsUUFBUSxHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsWUFBWSxDQUFDO3dCQUNqRCxzQkFBTztnQ0FDTCxRQUFRLFVBQUE7Z0NBQ1IsV0FBVyxhQUFBO2dDQUNYLFVBQVUsWUFBQTtnQ0FDVixLQUFLLEVBQUUsUUFBUTtnQ0FDZixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7NkJBQ2pCLEVBQUM7Ozs7S0FDSDtJQU1LLCtCQUFjLEdBQXBCLFVBQXFCLEVBQXVDO1lBQXJDLFFBQVEsY0FBQSxFQUFFLFdBQVcsaUJBQUEsRUFBRSxZQUFZLGtCQUFBOzs7Ozs7d0JBQ2xELGNBQWMsR0FBRyxJQUFJLGtCQUFRLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDLENBQUM7d0JBQzdDLHFCQUFNLGNBQWMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUFwRCxTQUFTLEdBQUcsU0FBd0M7d0JBQzFELElBQUksQ0FBQyxTQUFTLEVBQUU7NEJBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO3lCQUN4Qzt3QkFDRCxzQkFBTyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFDOzs7O0tBQzVDO0lBRUssOEJBQWEsR0FBbkIsVUFBb0IsRUFBbUM7WUFBakMsV0FBVyxpQkFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLFdBQVcsaUJBQUE7Ozs7Ozt3QkFDL0MsYUFBYSxHQUFHLElBQUksaUJBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDdkMsTUFBTSxHQUFHLFdBQVcsQ0FBQzt3QkFDckIsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7NkJBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUF4Qix3QkFBd0I7d0JBQ3BCLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzt3QkFDdEMsTUFBTSxHQUFHOzRCQUNiLE1BQU0sUUFBQTs0QkFDTixJQUFJLE1BQUE7NEJBQ0osTUFBTSxRQUFBOzRCQUNOLFVBQVUsWUFBQTt5QkFDWCxDQUFDO3dCQUNLLHFCQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUE7NEJBQXpDLHNCQUFPLFNBQWtDLEVBQUM7NEJBRXpCLHFCQUFNLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUE7O3dCQUF4RSxRQUFRLEdBQUcsU0FBNkQ7NkJBQzFFLFFBQVEsQ0FBQyxLQUFLLEVBQWQsd0JBQWM7d0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7d0JBRWhDLE1BQU0sR0FBRzs0QkFDYixNQUFNLFFBQUE7NEJBQ04sSUFBSSxNQUFBOzRCQUNKLE1BQU0sUUFBQTs0QkFDTixVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVU7eUJBQ2hDLENBQUM7d0JBQ0sscUJBQU0sYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQTs0QkFBekMsc0JBQU8sU0FBa0MsRUFBQzs7OztLQUcvQztJQUVLLHVCQUFNLEdBQVosVUFBYSxLQUFLLEVBQUUsV0FBVzs7Ozs7O3dCQUN2QixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDO3dCQUNyRCxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDO3dCQUN6RCxRQUFRLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUM7d0JBQzNDLGNBQWMsR0FBRyxJQUFJLGtCQUFRLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDLENBQUM7d0JBQ3hELHFCQUFNLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUE7NEJBQXBFLHNCQUFPLFNBQTZELEVBQUM7Ozs7S0FDdEU7SUFFSyx1QkFBTSxHQUFaLFVBQWEsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVzs7Ozs7OzZCQUMvQyxDQUFBLFVBQVUsS0FBSyxLQUFLLENBQUEsRUFBcEIsd0JBQW9CO3dCQUdoQixZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQzt3QkFDeEMscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsRUFBQTs7d0JBQWxFLFNBQWtFLENBQUM7d0JBRTdELEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLDhCQUE0QixZQUFZLGlCQUFjLENBQUMsQ0FBQzt3QkFDaEYsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBNEIsWUFBWSxhQUFVLENBQUMsQ0FBQzs7OzZCQUU3RCxDQUFBLFVBQVUsS0FBSyxVQUFVLENBQUEsRUFBekIsd0JBQXlCO3dCQUNyQixZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQzt3QkFDakMscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsRUFBQTs0QkFBekUsc0JBQU8sU0FBa0UsRUFBQzs7NkJBRXhFLENBQUEsVUFBVSxLQUFLLFNBQVMsQ0FBQSxFQUF4Qix3QkFBd0I7d0JBQ04sS0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtnQ0FBcEIsd0JBQW9CO3dCQUFLLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFBOzt3QkFBdEMsS0FBQSxDQUFDLFNBQXFDLENBQUMsQ0FBQTs7O3dCQUE3RSxXQUFXLEtBQWtFO3dCQUM1RSxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsV0FBVyxhQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxFQUFBOzRCQUFwRSxzQkFBTyxTQUE2RCxFQUFDOzt3QkFFdkUsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFOzRCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDeEI7Ozs7O0tBQ0Y7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXhIRCxJQXdIQyJ9