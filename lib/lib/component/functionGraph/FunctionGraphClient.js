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
            options.url = client.endpoint + "/v2/" + client.project_id + "/fgs/functions/" + func_urn + "/code";
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
            options.url = client.endpoint + "/v2/" + client.project_id + "/fgs/functions/" + func_urn + "/config";
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
                url: client.endpoint + "/v2/" + client.project_id + "/fgs/functions",
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
                url: client.endpoint + "/v2/" + client.project_id + "/fgs/triggers/",
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
            options.url = client.endpoint + "/v2/" + client.project_id + "/fgs/triggers/" + func_urn + "/" + trigger_type_code + "/" + trigger_id;
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
            options.url = client.endpoint + "/v2/" + client.project_id + "/fgs/triggers/" + func_urn;
            options.headers = sign(options, client);
            return options;
        },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25HcmFwaENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2Z1bmN0aW9uR3JhcGgvRnVuY3Rpb25HcmFwaENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXNFO0FBQ3RFLHlFQUF3RTtBQUN4RSx1RUFBc0U7QUFDdEUsdUVBQXNFO0FBQ3RFLG1GQUFrRjtBQUNsRixxRUFBb0U7QUFDcEUscUVBQW9FO0FBQ3BFLHFFQUFvRTtBQUNwRSxpRUFBZ0U7QUFDaEUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCO0lBS0UsNkJBQ0UsRUFBVyxFQUNYLEVBQVcsRUFDWCxVQUFtQixFQUNuQixRQUFpQjtRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFTSxvQ0FBTSxHQUFiLFVBQWMsRUFBVTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLG9DQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sMkNBQWEsR0FBcEIsVUFBcUIsVUFBa0I7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNk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