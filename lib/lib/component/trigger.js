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
var lodash_get_1 = __importDefault(require("lodash.get"));
var SOURCE_TYPES = ['dueros', 'duedge', 'bos', 'cfc-http-trigger/v1/CFCAPI', 'cdn', 'cfc-crontab-trigger/v1/'];
var DATAKEYS = {
    duedeg: [],
    bos: ['Resource', 'Status', 'EventType', 'Name'],
    cdn: ['EventType', 'Status'],
    'cfc-http-trigger/v1/CFCAPI': ['Method'],
    'cfc-crontab-trigger/v1/': ['Name', 'ScheduleExpression'],
};
var cdnEventTypes = [
    'CachedObjectsBlocked',
    'CachedObjectsPushed',
    'CachedObjectsRefreshed',
    'CdnDomainCreated',
    'CdnDomainDeleted',
    'LogFileCreated',
    'CdnDomainStarted',
    'CdnDomainStopped',
];
var cdnStatus = ['enabled', 'disabled'];
// const TRIGGER_COMMAND: string[] = ['create', 'list', 'info', 'remove', 'updateCode', 'updateConfig', 'getConfig'];
// const TRIGGER_COMMAND_HELP_KEY = {
//   create: 'FunctionCreateInputsArgs',
//   list: 'FunctionListInputsArgs',
//   info: 'FunctionInfoInputsArgs',
//   remove: 'FunctionDeleteInputsArgs',
//   updateCode: 'UpdateCodeInputsArgs',
//   updateConfig: 'UpdateCofigInputsArgs',
//   getConfig: 'GetConfigInputsArgs',
// };
var Trigger = /** @class */ (function () {
    function Trigger(credentials) {
        client_1.default.setCfcClient(credentials);
    }
    Trigger.prototype.getBrnByFunctionName = function (functionName) {
        return __awaiter(this, void 0, void 0, function () {
            var vm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vm = core.spinner('Getting functionBrn...');
                        return [4 /*yield*/, client_1.default.cfcClient
                                .getFunction(functionName)
                                .then(function (response) {
                                vm.succeed('Get functionBrn successfully.');
                                var funcitonBrn = response.body.Configuration.FunctionBrn;
                                logger_1.default.info("FunctionBrn: " + funcitonBrn);
                                return funcitonBrn;
                            })
                                .catch(function (err) {
                                vm.fail('Fail to get functionBrn');
                                throw new Error(err.message.Message);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Trigger.prototype.handleData = function (source, data) {
        return __awaiter(this, void 0, void 0, function () {
            var keys, minKeys, missingKeys, _i, minKeys_1, key;
            return __generator(this, function (_a) {
                keys = Object.keys(data);
                if (source.slice(0, 3) === 'bos') {
                    source = source.slice(0, 3);
                }
                minKeys = lodash_get_1.default(DATAKEYS, source);
                missingKeys = [];
                for (_i = 0, minKeys_1 = minKeys; _i < minKeys_1.length; _i++) {
                    key = minKeys_1[_i];
                    if (!keys.includes(key)) {
                        missingKeys.push(key);
                    }
                }
                if (missingKeys.length > 0) {
                    throw new Error("Missing trigger data: " + missingKeys + ".");
                }
                if (source === 'cdn') {
                    if (!cdnEventTypes.includes(data.EventType)) {
                        throw new Error("CDN event type " + data.EventType + " is not valid.");
                    }
                    if (!cdnStatus.includes(data.Status)) {
                        throw new Error("CDN status error: " + data.Status + ".");
                    }
                }
                return [2 /*return*/, data];
            });
        });
    };
    Trigger.prototype.create = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var Target, Source, Data, body, vm, triggerInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Target = props.target;
                        Source = props.source;
                        return [4 /*yield*/, this.handleData(Source, props.data)];
                    case 1:
                        Data = _a.sent();
                        body = {
                            Target: Target,
                            Source: Source,
                            Data: Data,
                        };
                        logger_1.default.info("Trigger infomation:");
                        logger_1.default.info("Target:" + Target);
                        logger_1.default.info("Source:" + Source);
                        logger_1.default.info("Data:" + JSON.stringify(Data));
                        vm = core.spinner('Trigger creating...');
                        logger_1.default.debug("" + body);
                        return [4 /*yield*/, client_1.default.cfcClient
                                .createRelation(body)
                                .then(function (response) {
                                vm.succeed('Trigger created.');
                                logger_1.default.debug("Creating trigger response: " + JSON.stringify(response.body));
                                return response.body.Relation;
                            })
                                .catch(function (err) {
                                vm.fail("Trigger creating failed.");
                                logger_1.default.debug("Error: " + JSON.stringify(err));
                                throw new Error(err.message.Message);
                            })];
                    case 2:
                        triggerInfo = _a.sent();
                        return [4 /*yield*/, this.handleResponse(triggerInfo, props.functionName)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Trigger.prototype.update = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var Target, RelationId, Source, Data, vm, triggerInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("RelationId: " + props.relationId);
                        Target = props.target;
                        RelationId = props.relationId;
                        Source = props.source;
                        return [4 /*yield*/, this.handleData(Source, props.data)];
                    case 1:
                        Data = _a.sent();
                        if (!RelationId) {
                            throw new Error('No relationId(triggerId) provided');
                        }
                        logger_1.default.info("Trigger target:" + Target);
                        logger_1.default.info("Trigger source:" + Source);
                        logger_1.default.info("Trigger data:" + JSON.stringify(Data));
                        vm = core.spinner('Trigger updating...');
                        return [4 /*yield*/, client_1.default.cfcClient
                                .updateRelation({
                                Target: Target,
                                RelationId: RelationId,
                                Source: Source,
                                Data: Data,
                            })
                                .then(function (response) {
                                vm.succeed('Trigger updated.');
                                return response.body.Relation;
                            })
                                .catch(function (err) {
                                vm.fail('Trigger update failed');
                                logger_1.default.debug("Error: " + JSON.stringify(err));
                                throw new Error(err.message.Message);
                            })];
                    case 2:
                        triggerInfo = _a.sent();
                        return [4 /*yield*/, this.handleResponse(triggerInfo, props.functionName)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Trigger.prototype.list = function (functionBrn, table) {
        return __awaiter(this, void 0, void 0, function () {
            var triggers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client_1.default.cfcClient
                            .listRelations({ FunctionBrn: functionBrn })
                            .then(function (response) {
                            return response.body.Relation;
                        })
                            .catch(function (err) {
                            throw new Error(err.message.Message);
                        })];
                    case 1:
                        triggers = _a.sent();
                        if (table) {
                            utils_1.tableShow(triggers, ['Source', 'Target', 'RelationId', 'Data']);
                        }
                        return [2 /*return*/, triggers];
                }
            });
        });
    };
    Trigger.prototype.remove = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var Target, Source, RelationId, options, vm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Target = props.target;
                        Source = props.source;
                        RelationId = props.relationId;
                        if (!RelationId) {
                            throw new Error("No trigger's relationId provided");
                        }
                        else {
                            logger_1.default.info("Trigger relationId: " + RelationId);
                        }
                        options = {
                            Target: Target,
                            Source: Source,
                            RelationId: RelationId,
                        };
                        vm = core.spinner('Trigger deleting...');
                        return [4 /*yield*/, client_1.default.cfcClient
                                .deleteRelation(options)
                                .then(function (response) {
                                vm.succeed('Trigger deleted');
                                return response.body;
                            })
                                .catch(function (err) {
                                vm.fail('Trigger failed.');
                                logger_1.default.error(err.message.Message);
                                return err;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Trigger.prototype.handleResponse = function (triggerInfo, functionName) {
        return __awaiter(this, void 0, void 0, function () {
            var relationId, triggers, info, _i, triggers_1, trigger, contentTrigger, data, contentData, keys, _a, keys_1, key;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        relationId = triggerInfo.RelationId;
                        return [4 /*yield*/, this.list(triggerInfo.Target)];
                    case 1:
                        triggers = _b.sent();
                        logger_1.default.debug("Handling response of trigger: " + relationId);
                        for (_i = 0, triggers_1 = triggers; _i < triggers_1.length; _i++) {
                            trigger = triggers_1[_i];
                            if (trigger.RelationId === relationId) {
                                delete trigger.Sid;
                                delete trigger.Target;
                                delete trigger.Data.Brn;
                                info = trigger;
                            }
                        }
                        contentTrigger = [
                            {
                                desc: 'RelationId',
                                example: info.RelationId,
                            },
                            {
                                desc: 'Source',
                                example: info.Source,
                            },
                        ];
                        data = info.Data;
                        contentData = [];
                        if (triggerInfo.Source === 'cfc-http-trigger/v1/CFCAPI') {
                            contentTrigger.push({
                                desc: 'Url',
                                example: data['EndpointPrefix'] + data['ResourcePath'],
                            });
                            delete data['EndpointPrefix'];
                        }
                        keys = Object.keys(data);
                        for (_a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                            key = keys_1[_a];
                            contentData.push({
                                desc: key,
                                example: "" + data[key],
                            });
                        }
                        contentTrigger.push({
                            desc: 'More',
                            example: "https://console.bce.baidu.com/cfc/#/cfc/function/trigger~name=" + functionName,
                        });
                        return [2 /*return*/, [
                                {
                                    header: 'Trigger',
                                    content: contentTrigger,
                                },
                                {
                                    header: 'Trigger data',
                                    content: contentData,
                                },
                            ]];
                }
            });
        });
    };
    Trigger.prototype.checkAndGetRelationId = function (functionBrn, props) {
        return __awaiter(this, void 0, void 0, function () {
            var vm, sourceType, triggers, relationId, i, ResourcePath, i, name_1, i, eventType, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vm = core.spinner('Checking if the trigger exists...');
                        if (props.trigger.relationId) {
                            return [2 /*return*/, {
                                    isNew: false,
                                    relationId: props.trigger.relationId,
                                }];
                        }
                        sourceType = props.trigger.source;
                        return [4 /*yield*/, this.list(functionBrn)];
                    case 1:
                        triggers = _a.sent();
                        if (!SOURCE_TYPES.includes(sourceType) && !SOURCE_TYPES.includes(sourceType.slice(0, 3))) {
                            vm.fail('Trigger deploy failed');
                            throw new Error('不支持的触发器类型');
                        }
                        logger_1.default.debug("SourceType:" + sourceType);
                        relationId = '-1';
                        if (sourceType === 'dueros') {
                            for (i = 0; i < triggers.length; i++) {
                                if (triggers[i].Source === 'dueros') {
                                    relationId = triggers[i].RelationId;
                                    break;
                                }
                            }
                        }
                        else if (sourceType === 'duedge') {
                            vm.fail('Trigger deploy failed');
                            throw new Error("\u6682\u4E0D\u652F\u6301\u6784\u5EFA\u8BE5\u89E6\u53D1\u5668\uFF0C\u8BF7\u8F6C\u5230https://console.bce.baidu.com/cfc/#/cfc/function/trigger~name=" + props.functionName + " \u8FDB\u884C\u521B\u5EFA");
                        }
                        else if (sourceType === 'cfc-http-trigger/v1/CFCAPI') {
                            ResourcePath = props.trigger.data.ResourcePath;
                            for (i = 0; i < triggers.length; i++) {
                                if (triggers[i].Source == 'cfc-http-trigger/v1/CFCAPI' && triggers[i].Data.ResourcePath === ResourcePath) {
                                    logger_1.default.debug(JSON.stringify(triggers[i]));
                                    relationId = triggers[i].RelationId;
                                }
                            }
                        }
                        else if (sourceType === 'cfc-crontab-trigger/v1/') {
                            throw new Error("\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u521B\u5EFA\u5B9A\u65F6\u89E6\u53D1\u5668\uFF0Chttps://console.bce.baidu.com/cfc/#/cfc/functions");
                            // const name = props.trigger.data.Name;
                            // for (let i = 0; i < triggers.length; i++) {
                            //   if (triggers[i].Source == 'cfc-crontab-trigger/v1/' && triggers[i].Data.Name === name) {
                            //     logger.debug(JSON.stringify(triggers[i]));
                            //     relationId = triggers[i].RelationId;
                            //   }
                            // }
                        }
                        else if (sourceType.slice(0, 3) === 'bos') {
                            name_1 = props.trigger.data.Name;
                            for (i = 0; i < triggers.length; i++) {
                                if (triggers[i].Source == sourceType && triggers[i].Data.Name == name_1) {
                                    logger_1.default.debug(JSON.stringify(triggers[i]));
                                    relationId = triggers[i].RelationId;
                                }
                            }
                        }
                        else if (sourceType === 'cdn') {
                            eventType = props.trigger.data.EventType;
                            for (i = 0; i < triggers.length; i++) {
                                if (triggers[i].Source == 'cdn' && triggers[i].Data.EventType === eventType) {
                                    logger_1.default.debug(JSON.stringify(triggers[i]));
                                    relationId = triggers[i].RelationId;
                                }
                            }
                        }
                        if (relationId === '-1') {
                            vm.succeed("The trigger is a new one of " + props.functionName + ".");
                            return [2 /*return*/, {
                                    isNew: true,
                                }];
                        }
                        else {
                            vm.succeed("The trigger is already online under " + props.functionName);
                            return [2 /*return*/, {
                                    isNew: false,
                                    relationId: relationId,
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Trigger;
}());
exports.default = Trigger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L3RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQThDO0FBRTlDLHFEQUErQjtBQUMvQixrQ0FBcUM7QUFDckMsK0RBQXlDO0FBQ3pDLDBEQUE2QjtBQVU3QixJQUFNLFlBQVksR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0FBQ2pILElBQU0sUUFBUSxHQUFHO0lBQ2YsTUFBTSxFQUFFLEVBQUU7SUFDVixHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUM7SUFDaEQsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztJQUM1Qiw0QkFBNEIsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUN4Qyx5QkFBeUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQztDQUMxRCxDQUFDO0FBQ0YsSUFBTSxhQUFhLEdBQUc7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNuQixDQUFDO0FBQ0YsSUFBTSxTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDMUMscUhBQXFIO0FBQ3JILHFDQUFxQztBQUNyQyx3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLDJDQUEyQztBQUMzQyxzQ0FBc0M7QUFDdEMsS0FBSztBQUVMO0lBQ0UsaUJB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