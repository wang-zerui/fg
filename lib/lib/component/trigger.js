"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.TriggerClientFactory = exports.TriggerKAFKA = exports.TriggerDDS = exports.TriggerCTS = exports.TriggerOBS = exports.TriggerLTS = exports.TriggerTIMER = exports.TriggerAPIG = exports.TriggerDIS = exports.TriggerSMN = exports.Trigger = exports.STATUSES = exports.TRIGGER_TYPE_CODES = void 0;
var CreateTriggerRequest_1 = require("./functionGraph/model/CreateTriggerRequest");
var CreateTriggerRequestBody_1 = require("./functionGraph/model/CreateTriggerRequestBody");
var ListTriggerRequest_1 = require("./functionGraph/model/ListTriggerRequest");
var UpdateTriggerRequest_1 = require("./functionGraph/model/UpdateTriggerRequest");
var UpdateTriggerRequestBody_1 = require("./functionGraph/model/UpdateTriggerRequestBody");
var logger_1 = __importDefault(require("../../common/logger"));
var DeleteTriggerRequest_1 = require("./functionGraph/model/DeleteTriggerRequest");
var core = __importStar(require("@serverless-devs/core"));
var _a = require("@serverless-devs/core"), setState = _a.setState, getState = _a.getState;
exports.TRIGGER_TYPE_CODES = [
    "SMN",
    "APIG",
    "OBS",
    "TIMER",
    "DMS",
    "DIS",
    "LTS",
    "DDS",
    "CTS",
    "kafka",
];
exports.STATUSES = ["ACTIVE", "DISABLED"];
// interface DMSEventData {
//     queueId: string,
//     consumerGroupId: string
// }
// export class TriggerDMS extends Trigger{
//     public eventData: DMSEventData;
//     public constructor(input: TriggerInputProps, eventData: DMSEventData) {
//         super(input);
//         this['eventData'] = eventData;
//     }
//     public getEventData():object {
//         return this.eventData;
//     }
// }
var Trigger = /** @class */ (function () {
    function Trigger(input) {
        var triggerId = input.triggerId, triggerTypeCode = input.triggerTypeCode, eventTypeCode = input.eventTypeCode, status = input.status, functionUrn = input.functionUrn;
        if (exports.TRIGGER_TYPE_CODES.indexOf(triggerTypeCode) < 0) {
            throw new Error("Invalid triggerTypeCode.");
        }
        if (exports.STATUSES.indexOf(status) < 0) {
            throw new Error("Invalid status, only accept \"DISABLED\" and \"ACTIVE\".");
        }
        this["triggerId"] = triggerId;
        this["triggerTypeCode"] = triggerTypeCode;
        this["status"] = status;
        this["eventTypeCode"] = eventTypeCode;
        this["functionUrn"] = functionUrn;
    }
    /**
     * 创建触发器
     * @param client {FunctionGraphClient}
     * @returns res {Object} 函数信息
     * @returns functionUrn {string} 函数Urn
     */
    Trigger.prototype.create = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var body, vm, response, vm1, vm1, triggerId, triggerTypeCode, functionUrn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = new CreateTriggerRequestBody_1.CreateTriggerRequestBody()
                            .withTriggerTypeCode(this.triggerTypeCode)
                            .withTriggerStatus(this.status)
                            .withEventTypeCode(this.eventTypeCode)
                            .withEventData(this.getEventData());
                        logger_1.default.debug(JSON.stringify(Object.assign({}, body)));
                        vm = core.spinner("Checking if trigger exists...");
                        return [4 /*yield*/, client.createTrigger(new CreateTriggerRequest_1.CreateTriggerRequest()
                                .withFunctionUrn(this.functionUrn)
                                .withBody(body))];
                    case 1:
                        response = _a.sent();
                        logger_1.default.debug(JSON.stringify(response.data));
                        if (!(response.status !== 200)) return [3 /*break*/, 5];
                        if (!(response.data.error_code === "FSS.1148")) return [3 /*break*/, 3];
                        vm.succeed("Trigger is already online.");
                        return [4 /*yield*/, this.update(client)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        vm.succeed("New trigger.");
                        vm1 = core.spinner("Creating trigger...");
                        vm1.fail("Creating trigger failed.");
                        logger_1.default.error(response.data.error_msg);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        vm.succeed("New trigger.");
                        vm1 = core.spinner("Creating trigger...");
                        triggerId = response.data.trigger_id;
                        triggerTypeCode = response.data.trigger_type_code;
                        functionUrn = this.functionUrn;
                        logger_1.default.debug("triggerId:".concat(triggerId));
                        return [4 /*yield*/, this.setLocalTriggerInfo({ triggerId: triggerId, triggerTypeCode: triggerTypeCode, functionUrn: functionUrn })];
                    case 6:
                        _a.sent();
                        vm1.succeed("Creating trigger successfully.");
                        return [2 /*return*/, this.handleResponse(response.data)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 获取触发器列表
     * @param client
     * @returns triggers {Array<any>} 该函数下的所有函数信息
     */
    Trigger.prototype.list = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.listTrigger(new ListTriggerRequest_1.ListTriggerRequest().withFunctionUrn(this.functionUrn))];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) {
                            throw new Error(JSON.stringify(response.data));
                        }
                        else {
                            return [2 /*return*/, response.data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 更新触发器，只能更新status
     * @param Client
     * @param functionUrn
     * @returns
     */
    Trigger.prototype.update = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var body, triggerId, _a, vm, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = new UpdateTriggerRequestBody_1.UpdateTriggerRequestBody().withTriggerStatus(this.status);
                        logger_1.default.warning("Updating trigger, only support updating status.");
                        return [4 /*yield*/, this.getTriggerId(client)];
                    case 1:
                        _a = (_b.sent());
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getLocalTriggerInfo()];
                    case 2:
                        _a = (_b.sent()).triggerId;
                        _b.label = 3;
                    case 3:
                        triggerId = _a;
                        if (!triggerId) {
                            logger_1.default.debug("没找到是哪个trigger");
                            return [2 /*return*/];
                        }
                        vm = core.spinner("Updating trigger...");
                        return [4 /*yield*/, client.updateTrigger(new UpdateTriggerRequest_1.UpdateTriggerRequest()
                                .withTriggerId(triggerId)
                                .withFunctionUrn(this.functionUrn)
                                .withTriggerTypeCode(this.triggerTypeCode)
                                .withBody(body))];
                    case 4:
                        response = _b.sent();
                        if (response.status !== 200) {
                            //TODO:需要更友好的错误输出
                            // throw new Error(JSON.stringify(response.data));
                            logger_1.default.debug(JSON.stringify(response.data));
                            vm.fail("Failed to update trigger.");
                            logger_1.default.error(response.data.error_msg);
                            return [2 /*return*/];
                        }
                        else {
                            vm.succeed("Update trigger successfully.");
                            return [2 /*return*/, this.handleResponse(response.data)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 删除触发器
     * @param client
     */
    Trigger.prototype.remove = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var triggerId, triggerTypeCode, functionUrn, vm, localTriggerInfo, deleteTriggerRequest, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        functionUrn = this.functionUrn;
                        vm = core.spinner("Deleting trigger...");
                        if (!!this.triggerId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getLocalTriggerInfo()];
                    case 1:
                        localTriggerInfo = _a.sent();
                        triggerId = localTriggerInfo.triggerId;
                        triggerTypeCode = localTriggerInfo.triggerTypeCode;
                        functionUrn = localTriggerInfo.functionUrn;
                        logger_1.default.debug(localTriggerInfo);
                        // 如果没有本地记录直接返回
                        if (!triggerId) {
                            vm.fail("Failed to delete trigger, not trigger found local.");
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        triggerId = this.triggerId;
                        triggerTypeCode = triggerTypeCode;
                        _a.label = 3;
                    case 3:
                        deleteTriggerRequest = new DeleteTriggerRequest_1.DeleteTriggerRequest()
                            .withFunctionUrn(functionUrn)
                            .withTriggerId(triggerId)
                            .withTriggerTypeCode(triggerTypeCode);
                        return [4 /*yield*/, client.deleteTrigger(deleteTriggerRequest)];
                    case 4:
                        response = _a.sent();
                        if (response.status !== 200) {
                            vm.fail("Failed to delete trigger, not trigger found local.");
                            logger_1.default.error("Deleting trigger failed, error message: " + JSON.stringify(response.data));
                        }
                        else {
                            vm.succeed("Trigger deleted.");
                            return [2 /*return*/, response.data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 设置triggerId,某些业务（目前仅更新需要调用
     * 中需要调用该方法)
     * 先获得本地triggerId
     * 再调用templateMethod获得可能的triggerId
     * @returns
     */
    Trigger.prototype.setTriggerId = function (triggerId) {
        return __awaiter(this, void 0, void 0, function () {
            var Id, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = triggerId;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, getState("state")];
                    case 1:
                        _a = (_b.sent()).postTrigger.triggerId;
                        _b.label = 2;
                    case 2:
                        Id = _a;
                        this.triggerId = Id;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 设置本地触发器信息
     */
    Trigger.prototype.setLocalTriggerInfo = function (localTriggerInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                setState("localTriggerInfo", localTriggerInfo);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 获取本地触发器信息
     */
    Trigger.prototype.getLocalTriggerInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getState("localTriggerInfo")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 处理返回
     * @param response
     * @returns
     */
    Trigger.prototype.handleResponse = function (response) {
        var triggerInfo = [
            {
                desc: "TriggerId",
                example: response.trigger_id,
            },
            {
                desc: "TriggerTypeCode",
                example: response.trigger_type_code,
            },
            {
                desc: "TriggerStatus",
                example: response.trigger_status,
            },
        ];
        var eventDataInfo = [];
        for (var _i = 0, _a = Object.keys(response.event_data); _i < _a.length; _i++) {
            var key = _a[_i];
            var desc = key;
            var example = response.event_data[key];
            if (typeof (example) === "string") {
                // example = JSON.stringify(example);
                eventDataInfo.push({
                    desc: desc,
                    example: example,
                });
            }
        }
        return [
            {
                header: "Trigger",
                content: triggerInfo,
            },
            {
                header: "Trigger event data",
                content: eventDataInfo,
            },
        ];
    };
    return Trigger;
}());
exports.Trigger = Trigger;
var TriggerSMN = /** @class */ (function (_super) {
    __extends(TriggerSMN, _super);
    function TriggerSMN(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this["eventData"] = eventData;
        return _this;
    }
    TriggerSMN.prototype.getEventData = function () {
        return this.eventData;
    };
    TriggerSMN.prototype.getTriggerId = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var topicUrn, trigger;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        topicUrn = this.eventData.topicUrn;
                        return [4 /*yield*/, this.list(client)];
                    case 1:
                        trigger = (_a.sent()).find(function (trigger) {
                            return trigger.event_data.topic_urn == topicUrn;
                        });
                        if (trigger.trigger_id) {
                            this.triggerId = trigger.trigger_id;
                            return [2 /*return*/, this.triggerId];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return TriggerSMN;
}(Trigger));
exports.TriggerSMN = TriggerSMN;
var TriggerDIS = /** @class */ (function (_super) {
    __extends(TriggerDIS, _super);
    function TriggerDIS(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this["eventData"] = eventData;
        return _this;
    }
    TriggerDIS.prototype.getEventData = function () {
        return this.eventData;
    };
    TriggerDIS.prototype.getTriggerId = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var triggers, eventData, trigger;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.triggerId) {
                            return [2 /*return*/, this.triggerId];
                        }
                        return [4 /*yield*/, this.list(client)];
                    case 1:
                        triggers = _a.sent();
                        eventData = this.eventData;
                        trigger = triggers.find(function (trigger) {
                            return trigger.event_data.streamName == eventData.streamName;
                        });
                        if (trigger.trigger_id) {
                            this.triggerId = trigger.trigger_id;
                            return [2 /*return*/, this.triggerId];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return TriggerDIS;
}(Trigger));
exports.TriggerDIS = TriggerDIS;
var TriggerAPIG = /** @class */ (function (_super) {
    __extends(TriggerAPIG, _super);
    function TriggerAPIG(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this["eventData"] = eventData;
        return _this;
    }
    TriggerAPIG.prototype.getEventData = function () {
        return this.eventData;
    };
    TriggerAPIG.prototype.getTriggerId = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var triggers, eventData, trigger;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.triggerId) {
                            return [2 /*return*/, this.triggerId];
                        }
                        return [4 /*yield*/, this.list(client)];
                    case 1:
                        triggers = _a.sent();
                        eventData = this.eventData;
                        trigger = triggers.find(function (trigger) {
                            return (trigger.event_data.streamName === eventData.groupId &&
                                trigger.event_data.env_id === eventData.envId);
                        });
                        if (trigger.trigger_id) {
                            this.triggerId = trigger.trigger_id;
                            return [2 /*return*/, this.triggerId];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return TriggerAPIG;
}(Trigger));
exports.TriggerAPIG = TriggerAPIG;
var TriggerTIMER = /** @class */ (function (_super) {
    __extends(TriggerTIMER, _super);
    function TriggerTIMER(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this["eventData"] = eventData;
        return _this;
    }
    TriggerTIMER.prototype.getEventData = function () {
        return this.eventData;
    };
    TriggerTIMER.prototype.getTriggerId = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var triggers, eventData, trigger;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.triggerId) {
                            return [2 /*return*/, this.triggerId];
                        }
                        return [4 /*yield*/, this.list(client)];
                    case 1:
                        triggers = _a.sent();
                        eventData = this.eventData;
                        trigger = triggers.find(function (trigger) {
                            return trigger.event_data.name === eventData.name;
                        });
                        if (trigger.trigger_id) {
                            this.triggerId = trigger.trigger_id;
                            return [2 /*return*/, this.triggerId];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return TriggerTIMER;
}(Trigger));
exports.TriggerTIMER = TriggerTIMER;
var TriggerLTS = /** @class */ (function (_super) {
    __extends(TriggerLTS, _super);
    function TriggerLTS(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this["eventData"] = eventData;
        return _this;
    }
    TriggerLTS.prototype.getEventData = function () {
        return this.eventData;
    };
    TriggerLTS.prototype.getTriggerId = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var triggers, eventData, trigger;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.triggerId) {
                            return [2 /*return*/, this.triggerId];
                        }
                        return [4 /*yield*/, this.list(client)];
                    case 1:
                        triggers = _a.sent();
                        eventData = this.eventData;
                        trigger = triggers.find(function (trigger) {
                            return (trigger.event_data.group_id === eventData.groupId &&
                                trigger.event_data.topic_id === eventData.topicId);
                        });
                        if (trigger.trigger_id) {
                            this.triggerId = trigger.trigger_id;
                            return [2 /*return*/, this.triggerId];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return TriggerLTS;
}(Trigger));
exports.TriggerLTS = TriggerLTS;
var TriggerOBS = /** @class */ (function (_super) {
    __extends(TriggerOBS, _super);
    function TriggerOBS(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this["eventData"] = eventData;
        return _this;
    }
    TriggerOBS.prototype.getEventData = function () {
        return this.eventData;
    };
    TriggerOBS.prototype.getTriggerId = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var triggers, eventData, trigger;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.triggerId) {
                            return [2 /*return*/, this.triggerId];
                        }
                        return [4 /*yield*/, this.list(client)];
                    case 1:
                        triggers = _a.sent();
                        eventData = this.eventData;
                        trigger = triggers.find(function (trigger) {
                            return (trigger.event_data.bucket === eventData.bucket &&
                                trigger.event_data.prefix === eventData.prefix &&
                                trigger.event_data.suffix === eventData.suffix);
                        });
                        if (trigger.trigger_id) {
                            this.triggerId = trigger.trigger_id;
                            return [2 /*return*/, this.triggerId];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return TriggerOBS;
}(Trigger));
exports.TriggerOBS = TriggerOBS;
var TriggerCTS = /** @class */ (function (_super) {
    __extends(TriggerCTS, _super);
    function TriggerCTS(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this["eventData"] = eventData;
        return _this;
    }
    TriggerCTS.prototype.getEventData = function () {
        return this.eventData;
    };
    TriggerCTS.prototype.getTriggerId = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    return TriggerCTS;
}(Trigger));
exports.TriggerCTS = TriggerCTS;
var TriggerDDS = /** @class */ (function (_super) {
    __extends(TriggerDDS, _super);
    function TriggerDDS(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this["eventData"] = eventData;
        return _this;
    }
    TriggerDDS.prototype.getEventData = function () {
        return this.eventData;
    };
    TriggerDDS.prototype.getTriggerId = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    return TriggerDDS;
}(Trigger));
exports.TriggerDDS = TriggerDDS;
var TriggerKAFKA = /** @class */ (function (_super) {
    __extends(TriggerKAFKA, _super);
    function TriggerKAFKA(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this["eventData"] = eventData;
        return _this;
    }
    TriggerKAFKA.prototype.getEventData = function () {
        return this.eventData;
    };
    TriggerKAFKA.prototype.getTriggerId = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    return TriggerKAFKA;
}(Trigger));
exports.TriggerKAFKA = TriggerKAFKA;
var TriggerClientFactory = /** @class */ (function () {
    function TriggerClientFactory(props, functionUrn) {
        this.triggerInputProps = {
            triggerTypeCode: props.trigger.triggerTypeCode,
            eventTypeCode: props.trigger.eventTypeCode,
            status: props.trigger.status || "ACTIVE",
            functionUrn: functionUrn,
            triggerId: props.trigger.triggerId || null,
        };
        this.eventData = props.trigger.eventData;
    }
    TriggerClientFactory.prototype.setFunctionUrn = function (functionUrn) {
        this.triggerInputProps.functionUrn = functionUrn;
    };
    TriggerClientFactory.prototype.create = function () {
        var triggerTypeCode = this.triggerInputProps.triggerTypeCode;
        var eventData = this.eventData;
        if (triggerTypeCode === "DDS") {
            return new TriggerDDS(this.triggerInputProps, eventData);
        }
        else if (triggerTypeCode === "CTS") {
            return new TriggerCTS(this.triggerInputProps, eventData);
        }
        else if (triggerTypeCode === "APIG") {
            return new TriggerAPIG(this.triggerInputProps, eventData);
        }
        else if (triggerTypeCode === "DIS") {
            return new TriggerDIS(this.triggerInputProps, eventData);
        }
        else if (triggerTypeCode === "KAFAKA") {
            return new TriggerKAFKA(this.triggerInputProps, eventData);
        }
        else if (triggerTypeCode === "LTS") {
            return new TriggerLTS(this.triggerInputProps, eventData);
        }
        else if (triggerTypeCode === "OBS") {
            return new TriggerOBS(this.triggerInputProps, eventData);
        }
        else if (triggerTypeCode === "SMN") {
            return new TriggerSMN(this.triggerInputProps, eventData);
        }
        else if (triggerTypeCode === "TIMER") {
            return new TriggerTIMER(this.triggerInputProps, eventData);
        }
        else {
            logger_1.default.error("Unsupported trigger type.");
        }
    };
    return TriggerClientFactory;
}());
exports.TriggerClientFactory = TriggerClientFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L3RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1GQUFrRjtBQUNsRiwyRkFBMEY7QUFDMUYsK0VBQThFO0FBQzlFLG1GQUFrRjtBQUNsRiwyRkFBMEY7QUFDMUYsK0RBQXlDO0FBQ3pDLG1GQUFrRjtBQUNsRiwwREFBNkM7QUFDdkMsSUFBQSxLQUF5QixPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBdkQsUUFBUSxjQUFBLEVBQUUsUUFBUSxjQUFxQyxDQUFDO0FBR25ELFFBQUEsa0JBQWtCLEdBQUc7SUFDaEMsS0FBSztJQUNMLE1BQU07SUFDTixLQUFLO0lBQ0wsT0FBTztJQUNQLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsT0FBTztDQUNSLENBQUM7QUFDVyxRQUFBLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQTJGL0MsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2Qiw4QkFBOEI7QUFDOUIsSUFBSTtBQUVKLDJDQUEyQztBQUMzQyxzQ0FBc0M7QUFFdEMsOEVBQThFO0FBQzlFLHdCQUF3QjtBQUN4Qix5Q0FBeUM7QUFDekMsUUFBUTtBQUVSLHFDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsUUFBUTtBQUNSLElBQUk7QUFFSjtJQU1FLGlCQUFtQixLQUF3QjtRQUNqQyxJQUFBLFNBQVMsR0FDZixLQUFLLFVBRFUsRUFBRSxlQUFlLEdBQ2hDLEtBQUssZ0JBRDJCLEVBQUUsYUFBYSxHQUMvQyxLQUFLLGNBRDBDLEVBQUUsTUFBTSxHQUN2RCxLQUFLLE9BRGtELEVBQUUsV0FBVyxHQUNwRSxLQUFLLFlBRCtELENB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