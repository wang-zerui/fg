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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvcmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrQ0FBa0M7QUFDbEMsMERBQThDO0FBQzlDLCtEQUF5QztBQUN6QyxtREFBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLHVDQUF1QztBQUN2QyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbkMsd0VBQWlEO0FBQ2pELGdEQUE0QztBQUU1QyxxREFBK0I7QUFFL0Isd0RBQWtDO0FBQ2xDLHFDQUEwRDtBQUUxRCxJQUFNLE9BQU8sR0FBYSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRWpFLHVCQUF1QjtBQUN2QixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4QixJQUFJO0FBRUo7SUE0RkU7O1NBRUs7SUFDTCxnQkFBWSxXQUF5QixFQUFFLFNBQWlCLEVBQUUsUUFBZ0I7UUFDeEUsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQS9GRDs7OztTQUlLO0lBQ1EsbUJBQVksR0FBekIsVUFBMEIs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