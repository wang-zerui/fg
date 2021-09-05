"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.getTriggerClient = exports.TriggerKAFKA = exports.TriggerDDS = exports.TriggerCTS = exports.TriggerOBS = exports.TriggerLTS = exports.TriggerTIMER = exports.TriggerAPIG = exports.TriggerDIS = exports.TriggerSMN = exports.Trigger = exports.STATUSES = exports.TRIGGER_TYPE_CODES = void 0;
var CreateTriggerRequest_1 = require("./functionGraph/model/CreateTriggerRequest");
var CreateTriggerRequestBody_1 = require("./functionGraph/model/CreateTriggerRequestBody");
var ListTriggerRequest_1 = require("./functionGraph/model/ListTriggerRequest");
var UpdateTriggerRequest_1 = require("./functionGraph/model/UpdateTriggerRequest");
var UpdateTriggerRequestBody_1 = require("./functionGraph/model/UpdateTriggerRequestBody");
var logger_1 = __importDefault(require("../../common/logger"));
var DeleteTriggerRequest_1 = require("./functionGraph/model/DeleteTriggerRequest");
var _a = require('@serverless-devs/core'), setState = _a.setState, getState = _a.getState;
exports.TRIGGER_TYPE_CODES = ['SMN', 'APIG', 'OBS', 'TIMER', 'DMS', 'DIS', 'LTS', 'DDS', 'CTS', 'kafka'];
exports.STATUSES = ['ACTIVE', 'DISABLED'];
var Trigger = /** @class */ (function () {
    function Trigger(input) {
        var triggerId = input.triggerId, triggerTypeCode = input.triggerTypeCode, eventTypeCode = input.eventTypeCode, status = input.status, functionUrn = input.functionUrn;
        if (exports.TRIGGER_TYPE_CODES.indexOf(triggerTypeCode) < 0) {
            throw new Error("Invalid triggerTypeCode.");
        }
        if (exports.STATUSES.indexOf(status) < 0) {
            throw new Error("Invalid status");
        }
        this['triggerId'] = triggerId;
        this['triggerTypeCode'] = triggerTypeCode;
        this['status'] = status;
        this['eventTypeCode'] = eventTypeCode;
        this['functionUrn'] = functionUrn;
    }
    /**
     * 创建触发器
     * @param client FunctionGraphClient
     * @param functionUrn 函数代号
     * @returns
     */
    Trigger.prototype.create = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var body, response, triggerId, triggerTypeCode, functionUrn, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = new CreateTriggerRequestBody_1.CreateTriggerRequestBody()
                            .withTriggerTypeCode(this.triggerTypeCode)
                            .withTriggerStatus(this.status)
                            .withEventTypeCode(this.eventTypeCode)
                            .withEventData(this.getEventData());
                        return [4 /*yield*/, client.createTrigger(new CreateTriggerRequest_1.CreateTriggerRequest()
                                .withFunctionUrn(this.functionUrn)
                                .withBody(body))];
                    case 1:
                        response = _a.sent();
                        if (!(response.status !== 200)) return [3 /*break*/, 2];
                        throw new Error(JSON.stringify(response.data));
                    case 2:
                        triggerId = response.data.trigger_id;
                        triggerTypeCode = this.triggerTypeCode;
                        functionUrn = this.functionUrn;
                        return [4 /*yield*/, setState('state', { postTrigger: { triggerId: triggerId, triggerTypeCode: triggerTypeCode, functionUrn: functionUrn } })];
                    case 3:
                        c = _a.sent();
                        logger_1.default.debug("本地储存trigger信息" + JSON.stringify(c));
                        return [2 /*return*/, this.handleResponse(response.data)];
                }
            });
        });
    };
    /**
     * 获取触发器列表
     * @param client
     * @param functionUrn
     * @returns
     */
    Trigger.prototype.list = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.listTrigger(new ListTriggerRequest_1.ListTriggerRequest()
                            .withFunctionUrn(this.functionUrn))];
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
     * 更新触发器
     * @param Client
     * @param functionUrn
     * @returns
     */
    //@ts-ignore
    Trigger.prototype.update = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var body, response, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        body = new UpdateTriggerRequestBody_1.UpdateTriggerRequestBody()
                            .withTriggerStatus(this.status);
                        _b = (_a = client).updateTrigger;
                        _d = (_c = new UpdateTriggerRequest_1.UpdateTriggerRequest()).withTriggerId;
                        return [4 /*yield*/, this.getTriggerId(client)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_e.sent()])
                                .withFunctionUrn(this.functionUrn)
                                .withTriggerTypeCode(this.triggerTypeCode)
                                .withBody(body)])];
                    case 2:
                        response = _e.sent();
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
     * 删除触发器
     * @param client
     */
    Trigger.prototype.remove = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var triggerId, triggerTypeCode, functionUrn, postTriggerInfo, deleteTriggerRequest, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        functionUrn = this.functionUrn;
                        if (!!this.triggerId) return [3 /*break*/, 2];
                        return [4 /*yield*/, getState('state')];
                    case 1:
                        postTriggerInfo = (_a.sent()).postTrigger;
                        triggerId = postTriggerInfo.triggerId;
                        triggerTypeCode = postTriggerInfo.triggerTypeCode;
                        functionUrn = postTriggerInfo.functionUrn;
                        logger_1.default.info("Deleteing triggers created before.");
                        return [3 /*break*/, 3];
                    case 2:
                        triggerId = this.triggerId;
                        triggerTypeCode = this.triggerTypeCode;
                        logger_1.default.info("Deleteing triggers indicated in s.yaml");
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
     * 设置triggerId,某些业务（目前仅更新需要调用
     * ））中需要调用该方法
     * 先获得本地triggerId
     * 再调用templateMethod获得可能的triggerId
     * @returns
     */
    Trigger.prototype.setTriggerId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var postTriggerInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getState('state')];
                    case 1:
                        postTriggerInfo = (_a.sent()).postTrigger;
                        return [2 /*return*/, postTriggerInfo.triggerId || null];
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
                example: response.trigger_id
            },
            {
                desc: "TriggerTypeCode",
                example: response.trigger_type_code
            },
            {
                desc: "TriggerStatus",
                example: response.trigger_status
            }
        ];
        var eventDataInfo = [];
        for (var _i = 0, _a = Object.keys(response.event_data); _i < _a.length; _i++) {
            var key = _a[_i];
            eventDataInfo.push({
                desc: key,
                example: response.event_data[key]
            });
        }
        return [
            {
                header: 'Trigger',
                content: triggerInfo
            },
            {
                header: 'Trigger event data',
                content: eventDataInfo
            }
        ];
    };
    return Trigger;
}());
exports.Trigger = Trigger;
var TriggerSMN = /** @class */ (function (_super) {
    __extends(TriggerSMN, _super);
    function TriggerSMN(input, eventData) {
        var _this = _super.call(this, input) || this;
        _this['eventData'] = eventData;
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
                        trigger = (_a.sent()).find(function (trigger) { return trigger.event_data.topic_urn == topicUrn; });
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
        _this['eventData'] = eventData;
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
        _this['eventData'] = eventData;
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
                            return trigger.event_data.streamName === eventData.groupId && trigger.event_data.env_id === eventData.envId;
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
        _this['eventData'] = eventData;
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
        _this['eventData'] = eventData;
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
                            return trigger.event_data.group_id === eventData.groupId && trigger.event_data.topic_id === eventData.topicId;
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
        _this['eventData'] = eventData;
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
                            return trigger.event_data.bucket === eventData.bucket && trigger.event_data.prefix === eventData.prefix && trigger.event_data.suffix === eventData.suffix;
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
        _this['eventData'] = eventData;
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
        _this['eventData'] = eventData;
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
        _this['eventData'] = eventData;
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
function getTriggerClient(props, functionUrn) {
    var input = {
        triggerTypeCode: props.trigger.triggerTypeCode,
        eventTypeCode: props.trigger.eventTypeCode,
        status: props.trigger.staus || "ACTIVE",
        functionUrn: functionUrn,
        triggerId: props.trigger.triggerId || null
    };
    var triggerTypeCode = props.trigger.triggerTypeCode;
    var eventData = props.trigger.eventData;
    if (triggerTypeCode === "DDS") {
        return new TriggerDDS(input, eventData);
    }
    else if (triggerTypeCode === "CTS") {
        return new TriggerCTS(input, eventData);
    }
    else if (triggerTypeCode === "APIG") {
        return new TriggerAPIG(input, eventData);
    }
    else if (triggerTypeCode === "DIS") {
        return new TriggerDIS(input, eventData);
    }
    else if (triggerTypeCode === "KAFAKA") {
        return new TriggerKAFKA(input, eventData);
    }
    else if (triggerTypeCode === "LTS") {
        return new TriggerLTS(input, eventData);
    }
    else if (triggerTypeCode === "OBS") {
        return new TriggerOBS(input, eventData);
    }
    else if (triggerTypeCode === "SMN") {
        return new TriggerSMN(input, eventData);
    }
    else if (triggerTypeCode === "TIMER") {
        return new TriggerTIMER(input, eventData);
    }
}
exports.getTriggerClient = getTriggerClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L3RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1GQUFrRjtBQUNsRiwyRkFBMEY7QUFDMUYsK0VBQThFO0FBQzlFLG1GQUFrRjtBQUNsRiwyRkFBMEY7QUFDMUYsK0RBQXlDO0FBQ3pDLG1GQUFrRjtBQUM1RSxJQUFBLEtBQXlCLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUF2RCxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQXFDLENBQUM7QUFHbkQsUUFBQSxrQkFBa0IsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pHLFFBQUEsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBVS9DO0lBTUksaUJBQW1CLEtBQXdCO1FBR25DLElBQUEsU0FBUyxHQUtULEtBQUssVUFMSSxFQUNULGVBQWUsR0FJZixLQUFLLGdCQUpVLEVBQ2YsYUFBYSxHQUdiLEtBQUssY0FIUSxFQUNiLE1BQU0sR0FFTixLQUFLLE9BRkMsRUFDTixXQUFXLEdBQ1gsS0FBSyxZQURNLENBQ0w7UUFFVixJQUFHLDBCQUFrQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEQsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBRyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3JD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LElBQUcsZUFBZSxLQUFLLEtBQUssRUFBQztRQUMvQixPQUFPLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMzQztTQUFLLElBQUcsZUFBZSxLQUFLLE1BQU0sRUFBQztRQUNoQyxPQUFPLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUM1QztTQUFLLElBQUcsZUFBZSxLQUFLLEtBQUssRUFBQztRQUMvQixPQUFPLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMzQztTQUFLLElBQUcsZUFBZSxLQUFLLFFBQVEsRUFBQztRQUNsQyxPQUFPLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUM3QztTQUFLLElBQUcsZUFBZSxLQUFLLEtBQUssRUFBQztRQUMvQixPQUFPLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMzQztTQUFLLElBQUcsZUFBZSxLQUFLLEtBQUssRUFBQztRQUMvQixPQUFPLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMzQztTQUFLLElBQUcsZUFBZSxLQUFLLEtBQUssRUFBQztRQUMvQixPQUFPLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMzQztTQUFLLElBQUcsZUFBZSxLQUFLLE9BQU8sRUFBQztRQUNqQyxPQUFPLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUM3QztBQUNMLENBQUM7QUE3QkQsNENBNkJDIn0=