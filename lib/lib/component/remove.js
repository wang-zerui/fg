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
// import Client from '../client';
var core = __importStar(require("@serverless-devs/core"));
var logger_1 = __importDefault(require("../../common/logger"));
var HELP = __importStar(require("../help/remove"));
// import Function from './function';
// import { Trigger } from './trigger';
var CONFIGS = require('../config');
var stdout_formatter_1 = __importDefault(require("./stdout-formatter"));
var profile_1 = require("../interface/profile");
var client_1 = __importDefault(require("../client"));
var trigger_1 = require("./trigger");
var function_1 = __importDefault(require("./function"));
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
var Remove = /** @class */ (function () {
    function Remove(credentials, projectId, endpoint) {
        client_1.default.setFgClient(credentials, projectId, endpoint);
        this.client = client_1.default.fgClient;
    }
    Remove.handleInputs = function (inputs) {
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
                            core.help(HELP.REMOVE);
                            return [2 /*return*/, { errorMessage: "Does not support " + subCommand + " command" }];
                        }
                        if (parsedData.help) {
                            rawData[0] ? core.help(HELP[("remove_" + subCommand).toLocaleUpperCase()]) : core.help(HELP.REMOVE);
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
    Remove.prototype.remove = function (props, subCommand) {
        return __awaiter(this, void 0, void 0, function () {
            var functionInputs, functionUrn, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (props.function) {
                            functionInputs = {
                                func_name: props.function.functionName,
                                handler: "index.handler",
                                memory_size: -1,
                                timeout: -1,
                                runtime: "Node.js8.10",
                                pkg: "default",
                                code_type: ""
                            };
                            this.functionClient = new function_1.default(functionInputs);
                        }
                        if (props.trigger) {
                            this.triggerClient = trigger_1.getTriggerClient(props);
                        }
                        if (!(subCommand === 'all' || subCommand === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.functionClient.remove(this.client)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(subCommand === 'trigger')) return [3 /*break*/, 7];
                        if (!props.function.functionName) return [3 /*break*/, 5];
                        _a = props.trigger.functionUrn;
                        if (_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.functionClient.getFunctionUrn(this.client)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        functionUrn = _a;
                        this.triggerClient.functionUrn = functionUrn;
                        _b.label = 5;
                    case 5: return [4 /*yield*/, this.triggerClient.remove(this.client)];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7:
                        if (subCommand === 'help') {
                            core.help(HELP.REMOVE);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Remove;
}());
exports.default = Remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvcmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtDQUFrQztBQUNsQywwREFBOEM7QUFDOUMsK0RBQXlDO0FBQ3pDLG1EQUF1QztBQUN2QyxxQ0FBcUM7QUFDckMsdUNBQXVDO0FBQ3ZDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuQyx3RUFBaUQ7QUFDakQsZ0RBQTRDO0FBRTVDLHFEQUErQjtBQUUvQixxQ0FBc0Q7QUFDdEQsd0RBQWtDO0FBRWxDLElBQU0sT0FBTyxHQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFakUsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0Isd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLElBQUk7QUFFSjtJQWlFRSxnQkFBWSxXQUF5QixFQUFFLFNBQWlCLEVBQUUsUUFBZ0I7UUFDeEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFoRVksbUJBQVksR0FBekIsVUFBMEIsTUFBTTs7Ozs7O3dCQUM5QixnQkFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFHLENBQUMsQ0FBQzt3QkFFeEQsVUFBVSxHQUEyQixJQUFJLENBQUMsWUFBWSxD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