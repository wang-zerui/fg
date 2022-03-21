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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L3RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtRkFBa0Y7QUFDbEYsMkZBQTBGO0FBQzFGLCtFQUE4RTtBQUM5RSxtRkFBa0Y7QUFDbEYsMkZBQTBGO0FBQzFGLCtEQUF5QztBQUN6QyxtRkFBa0Y7QUFDbEYsMERBQTZDO0FBQ3ZDLElBQUEsS0FBeUIsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQXZELFFBQVEsY0FBQSxFQUFFLFFBQVEsY0FBcUMsQ0FBQztBQUduRCxRQUFBLGtCQUFrQixHQUFHO0lBQ2hDLEtBQUs7SUFDTCxNQUFNO0lBQ04sS0FBSztJQUNMLE9BQU87SUFDUCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLE9BQU87Q0FDUixDQUFDO0FBQ1csUUFBQSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUEyRi9DLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkIsOEJBQThCO0FBQzlCLElBQUk7QUFFSiwyQ0FBMkM7QUFDM0Msc0NBQXNDO0FBRXRDLDhFQUE4RTtBQUM5RSx3QkFBd0I7QUFDeEIseUNBQXlDO0FBQ3pDLFFBQVE7QUFFUixxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLFFBQVE7QUFDUixJQUFJO0FBRUo7SUFNRSxpQkFBbUIsS0FBd0I7UUFDakMsSUFBQSxTQUFTLEdBQ2YsS0FBSyxVQURVLEVBQUUsZUFBZSxHQUNoQyxLQUFLLGdCQUQyQixFQUFFLGFBQWEsR0FDL0MsS0FBSyxjQUQwQyxFQUFFLE1BQU0sR0FDdkQsS0FBSyxPQURrRCxFQUFFLFdBQVcsR0FDcEUsS0FBSyxZQUQr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