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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredError = exports.ParamCreater = exports.FunctionGraphClient = void 0;
var CreateFunctionRequest_1 = require("./model/CreateFunctionRequest");
var GetFunctionListRequest_1 = require("./model/GetFunctionListRequest");
var UpdateFunctionRequest_1 = require("./model/UpdateFunctionRequest");
var DeleteFunctionRequest_1 = require("./model/DeleteFunctionRequest");
var UpdateFunctionConfigRequest_1 = require("./model/UpdateFunctionConfigRequest");
var CreateTriggerRequest_1 = require("./model/CreateTriggerRequest");
var UpdateTriggerRequest_1 = require("./model/UpdateTriggerRequest");
var DeleteTriggerRequest_1 = require("./model/DeleteTriggerRequest");
var ListTriggerRequest_1 = require("./model/ListTriggerRequest");
var axios = require('axios');
var FunctionGraphClient = /** @class */ (function () {
    function FunctionGraphClient(ak, sk, project_id, endpoint) {
        this['ak'] = ak;
        this['sk'] = sk;
        this['project_id'] = project_id;
        this['endpoint'] = endpoint;
    }
    FunctionGraphClient.prototype.withAk = function (ak) {
        this['ak'] = ak;
        return this;
    };
    FunctionGraphClient.prototype.withSk = function (sk) {
        this['sk'] = sk;
        return this;
    };
    FunctionGraphClient.prototype.withProjectId = function (project_id) {
        this['project_id'] = project_id;
        return this;
    };
    FunctionGraphClient.prototype.withEndpoint = function (endpoint) {
        this['endpoint'] = endpoint;
        return this;
    };
    FunctionGraphClient.prototype.getPath = function () {
        return __dirname;
    };
    /**
     * 创建函数
     * @summary 创建函数
     * @param {CreateFunctionRequestBody}
     * @throws {RequiredError}
     */
    FunctionGraphClient.prototype.createFunction = function (createFunctionRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = exports.ParamCreater().createFunction(createFunctionRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText
                                };
                                return res;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 更新函数代码
     * @param updateFuncionRequest
     * @returns
     */
    FunctionGraphClient.prototype.updateFunction = function (updateFuncionRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = exports.ParamCreater().updateFunction(updateFuncionRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText
                                };
                                return res;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 更新函数配置
     * @param updateFunctionConfigRequest
     * @returns
     */
    FunctionGraphClient.prototype.updateFunctionConfig = function (updateFunctionConfigRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = exports.ParamCreater().updateFunctionConfig(updateFunctionConfigRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText
                                };
                                return res;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 删除函数
     * @param deleteFunctionRequest
     */
    FunctionGraphClient.prototype.deleteFunction = function (deleteFunctionRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = exports.ParamCreater().deleteFunction(deleteFunctionRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText
                                };
                                return res;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 获取函数列表
     * @summary 获取函数列表
     * @param {GetFunctionListRequest}
     * @param {RequiredError}
     */
    FunctionGraphClient.prototype.getFunctionList = function (getFunctionListRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = exports.ParamCreater().getFunctionList(getFunctionListRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText
                                };
                                return res;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 创建触发器
     * @param createTriggerRequest
     * @returns
     */
    FunctionGraphClient.prototype.createTrigger = function (createTriggerRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = exports.ParamCreater().createTrigger(createTriggerRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText
                                };
                                return res;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FunctionGraphClient.prototype.updateTrigger = function (updateTriggerRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = exports.ParamCreater().updateTrigger(updateTriggerRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText
                                };
                                return res;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FunctionGraphClient.prototype.deleteTrigger = function (deleteTriggerRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = exports.ParamCreater().deleteTrigger(deleteTriggerRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText
                                };
                                return res;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FunctionGraphClient.prototype.listTrigger = function (listTriggerRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = exports.ParamCreater().listTrigger(listTriggerRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText
                                };
                                return res;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return FunctionGraphClient;
}());
exports.FunctionGraphClient = FunctionGraphClient;
exports.ParamCreater = function () {
    return {
        /**
         * 此接口用于创建函数
         */
        createFunction: function (createFunctionRequest, client) {
            var options = {
                method: "POST",
                url: client.endpoint + "/v2/" + client.project_id + "/fgs/functions",
                headers: { "Content-Type": "application/json" },
                data: ""
            };
            var body;
            if (createFunctionRequest !== null && createFunctionRequest !== undefined) {
                if (createFunctionRequest instanceof CreateFunctionRequest_1.CreateFunctionRequest) {
                    body = createFunctionRequest.body;
                }
                else {
                    body = createFunctionRequest['body'];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body');
            }
            options.data = JSON.stringify(Object.assign({}, body));
            options.headers = sign(options, client);
            return options;
        },
        /**
         * 更新函数
         */
        updateFunction: function (updateFunctionRequest, client) {
            var options = {
                method: "PUT",
                url: "",
                headers: { "Content-Type": "application/json" },
                data: {}
            };
            var body;
            var func_urn;
            if (updateFunctionRequest !== null && updateFunctionRequest !== undefined) {
                if (updateFunctionRequest instanceof UpdateFunctionRequest_1.UpdateFunctionRequest) {
                    body = updateFunctionRequest.body;
                    func_urn = updateFunctionRequest.func_urn;
                }
                else {
                    body = updateFunctionRequest['body'];
                    func_urn = updateFunctionRequest['func_urn'];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body');
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn');
            }
            options.url = client.endpoint + "/v2/" + client.project_id + "/fgs/functions/" + func_urn + "/code";
            options.data = body !== undefined ? JSON.stringify(Object.assign({}, body)) : "";
            options.headers = sign(options, client);
            return options;
        },
        /**
         * 更新函数配置
         * @param updateFunctionConfigRequest
         * @returns
         */
        updateFunctionConfig: function (updateFunctionConfigRequest, client) {
            var options = {
                method: "PUT",
                url: '',
                headers: { "Content-Type": "application/json" },
                data: {}
            };
            var body;
            var func_urn;
            if (updateFunctionConfigRequest !== null && updateFunctionConfigRequest !== undefined) {
                if (updateFunctionConfigRequest instanceof UpdateFunctionConfigRequest_1.UpdateFunctionConfigRequest) {
                    body = updateFunctionConfigRequest.body;
                    func_urn = updateFunctionConfigRequest.func_urn;
                }
                else {
                    body = updateFunctionConfigRequest['body'];
                    func_urn = updateFunctionConfigRequest['func_urn'];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body');
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn');
            }
            options.url = client.endpoint + "/v2/" + client.project_id + "/fgs/functions/" + func_urn + "/config";
            options.data = body !== undefined ? JSON.stringify(Object.assign({}, body)) : "";
            options.headers = sign(options, client);
            return options;
        },
        /**
         * 此接口用于获取函数列表
         */
        getFunctionList: function (getFunctionListRequest, client) {
            var options = {
                method: "GET",
                url: client.endpoint + "/v2/" + client.project_id + "/fgs/functions",
                headers: { "Content-Type": "application/json" },
                data: ""
            };
            var pkg;
            if (getFunctionListRequest !== null && getFunctionListRequest !== undefined) {
                if (getFunctionListRequest instanceof GetFunctionListRequest_1.GetFunctionListRequest) {
                    pkg = getFunctionListRequest.package;
                }
                else {
                    pkg = getFunctionListRequest['package'];
                }
            }
            if (pkg !== null && pkg !== undefined) {
                options.url = options.url + ("?package_name=" + pkg);
            }
            options.headers = sign(options, client);
            return options;
        },
        /**
         * 此接口用于删除函数
         * @param deleteFunctionRequest
         * @returns
         */
        deleteFunction: function (deleteFunctionRequest, client) {
            var options = {
                method: "DELETE",
                url: client.endpoint + "/v2/" + client.project_id + "/fgs/functions/{function_urn}",
                headers: {},
                data: {}
            };
            var func_urn;
            if (deleteFunctionRequest !== null && deleteFunctionRequest !== undefined) {
                if (deleteFunctionRequest instanceof DeleteFunctionRequest_1.DeleteFunctionRequest) {
                    func_urn = deleteFunctionRequest.func_urn;
                }
                else {
                    func_urn = deleteFunctionRequest['func_urn'];
                }
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn');
            }
            options.url = options.url.replace('{function_urn}', func_urn);
            options.data = "";
            options.headers = sign(options, client);
            return options;
        },
        /**
         * 创建触发器函数
         * @param createTriggerRequest
         * @param client
         * @returns
         */
        createTrigger: function (createTriggerRequest, client) {
            var options = {
                method: "POST",
                url: client.endpoint + "/v2/" + client.project_id + "/fgs/triggers/",
                headers: { "Content-Type": "application/json" },
                data: ""
            };
            var body;
            var func_urn;
            if (createTriggerRequest !== null && createTriggerRequest !== undefined) {
                if (createTriggerRequest instanceof CreateTriggerRequest_1.CreateTriggerRequest) {
                    func_urn = createTriggerRequest.func_urn;
                    body = createTriggerRequest.body;
                }
                else {
                    func_urn = createTriggerRequest['func_urn'];
                    body = createTriggerRequest['body'];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body');
            }
            options.url = options.url + func_urn;
            options.data = JSON.stringify(Object.assign({}, body));
            options.headers = sign(options, client);
            return options;
        },
        updateTrigger: function (updateTriggerRequest, client) {
            var options = {
                method: "PUT",
                url: "",
                headers: { "Content-Type": "application/json" },
                data: ""
            };
            var func_urn;
            var body;
            var trigger_type_code;
            var trigger_id;
            if (updateTriggerRequest !== null && updateTriggerRequest !== undefined) {
                if (updateTriggerRequest instanceof UpdateTriggerRequest_1.UpdateTriggerRequest) {
                    func_urn = updateTriggerRequest.func_urn;
                    trigger_type_code = updateTriggerRequest.trigger_type_code;
                    trigger_id = updateTriggerRequest.trigger_id;
                    body = updateTriggerRequest.body;
                }
                else {
                    func_urn = updateTriggerRequest['func_urn'];
                    trigger_type_code = updateTriggerRequest['trigger_type_code'];
                    trigger_id = updateTriggerRequest['trigger_id'];
                    body = updateTriggerRequest['body'];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body');
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError('func_urn', 'Required parameter function urn');
            }
            if (trigger_type_code === null || trigger_type_code === undefined) {
                throw new RequiredError('trigger_type_code', 'Required parameter trigger_type_code');
            }
            if (trigger_id === null || trigger_id === undefined) {
                throw new RequiredError('trigger_id', 'Required parameter trigger_id');
            }
            options.url = client.endpoint + "/v2/" + client.project_id + "/fgs/triggers/" + func_urn + "/" + trigger_type_code + "/" + trigger_id;
            options.data = JSON.stringify(Object.assign({}, body));
            options.headers = sign(options, client);
            return options;
        },
        deleteTrigger: function (deleteTriggerRequest, client) {
            var options = {
                method: "DELETE",
                url: "",
                headers: { "Content-Type": "application/json" },
                data: ""
            };
            var func_urn;
            var trigger_type_code;
            var trigger_id;
            if (deleteTriggerRequest !== null && deleteTriggerRequest !== undefined) {
                if (deleteTriggerRequest instanceof DeleteTriggerRequest_1.DeleteTriggerRequest) {
                    func_urn = deleteTriggerRequest.func_urn;
                    trigger_type_code = deleteTriggerRequest.trigger_type_code;
                    trigger_id = deleteTriggerRequest.trigger_id;
                }
                else {
                    func_urn = deleteTriggerRequest['func_urn'];
                    trigger_type_code = deleteTriggerRequest['trigger_type_code'];
                    trigger_id = deleteTriggerRequest['trigger_id'];
                }
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError('func_urn', 'Required parameter func_urn');
            }
            if (trigger_type_code === null || trigger_type_code === undefined) {
                throw new RequiredError('trigger_type_code', 'Required parameter trigger_type_code');
            }
            if (trigger_id === null || trigger_id === undefined) {
                throw new RequiredError('trigger_id', 'Required parameter trigger_id');
            }
            options.url = client.endpoint + "/v2/" + client.project_id + "/fgs/triggers/" + func_urn + "/" + trigger_type_code + "/" + trigger_id;
            options.headers = sign(options, client);
            return options;
        },
        listTrigger: function (listTriggerRequest, client) {
            var options = {
                method: "GET",
                url: "",
                headers: { "Content-Type": "application/json" },
                data: ""
            };
            var func_urn;
            if (listTriggerRequest !== null && listTriggerRequest !== undefined) {
                if (listTriggerRequest instanceof ListTriggerRequest_1.ListTriggerRequest) {
                    func_urn = listTriggerRequest.func_urn;
                }
                else {
                    func_urn = listTriggerRequest['func_urn'];
                }
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError('func_urn', 'Required parameter func_urn');
            }
            options.url = client.endpoint + "/v2/" + client.project_id + "/fgs/triggers/" + func_urn;
            options.headers = sign(options, client);
            return options;
        }
    };
};
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
var RequiredError = /** @class */ (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError(field, msg) {
        var _this = _super.call(this, msg) || this;
        _this.field = field;
        _this.name = "RequiredError";
        return _this;
    }
    return RequiredError;
}(Error));
exports.RequiredError = RequiredError;
/**
 * 获得签名头
 * @param options
 * @param client
 * @returns 签名头
 */
function sign(options, client) {
    var signer = require('./signer');
    var sig = new signer.Signer();
    sig.Key = client.ak;
    sig.Secret = client.sk;
    var r = new signer.HttpRequest(options.method, options.url.slice(8));
    r.headers = options.headers;
    r.body = typeof (options.data) === 'string' ? options.data : JSON.stringify(options.data);
    var opt = sig.Sign(r);
    return opt.headers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25HcmFwaENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2Z1bmN0aW9uR3JhcGgvRnVuY3Rpb25HcmFwaENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXNFO0FBQ3RFLHlFQUF3RTtBQUN4RSx1RUFBc0U7QUFDdEUsdUVBQXNFO0FBQ3RFLG1GQUFrRjtBQUNsRixxRUFBb0U7QUFDcEUscUVBQW9FO0FBQ3BFLHFFQUFvRTtBQUNwRSxpRUFBZ0U7QUFDaEUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCO0lBS0ksNkJBQW1CLEVBQVUsRUFBRSxFQUFXLEVBQUUsVUFBbUIsRUFBRSxRQUFpQjtRQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxvQ0FBTSxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQ0FBTSxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwyQ0FBYSxHQUFwQixVQUFxQixVQUFrQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwwQ0FBWSxHQUFuQixVQUFvQixRQUFnQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQ0FBTyxHQUFkO1FBQ0ksT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1UsNENBQWMsR0FBM0IsVUFBNEIscUJBQTRDOzs7Ozs7d0JBQzlELE9BQU8sR0FBRyxvQkFBWSxFQUFFLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNwRSxxQkFBTSxLQUFLLENBQUMsT0FBTyxDQUFDO2lDQUN0QixJQUFJLENBQUMsVUFBQyxHQUFPO2dDQUNWLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQztpQ0FDRCxLQUFLLENBQUMsVUFBQyxHQUFPO2dDQUNYLElBQU0sR0FBRyxHQUFHO29DQUNSLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUk7b0NBQ3ZCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU87b0NBQzdCLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU07b0NBQzNCLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVU7aUNBQ3RDLENBQUE7Z0NBQ0QsT0FBTyxHQUFHLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLEVBQUE7NEJBWk4sc0JBQU8sU0FZRCxFQUFBOzs7O0tBQ1Q7SUFDRDs7OztPQUlHO0lBQ1UsNENBQWMsR0FBM0IsVUFBNEIsb0JBQTJDOzs7Ozs7d0JBQzdELE9BQU8sR0FBRyxvQkFBWSxFQUFFLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNuRSxxQkFBTSxLQUFLLENBQUMsT0FBTyxDQUFDO2lDQUN0QixJQUFJLENBQUMsVUFBQyxHQUFPO2dDQUNWLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQztpQ0FDRCxLQUFLLENBQUMsVUFBQyxHQUFPO2dDQUNYLElBQU0sR0FBRyxHQUFHO29DQUNSLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUk7b0NBQ3ZCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU87b0NBQzdCLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU07b0NBQzNCLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVU7aUNBQ3RDLENBQUE7Z0NBQ0QsT0FBTyxHQUFHLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLEVBQUE7NEJBWk4sc0JBQU8sU0FZRCxFQUFBOzs7O0tBQ1Q7SUFFRDs7OztPQUlHO0lBQ1Usa0RBQW9CLEdBQWpDLFVBQWtDLDJCQUF3RDs7Ozs7O3dCQUNoRixPQUFPLEdBQUcsb0JBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNoRixxQkFBTSxLQUFLLENBQUMsT0FBTyxDQUFDO2lDQUN0QixJQUFJLENBQUMsVUFBQyxHQUFPO2dDQUNWLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQztpQ0FDRCxLQUFLLENBQUMsVUFBQyxHQUFPO2dDQUNYLElBQU0sR0FBRyxHQUFHO29DQUNSLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUk7b0NBQ3ZCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU87b0NBQzdCLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU07b0NBQzNCLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVU7aUNBQ3RDLENBQUE7Z0NBQ0QsT0FBTyxHQUFHLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLEVBQUE7NEJBWk4sc0JBQU8sU0FZRCxFQUFBOzs7O0tBQ1Q7SUFFRDs7O09BR0c7SUFDVSw0Q0FBYyxHQUEzQixVQUE0QixxQkFBNEM7Ozs7Ozt3QkFDOUQsT0FBTyxHQUFHLG9CQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3BFLHFCQUFNLEtBQUssQ0FBQyxPQUFPLENBQUM7aUNBQ3RCLElBQUksQ0FBQyxVQUFDLEdBQU87Z0NBQ1YsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQzs0QkFDeEMsQ0FBQyxDQUFDO2lDQUNELEtBQUssQ0FBQyxVQUFDLEdBQU87Z0NBQ1gsSUFBTSxHQUFHLEdBQUc7b0NBQ1IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSTtvQ0FDdkIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTztvQ0FDN0IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTTtvQ0FDM0IsVUFBVSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVTtpQ0FDdEMsQ0FBQTtnQ0FDRCxPQUFPLEdBQUcsQ0FBQzs0QkFDZixDQUFDLENBQUMsRUFBQTs0QkFaTixzQkFBTyxTQVlELEVBQUE7Ozs7S0FDVDtJQUNEOzs7OztPQUtHO0lBQ1UsNkNBQWUsR0FBNUIsVUFBNkIsc0JBQThDOzs7Ozs7d0JBQ2pFLE9BQU8sR0FBRyxvQkFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN0RSxxQkFBTSxLQUFLLENBQUMsT0FBTyxDQUFDO2lDQUN0QixJQUFJLENBQUMsVUFBQyxHQUFPO2dDQUNWLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQztpQ0FDRCxLQUFLLENBQUMsVUFBQyxHQUFPO2dDQUNYLElBQU0sR0FBRyxHQUFHO29DQUNSLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUk7b0NBQ3ZCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU87b0NBQzdCLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU07b0NBQzNCLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVU7aUNBQ3RDLENBQUE7Z0NBQ0QsT0FBTyxHQUFHLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLEVBQUE7NEJBWk4sc0JBQU8sU0FZRCxFQUFBOzs7O0tBQ1Q7SUFFRDs7OztPQUlHO0lBQ1UsMkNBQWEsR0FBMUIsVUFBMkIsb0JBQTBDOzs7Ozs7d0JBQzNELE9BQU8sR0FBRyxvQkFBWSxFQUFFLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNsRSxxQkFBTSxLQUFLLENBQUMsT0FBTyxDQUFDO2lDQUN0QixJQUFJLENBQUMsVUFBQyxHQUFPO2dDQUNWLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQztpQ0FDRCxLQUFLLENBQUMsVUFBQyxHQUFPO2dDQUNYLElBQU0sR0FBRyxHQUFHO29DQUNSLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUk7b0NBQ3ZCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU87b0NBQzdCLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU07b0NBQzNCLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVU7aUNBQ3RDLENBQUE7Z0NBQ0QsT0FBTyxHQUFHLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLEVBQUE7NEJBWk4sc0JBQU8sU0FZRCxFQUFBOzs7O0tBQ1Q7SUFFWSwyQ0FBYSxHQUExQixVQUEyQixvQkFBMEM7Ozs7Ozt3QkFDM0QsT0FBTyxHQUFHLG9CQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2xFLHFCQUFNLEtBQUssQ0FBQyxPQUFPLENBQUM7aUNBQ3RCLElBQUksQ0FBQyxVQUFDLEdBQU87Z0NBQ1YsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQzs0QkFDeEMsQ0FBQyxDQUFDO2lDQUNELEtBQUssQ0FBQyxVQUFDLEdBQU87Z0NBQ1gsSUFBTSxHQUFHLEdBQUc7b0NBQ1IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSTtvQ0FDdkIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTztvQ0FDN0IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTTtvQ0FDM0IsVUFBVSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVTtpQ0FDdEMsQ0FBQTtnQ0FDRCxPQUFPLEdBQUcsQ0FBQzs0QkFDZixDQUFDLENBQUMsRUFBQTs0QkFaTixzQkFBTyxTQVlELEVBQUE7Ozs7S0FDVDtJQUVZLDJDQUFhLEdBQTFCLFVBQTJCLG9CQUEwQzs7Ozs7O3dCQUMzRCxPQUFPLEdBQUcsb0JBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDbEUscUJBQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQztpQ0FDdEIsSUFBSSxDQUFDLFVBQUMsR0FBTztnQ0FDVixPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxDQUFDOzRCQUN4QyxDQUFDLENBQUM7aUNBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBTztnQ0FDWCxJQUFNLEdBQUcsR0FBRztvQ0FDUixJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJO29DQUN2QixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPO29DQUM3QixNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNO29DQUMzQixVQUFVLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVO2lDQUN0QyxDQUFBO2dDQUNELE9BQU8sR0FBRyxDQUFDOzRCQUNmLENBQUMsQ0FBQyxFQUFBOzRCQVpOLHNCQUFPLFNBWUQsRUFBQTs7OztLQUNUO0lBRVkseUNBQVcsR0FBeEIsVUFBeUIsa0JBQXNDOzs7Ozs7d0JBQ3JELE9BQU8sR0FBRyxvQkFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUM5RCxxQkFBTSxLQUFLLENBQUMsT0FBTyxDQUFDO2lDQUN0QixJQUFJLENBQUMsVUFBQyxHQUFPO2dDQUNWLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQztpQ0FDRCxLQUFLLENBQUMsVUFBQyxHQUFPO2dDQUNYLElBQU0sR0FBRyxHQUFHO29DQUNSLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUk7b0NBQ3ZCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU87b0NBQzdCLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU07b0NBQzNCLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVU7aUNBQ3RDLENBQUE7Z0NBQ0QsT0FBTyxHQUFHLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLEVBQUE7NEJBWk4sc0JBQU8sU0FZRCxFQUFBOzs7O0tBQ1Q7SUFHTCwwQkFBQztBQUFELENBQUMsQUEzTkQsSUEyTkM7QUEzTlksa0RBQW1CO0FBNk5uQixRQUFBLFlBQVksR0FBRztJQUV4QixPQUFPO1FBQ0g7O1dBRUc7UUFDSCxjQUFjLEVBQWQsVUFBZSxxQkFBNEMsRUFBRSxNQUEyQjtZQUNwRixJQUFNLE9BQU8sR0FBRztnQkFDWixNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUssTUFBTSxDQUFDLFFBQVEsWUFBTyxNQUFNLENBQUMsVUFBVSxtQkFBZ0I7Z0JBQy9ELE9BQU8sRUFBRSxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQztnQkFDN0MsSUFBSSxFQUFFLEVBQUU7YUFDWCxDQUFBO1lBQ0QsSUFBSSxJQUFTLENBQUM7WUFFZCxJQUFJLHFCQUFxQixLQUFLLElBQUksSUFBSSxxQkFBcUIsS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZFLElBQUkscUJBQXFCLFlBQVksNkNBQXFCLEVBQUU7b0JBQ3hELElBQUksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDeEM7YUFDSjtZQUVELElBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUNwQyxNQUFNLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO2FBQzdEO1lBQ0QsT0FBTyxDQUFDLElBQUksR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7UUFFRDs7V0FFRztRQUNILGNBQWMsRUFBZCxVQUFlLHFCQUE0QyxFQUFFLE1BQTBCO1lBQ25GLElBQU0sT0FBTyxHQUFHO2dCQUNaLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxFQUFFO2dCQUNQLE9BQU8sRUFBRSxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQztnQkFDN0MsSUFBSSxFQUFFLEVBQUU7YUFDWCxDQUFBO1lBRUQsSUFBSSxJQUFTLENBQUM7WUFDZCxJQUFJLFFBQWEsQ0FBQztZQUNsQixJQUFJLHFCQUFxQixLQUFLLElBQUksSUFBSSxxQkFBcUIsS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZFLElBQUkscUJBQXFCLFlBQVksNkNBQXFCLEVBQUU7b0JBQ3hELElBQUksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7b0JBQ2xDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7aUJBQzdDO3FCQUFNO29CQUNILElBQUksR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNoRDthQUNKO1lBQ0QsSUFBRyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3BDLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUE7YUFDN0Q7WUFDRCxJQUFHLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDNUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQTthQUM3RTtZQUVELE9BQU8sQ0FBQyxHQUFHLEdBQU0sTUFBTSxDQUFDLFFBQVEsWUFBTyxNQUFNLENBQUMsVUFBVSx1QkFBa0IsUUFBUSxVQUFPLENBQUE7WUFDekYsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqRixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCxvQkFBb0IsRUFBcEIsVUFBcUIsMkJBQXdELEVBQUUsTUFBMEI7WUFDckcsSUFBTSxPQUFPLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDO2dCQUM3QyxJQUFJLEVBQUUsRUFBRTthQUNYLENBQUE7WUFDRCxJQUFJLElBQVMsQ0FBQztZQUNkLElBQUksUUFBYSxDQUFDO1lBQ2xCLElBQUksMkJBQTJCLEtBQUssSUFBSSxJQUFJLDJCQUEyQixLQUFLLFNBQVMsRUFBRTtnQkFDbkYsSUFBSSwyQkFBMkIsWUFBWSx5REFBMkIsRUFBRTtvQkFDcEUsSUFBSSxHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQztvQkFDeEMsUUFBUSxHQUFHLDJCQUEyQixDQUFDLFFBQVEsQ0FBQztpQkFDbkQ7cUJBQU07b0JBQ0gsSUFBSSxHQUFHLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMzQyxRQUFRLEdBQUcsMkJBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3REO2FBQ0o7WUFDRCxJQUFHLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDcEMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQTthQUM3RDtZQUNELElBQUcsUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUM1QyxNQUFNLElBQUksYUFBYSxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFBO2FBQzdFO1lBRUQsT0FBTyxDQUFDLEdBQUcsR0FBTSxNQUFNLENBQUMsUUFBUSxZQUFPLE1BQU0sQ0FBQyxVQUFVLHVCQUFrQixRQUFRLFlBQVMsQ0FBQTtZQUMzRixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRUQ7O1dBRUc7UUFDSCxlQUFlLEVBQWYsVUFBZ0Isc0JBQThDLEVBQUUsTUFBMkI7WUFDdkYsSUFBTSxPQUFPLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFLLE1BQU0sQ0FBQyxRQUFRLFlBQU8sTUFBTSxDQUFDLFVBQVUsbUJBQWdCO2dCQUMvRCxPQUFPLEVBQUUsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUM7Z0JBQzdDLElBQUksRUFBRSxFQUFFO2FBQ1gsQ0FBQztZQUNGLElBQUksR0FBUSxDQUFDO1lBQ2IsSUFBRyxzQkFBc0IsS0FBSyxJQUFJLElBQUksc0JBQXNCLEtBQUssU0FBUyxFQUFFO2dCQUN4RSxJQUFJLHNCQUFzQixZQUFZLCtDQUFzQixFQUFFO29CQUMxRCxHQUFHLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDO2lCQUN4QztxQkFBSTtvQkFDRCxHQUFHLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzNDO2FBQ0o7WUFDRCxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFDbkMsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFHLG1CQUFpQixHQUFLLENBQUEsQ0FBQTthQUNyRDtZQUNELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILGNBQWMsRUFBZCxVQUFlLHFCQUE0QyxFQUFFLE1BQTBCO1lBQ25GLElBQUksT0FBTyxHQUFHO2dCQUNWLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixHQUFHLEVBQUssTUFBTSxDQUFDLFFBQVEsWUFBTyxNQUFNLENBQUMsVUFBVSxrQ0FBK0I7Z0JBQzlFLE9BQU8sRUFBRSxFQUFFO2dCQUNYLElBQUksRUFBRSxFQUFFO2FBQ1gsQ0FBQztZQUNGLElBQUksUUFBYSxDQUFDO1lBQ2xCLElBQUkscUJBQXFCLEtBQUssSUFBSSxJQUFJLHFCQUFxQixLQUFLLFNBQVMsRUFBRTtnQkFDdkUsSUFBSSxxQkFBcUIsWUFBWSw2Q0FBcUIsRUFBRTtvQkFDeEQsUUFBUSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztpQkFDN0M7cUJBQU07b0JBQ0gsUUFBUSxHQUFHLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNoRDthQUNKO1lBQ0QsSUFBRyxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQzVDLE1BQU0sSUFBSSxhQUFhLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUE7YUFDN0U7WUFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzlELE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCxhQUFhLEVBQWIsVUFBYyxvQkFBMEMsRUFBRSxNQUEyQjtZQUNqRixJQUFNLE9BQU8sR0FBRztnQkFDWixNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUssTUFBTSxDQUFDLFFBQVEsWUFBTyxNQUFNLENBQUMsVUFBVSxtQkFBZ0I7Z0JBQy9ELE9BQU8sRUFBRSxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQztnQkFDN0MsSUFBSSxFQUFFLEVBQUU7YUFDWCxDQUFBO1lBQ0QsSUFBSSxJQUFTLENBQUM7WUFDZCxJQUFJLFFBQWEsQ0FBQztZQUNsQixJQUFJLG9CQUFvQixLQUFLLElBQUksSUFBSSxvQkFBb0IsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JFLElBQUksb0JBQW9CLFlBQVksMkNBQW9CLEVBQUU7b0JBQ3RELFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7b0JBQ3pDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3BDO3FCQUFNO29CQUNILFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN2QzthQUNKO1lBRUQsSUFBRyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3BDLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUE7YUFDN0Q7WUFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRUQsYUFBYSxFQUFiLFVBQWMsb0JBQTBDLEVBQUUsTUFBMkI7WUFDakYsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDO2dCQUM3QyxJQUFJLEVBQUUsRUFBRTthQUNYLENBQUE7WUFDRCxJQUFJLFFBQWEsQ0FBQztZQUNsQixJQUFJLElBQVMsQ0FBQztZQUNkLElBQUksaUJBQXNCLENBQUM7WUFDM0IsSUFBSSxVQUFlLENBQUM7WUFFcEIsSUFBSSxvQkFBb0IsS0FBSyxJQUFJLElBQUksb0JBQW9CLEtBQUssU0FBUyxFQUFFO2dCQUNyRSxJQUFJLG9CQUFvQixZQUFZLDJDQUFvQixFQUFFO29CQUN0RCxRQUFRLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDO29CQUN6QyxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDM0QsVUFBVSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztvQkFDN0MsSUFBSSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsUUFBUSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM1QyxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUM5RCxVQUFVLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2hELElBQUksR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkM7YUFDSjtZQUVELElBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUNwQyxNQUFNLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO2FBQzdEO1lBQ0QsSUFBRyxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQzVDLE1BQU0sSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFLGlDQUFpQyxDQUFDLENBQUE7YUFDekU7WUFDRCxJQUFHLGlCQUFpQixLQUFLLElBQUksSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7Z0JBQzlELE1BQU0sSUFBSSxhQUFhLENBQUMsbUJBQW1CLEVBQUUsc0NBQXNDLENBQUMsQ0FBQTthQUN2RjtZQUNELElBQUcsVUFBVSxLQUFLLElBQUksSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO2dCQUNoRCxNQUFNLElBQUksYUFBYSxDQUFDLFlBQVksRUFBRSwrQkFBK0IsQ0FBQyxDQUFBO2FBQ3pFO1lBQ0QsT0FBTyxDQUFDLEdBQUcsR0FBTSxNQUFNLENBQUMsUUFBUSxZQUFPLE1BQU0sQ0FBQyxVQUFVLHNCQUFpQixRQUFRLFNBQUksaUJBQWlCLFNBQUksVUFBWSxDQUFBO1lBQ3RILE9BQU8sQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRUQsYUFBYSxFQUFiLFVBQWMsb0JBQTBDLEVBQUUsTUFBMkI7WUFDakYsSUFBTSxPQUFPLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLEdBQUcsRUFBRSxFQUFFO2dCQUNQLE9BQU8sRUFBRSxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQztnQkFDN0MsSUFBSSxFQUFFLEVBQUU7YUFDWCxDQUFBO1lBRUQsSUFBSSxRQUFhLENBQUM7WUFDbEIsSUFBSSxpQkFBc0IsQ0FBQztZQUMzQixJQUFJLFVBQWUsQ0FBQztZQUNwQixJQUFJLG9CQUFvQixLQUFLLElBQUksSUFBSSxvQkFBb0IsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JFLElBQUksb0JBQW9CLFlBQVksMkNBQW9CLEVBQUU7b0JBQ3RELFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7b0JBQ3pDLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO29CQUMzRCxVQUFVLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDSCxRQUFRLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzVDLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQzlELFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkQ7YUFDSjtZQUNELElBQUcsUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUM1QyxNQUFNLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFBO2FBQ3JFO1lBQ0QsSUFBRyxpQkFBaUIsS0FBSyxJQUFJLElBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFO2dCQUM5RCxNQUFNLElBQUksYUFBYSxDQUFDLG1CQUFtQixFQUFFLHNDQUFzQyxDQUFDLENBQUE7YUFDdkY7WUFDRCxJQUFHLFVBQVUsS0FBSyxJQUFJLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtnQkFDaEQsTUFBTSxJQUFJLGFBQWEsQ0FBQyxZQUFZLEVBQUUsK0JBQStCLENBQUMsQ0FBQTthQUN6RTtZQUVELE9BQU8sQ0FBQyxHQUFHLEdBQU0sTUFBTSxDQUFDLFFBQVEsWUFBTyxNQUFNLENBQUMsVUFBVSxzQkFBaUIsUUFBUSxTQUFJLGlCQUFpQixTQUFJLFVBQVksQ0FBQztZQUN2SCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUVELFdBQVcsRUFBWCxVQUFZLGtCQUFzQyxFQUFFLE1BQTJCO1lBQzNFLElBQU0sT0FBTyxHQUFHO2dCQUNaLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxFQUFFO2dCQUNQLE9BQU8sRUFBRSxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQztnQkFDN0MsSUFBSSxFQUFFLEVBQUU7YUFDWCxDQUFBO1lBRUQsSUFBSSxRQUFhLENBQUM7WUFDbEIsSUFBSSxrQkFBa0IsS0FBSyxJQUFJLElBQUksa0JBQWtCLEtBQUssU0FBUyxFQUFFO2dCQUNqRSxJQUFJLGtCQUFrQixZQUFZLHVDQUFrQixFQUFFO29CQUNsRCxRQUFRLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDO2lCQUMxQztxQkFBTTtvQkFDSCxRQUFRLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzdDO2FBQ0o7WUFDRCxJQUFHLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDNUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxVQUFVLEVBQUUsNkJBQTZCLENBQUMsQ0FBQTthQUNyRTtZQUVELE9BQU8sQ0FBQyxHQUFHLEdBQU0sTUFBTSxDQUFDLFFBQVEsWUFBTyxNQUFNLENBQUMsVUFBVSxzQkFBaUIsUUFBVSxDQUFDO1lBQ3BGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQ0osQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQUVEOzs7OztHQUtHO0FBQ0g7SUFBbUMsaUNBQUs7SUFFcEMsdUJBQW1CLEtBQWEsRUFBRSxHQUFZO1FBQTlDLFlBQ0ksa0JBQU0sR0FBRyxDQUFDLFNBQ2I7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQURoQyxVQUFJLEdBQW9CLGVBQWUsQ0FBQzs7SUFHeEMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQUxELENBQW1DLEtBQUssR0FLdkM7QUFMWSxzQ0FBYTtBQU8xQjs7Ozs7R0FLRztBQUNILFNBQVMsSUFBSSxDQUFDLE9BQVksRUFBRSxNQUEwQjtJQUNsRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFOUIsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3BCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUV2QixJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4RixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUN2QixDQUFDIn0=