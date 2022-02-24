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
// import Client from '../client';
var core = __importStar(require("@serverless-devs/core"));
var logger_1 = __importDefault(require("../../common/logger"));
var HELP = __importStar(require("../help/remove"));
// import Function from './function';
// import { Trigger } from './trigger';
var CONFIGS = require("../config");
var stdout_formatter_1 = __importDefault(require("./stdout-formatter"));
var profile_1 = require("../interface/profile");
var client_1 = __importDefault(require("../client"));
var function_1 = __importDefault(require("./function"));
var trigger_1 = require("./trigger");
var COMMAND = ["all", "function", "trigger", "help"];
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
    /**
     *
     * */
    function Remove(credentials, projectId, endpoint) {
        var vm = core.spinner("Setting client...");
        client_1.default.setFgClient(credentials, projectId, endpoint);
        vm.succeed("Settting client successfully.");
        this.client = client_1.default.fgClient;
    }
    /**
     * 处理输入
     * @param inputs {object} yaml输入参数
     * @returns 输入有关的关键信息: endpoint, projectId, credentials - sk/ak, subCommand - 子指令, props - yaml输入项, args - 输入参数, table - 是否展示中间表格
     * */
    Remove.handleInputs = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedArgs, parsedData, rawData, subCommand, props, endProps, endpoint, projectId, credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("inputs.props: ".concat(JSON.stringify(inputs.props)));
                        parsedArgs = core.commandParse(inputs, {
                            boolean: ["help"],
                            alias: { help: "h" },
                        });
                        parsedData = (parsedArgs === null || parsedArgs === void 0 ? void 0 : parsedArgs.data) || {};
                        rawData = parsedData._ || [];
                        subCommand = rawData[0] || "all";
                        logger_1.default.debug("deploy subCommand: ".concat(subCommand));
                        if (!COMMAND.includes(subCommand)) {
                            core.help(HELP.REMOVE);
                            return [2 /*return*/, { errorMessage: "Does not support ".concat(subCommand, " command") }];
                        }
                        // 帮助子命令
                        if (parsedData.help) {
                            rawData[0]
                                ? core.help(HELP["remove_".concat(subCommand).toLocaleUpperCase()])
                                : core.help(HELP.REMOVE);
                            return [2 /*return*/, { help: true, subCommand: subCommand }];
                        }
                        props = inputs.props || {};
                        endProps = props;
                        // TODO:使用validateProps验证
                        // 三个必要信息
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
                        return [4 /*yield*/, stdout_formatter_1.default.initStdout()];
                    case 1:
                        _a.sent();
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using("access alias", inputs.credentials.Alias));
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using("accessKeySecret", (0, profile_1.mark)(String(credentials.AccessKeyID))));
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.using("accessKeyID", (0, profile_1.mark)(String(credentials.SecretAccessKey))));
                        logger_1.default.debug("handler inputs props: ".concat(JSON.stringify(endProps)));
                        logger_1.default.info("Using region:".concat(props.region));
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
            var functionInputs, triggerClientFactory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (props.function) {
                            functionInputs = {
                                func_name: props.function.functionName,
                                handler: "index.handler",
                                memory_size: -1,
                                timeout: -1,
                                runtime: "Node.js8.10",
                                pkg: "default",
                                code_type: "",
                            };
                            this.functionClient = new function_1.default(functionInputs);
                        }
                        if (props.trigger) {
                            triggerClientFactory = new trigger_1.TriggerClientFactory(props);
                            this.triggerClient = triggerClientFactory.create();
                        }
                        if (!(subCommand === "all" || subCommand === "function")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.functionClient.remove(this.client)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(subCommand === "trigger")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.triggerClient.remove(this.client)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (subCommand === "help") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvcmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtDQUFrQztBQUNsQywwREFBOEM7QUFDOUMsK0RBQXlDO0FBQ3pDLG1EQUF1QztBQUN2QyxxQ0FBcUM7QUFDckMsdUNBQXVDO0FBQ3ZDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuQyx3RUFBaUQ7QUFDakQsZ0RBQTRDO0FBRTVDLHFEQUErQjtBQUUvQix3REFBa0M7QUFDbEMscUNBQTBEO0FBRTFELElBQU0sT0FBTyxHQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFakUsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0Isd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLElBQUk7QUFFSjtJQTRGRTs7U0FFSztJQUNMLGdCQUFZLFdBQXlCLEVBQUUsU0FBaUIsRUFBRSxRQUFnQjtRQUN4RSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDN0MsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxFQUFFLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBL0ZEOzs7O1NBSUs7SUFDUSxtQkFBWSxHQUF6QixVQUEwQixNQUFN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