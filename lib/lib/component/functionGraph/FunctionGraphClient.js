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
var axios = require("axios");
var FunctionGraphClient = /** @class */ (function () {
    function FunctionGraphClient(ak, sk, project_id, endpoint) {
        this["ak"] = ak;
        this["sk"] = sk;
        this["project_id"] = project_id;
        this["endpoint"] = endpoint;
    }
    FunctionGraphClient.prototype.withAk = function (ak) {
        this["ak"] = ak;
        return this;
    };
    FunctionGraphClient.prototype.withSk = function (sk) {
        this["sk"] = sk;
        return this;
    };
    FunctionGraphClient.prototype.withProjectId = function (project_id) {
        this["project_id"] = project_id;
        return this;
    };
    FunctionGraphClient.prototype.withEndpoint = function (endpoint) {
        this["endpoint"] = endpoint;
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
                        options = (0, exports.ParamCreater)().createFunction(createFunctionRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText,
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
                        options = (0, exports.ParamCreater)().updateFunction(updateFuncionRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText,
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
                        options = (0, exports.ParamCreater)().updateFunctionConfig(updateFunctionConfigRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText,
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
                        options = (0, exports.ParamCreater)().deleteFunction(deleteFunctionRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText,
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
                        options = (0, exports.ParamCreater)().getFunctionList(getFunctionListRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText,
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
                        options = (0, exports.ParamCreater)().createTrigger(createTriggerRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText,
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
                        options = (0, exports.ParamCreater)().updateTrigger(updateTriggerRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText,
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
                        options = (0, exports.ParamCreater)().deleteTrigger(deleteTriggerRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText,
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
                        options = (0, exports.ParamCreater)().listTrigger(listTriggerRequest, this);
                        return [4 /*yield*/, axios(options)
                                .then(function (res) {
                                return { status: 200, data: res.data };
                            })
                                .catch(function (err) {
                                var res = {
                                    data: err.response.data,
                                    headers: err.response.headers,
                                    status: err.response.status,
                                    statesText: err.response.statusText,
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
var ParamCreater = function () {
    return {
        /**
         * 此接口用于创建函数
         */
        createFunction: function (createFunctionRequest, client) {
            var options = {
                method: "POST",
                url: "".concat(client.endpoint, "/v2/").concat(client.project_id, "/fgs/functions"),
                headers: { "Content-Type": "application/json" },
                data: "",
            };
            var body;
            if (createFunctionRequest !== null &&
                createFunctionRequest !== undefined) {
                if (createFunctionRequest instanceof CreateFunctionRequest_1.CreateFunctionRequest) {
                    body = createFunctionRequest.body;
                }
                else {
                    body = createFunctionRequest["body"];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError("body", "Required parameter body");
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
                data: {},
            };
            var body;
            var func_urn;
            if (updateFunctionRequest !== null &&
                updateFunctionRequest !== undefined) {
                if (updateFunctionRequest instanceof UpdateFunctionRequest_1.UpdateFunctionRequest) {
                    body = updateFunctionRequest.body;
                    func_urn = updateFunctionRequest.func_urn;
                }
                else {
                    body = updateFunctionRequest["body"];
                    func_urn = updateFunctionRequest["func_urn"];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError("body", "Required parameter body");
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError("function_urn", "Required parameter function_urn");
            }
            options.url = "".concat(client.endpoint, "/v2/").concat(client.project_id, "/fgs/functions/").concat(func_urn, "/code");
            options.data =
                body !== undefined ? JSON.stringify(Object.assign({}, body)) : "";
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
                url: "",
                headers: { "Content-Type": "application/json" },
                data: {},
            };
            var body;
            var func_urn;
            if (updateFunctionConfigRequest !== null &&
                updateFunctionConfigRequest !== undefined) {
                if (updateFunctionConfigRequest instanceof UpdateFunctionConfigRequest_1.UpdateFunctionConfigRequest) {
                    body = updateFunctionConfigRequest.body;
                    func_urn = updateFunctionConfigRequest.func_urn;
                }
                else {
                    body = updateFunctionConfigRequest["body"];
                    func_urn = updateFunctionConfigRequest["func_urn"];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError("body", "Required parameter body");
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError("function_urn", "Required parameter function_urn");
            }
            options.url = "".concat(client.endpoint, "/v2/").concat(client.project_id, "/fgs/functions/").concat(func_urn, "/config");
            options.data =
                body !== undefined ? JSON.stringify(Object.assign({}, body)) : "";
            options.headers = sign(options, client);
            return options;
        },
        /**
         * 此接口用于获取函数列表
         */
        getFunctionList: function (getFunctionListRequest, client) {
            var options = {
                method: "GET",
                url: "".concat(client.endpoint, "/v2/").concat(client.project_id, "/fgs/functions"),
                headers: { "Content-Type": "application/json" },
                data: "",
            };
            var pkg;
            if (getFunctionListRequest !== null &&
                getFunctionListRequest !== undefined) {
                if (getFunctionListRequest instanceof GetFunctionListRequest_1.GetFunctionListRequest) {
                    pkg = getFunctionListRequest.package;
                }
                else {
                    pkg = getFunctionListRequest["package"];
                }
            }
            if (pkg !== null && pkg !== undefined) {
                options.url = options.url + "?package_name=".concat(pkg);
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
                url: "".concat(client.endpoint, "/v2/").concat(client.project_id, "/fgs/functions/{function_urn}"),
                headers: {},
                data: {},
            };
            var func_urn;
            if (deleteFunctionRequest !== null &&
                deleteFunctionRequest !== undefined) {
                if (deleteFunctionRequest instanceof DeleteFunctionRequest_1.DeleteFunctionRequest) {
                    func_urn = deleteFunctionRequest.func_urn;
                }
                else {
                    func_urn = deleteFunctionRequest["func_urn"];
                }
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError("function_urn", "Required parameter function_urn");
            }
            options.url = options.url.replace("{function_urn}", func_urn);
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
                url: "".concat(client.endpoint, "/v2/").concat(client.project_id, "/fgs/triggers/"),
                headers: { "Content-Type": "application/json" },
                data: "",
            };
            var body;
            var func_urn;
            if (createTriggerRequest !== null && createTriggerRequest !== undefined) {
                if (createTriggerRequest instanceof CreateTriggerRequest_1.CreateTriggerRequest) {
                    func_urn = createTriggerRequest.func_urn;
                    body = createTriggerRequest.body;
                }
                else {
                    func_urn = createTriggerRequest["func_urn"];
                    body = createTriggerRequest["body"];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError("body", "Required parameter body");
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
                data: "",
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
                    func_urn = updateTriggerRequest["func_urn"];
                    trigger_type_code = updateTriggerRequest["trigger_type_code"];
                    trigger_id = updateTriggerRequest["trigger_id"];
                    body = updateTriggerRequest["body"];
                }
            }
            if (body === null || body === undefined) {
                throw new RequiredError("body", "Required parameter body");
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError("func_urn", "Required parameter function urn");
            }
            if (trigger_type_code === null || trigger_type_code === undefined) {
                throw new RequiredError("trigger_type_code", "Required parameter trigger_type_code");
            }
            if (trigger_id === null || trigger_id === undefined) {
                throw new RequiredError("trigger_id", "Required parameter trigger_id");
            }
            options.url = "".concat(client.endpoint, "/v2/").concat(client.project_id, "/fgs/triggers/").concat(func_urn, "/").concat(trigger_type_code, "/").concat(trigger_id);
            options.data = JSON.stringify(Object.assign({}, body));
            options.headers = sign(options, client);
            return options;
        },
        deleteTrigger: function (deleteTriggerRequest, client) {
            var options = {
                method: "DELETE",
                url: "",
                headers: { "Content-Type": "application/json" },
                data: "",
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
                    func_urn = deleteTriggerRequest["func_urn"];
                    trigger_type_code = deleteTriggerRequest["trigger_type_code"];
                    trigger_id = deleteTriggerRequest["trigger_id"];
                }
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError("func_urn", "Required parameter func_urn");
            }
            if (trigger_type_code === null || trigger_type_code === undefined) {
                throw new RequiredError("trigger_type_code", "Required parameter trigger_type_code");
            }
            if (trigger_id === null || trigger_id === undefined) {
                throw new RequiredError("trigger_id", "Required parameter trigger_id");
            }
            options.url = "".concat(client.endpoint, "/v2/").concat(client.project_id, "/fgs/triggers/").concat(func_urn, "/").concat(trigger_type_code, "/").concat(trigger_id);
            options.headers = sign(options, client);
            return options;
        },
        listTrigger: function (listTriggerRequest, client) {
            var options = {
                method: "GET",
                url: "",
                headers: { "Content-Type": "application/json" },
                data: "",
            };
            var func_urn;
            if (listTriggerRequest !== null && listTriggerRequest !== undefined) {
                if (listTriggerRequest instanceof ListTriggerRequest_1.ListTriggerRequest) {
                    func_urn = listTriggerRequest.func_urn;
                }
                else {
                    func_urn = listTriggerRequest["func_urn"];
                }
            }
            if (func_urn === null || func_urn === undefined) {
                throw new RequiredError("func_urn", "Required parameter func_urn");
            }
            options.url = "".concat(client.endpoint, "/v2/").concat(client.project_id, "/fgs/triggers/").concat(func_urn);
            options.headers = sign(options, client);
            return options;
        },
    };
};
exports.ParamCreater = ParamCreater;
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
    var signer = require("./signer");
    var sig = new signer.Signer();
    sig.Key = client.ak;
    sig.Secret = client.sk;
    var r = new signer.HttpRequest(options.method, options.url.slice(8));
    r.headers = options.headers;
    r.body =
        typeof options.data === "string"
            ? options.data
            : JSON.stringify(options.data);
    var opt = sig.Sign(r);
    return opt.headers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25HcmFwaENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2Z1bmN0aW9uR3JhcGgvRnVuY3Rpb25HcmFwaENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUseUVBQXdFO0FBQ3hFLHVFQUFzRTtBQUN0RSx1RUFBc0U7QUFDdEUsbUZBQWtGO0FBQ2xGLHFFQUFvRTtBQUNwRSxxRUFBb0U7QUFDcEUscUVBQW9FO0FBQ3BFLGlFQUFnRTtBQUNoRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFN0I7SUFLRSw2QkFDRSxFQUFXLEVBQ1gsRUFBVyxFQUNYLFVBQW1CLEVBQ25CLFFBQWlCO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVNLG9DQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sb0NBQU0sR0FBYixVQUFjLEVBQVU7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSwyQ0FBYSxHQUFwQixVQUFxQixVQUFrQjtRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lB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