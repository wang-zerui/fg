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
var core_1 = require("@serverless-devs/core");
var core = __importStar(require("@serverless-devs/core"));
var base_1 = __importDefault(require("./common/base"));
var logger_1 = __importDefault(require("./common/logger"));
var deploy_1 = __importDefault(require("./lib/component/deploy"));
var help_1 = require("./lib/help");
var remove_1 = __importDefault(require("./lib/component/remove"));
// import Trigger from './lib/component/trigger';
var ComponentDemo = /** @class */ (function (_super) {
    __extends(ComponentDemo, _super);
    function ComponentDemo(props) {
        return _super.call(this, props) || this;
    }
    /**
     *  部署
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.deploy = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, endpoint, projectId, credentials, subCommand, props, 
            // args,
            help, errorMessage, deployInfo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, deploy_1.default.handleInputs(inputs)];
                    case 1:
                        _a = _b.sent(), endpoint = _a.endpoint, projectId = _a.projectId, credentials = _a.credentials, subCommand = _a.subCommand, props = _a.props, help = _a.help, errorMessage = _a.errorMessage;
                        return [4 /*yield*/, core_1.reportComponent("cfc", subCommand ? "deploy &(subCommand)" : "deploy")];
                    case 2:
                        _b.sent();
                        if (errorMessage) {
                            throw new Error(errorMessage);
                        }
                        if (help) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, new deploy_1.default(credentials, projectId, endpoint).deploy(props, subCommand)];
                    case 3:
                        deployInfo = _b.sent();
                        logger_1.default.info("Deploy info is shown here:");
                        core.help(deployInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 移除
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.remove = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, endpoint, projectId, credentials, subCommand, props, 
            // args,index.handler'
            help, errorMessage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, remove_1.default.handleInputs(inputs)];
                    case 1:
                        _a = _b.sent(), endpoint = _a.endpoint, projectId = _a.projectId, credentials = _a.credentials, subCommand = _a.subCommand, props = _a.props, help = _a.help, errorMessage = _a.errorMessage;
                        return [4 /*yield*/, core_1.reportComponent("cfc", subCommand ? "remove &(subCommand)" : "remove")];
                    case 2:
                        _b.sent();
                        if (errorMessage) {
                            throw new Error(errorMessage);
                        }
                        if (help) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, new remove_1.default(credentials, projectId, endpoint).remove(props, subCommand)];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * 测试
     */
    ComponentDemo.prototype.test = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var s;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, core_1.getState("state")];
                    case 1:
                        s = _a.sent();
                        logger_1.default.info(s);
                        return [2 /*return*/, s];
                }
            });
        });
    };
    /**
     * 帮助
     * @returns
     */
    ComponentDemo.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, core_1.reportComponent("cfc", "help")];
                    case 1:
                        _a.sent();
                        core.help(help_1.COMPONENT_HELP_INFO);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ComponentDemo;
}(base_1.default));
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFrRTtBQUNsRSwwREFBOEM7QUFDOUMsdURBQTBDO0FBQzFDLDJEQUFxQztBQUNyQyxrRUFBNEM7QUFHNUMsbUNBQWlEO0FBQ2pELGtFQUE0QztBQUM1QyxpREFBaUQ7QUFFakQ7SUFBMkMsaUNBQWE7SUFDdEQsdUJBQVksS0FBSztlQUNmLGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ1UsOEJBQU0sR0FBbkIsVUFBb0IsTUFBa0I7Ozs7Ozs7NEJBVWhDLHFCQUFNLGdCQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFUL0IsS0FTRixTQUFpQyxFQVJuQyxRQUFRLGNBQUEsRUFDUixTQUFTLGVBQUEsRUFDVCxXQUFXLGlCQUFBLEVBQ1gsVUFBVSxnQkFBQSxFQUNWLEtBQUssV0FBQSxFQUVMLElBQUksVUFBQSxFQUNKLFlBQVksa0JBQUE7d0JBRWQscUJBQU0sc0JBQWUsQ0FDbkIsS0FBSyxFQUNMLFVBQVUsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FDL0MsRUFBQTs7d0JBSEQsU0FHQyxDQUFDO3dCQUVGLElBQUksWUFBWSxFQUFFOzRCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3lCQUMvQjt3QkFDRCxJQUFJLElBQUksRUFBRTs0QkFDUixzQkFBTzt5QkFDUjt3QkFFa0IscUJBQU0sSUFBSSxnQkFBTSxDQUNqQyxXQUFXLEVBQ1gsU0FBUyxFQUNULFFBQVEsQ0FDVCxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUE7O3dCQUpyQixVQUFVLEdBQUcsU0FJUTt3QkFDM0IsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7S0FDdkI7SUFFRDs7OztPQUlHO0lBQ1UsOEJBQU0sR0FBbkIsVUFBb0IsTUFBa0I7Ozs7Ozs7NEJBVWhDLHFCQUFNLGdCQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFUL0IsS0FTRixTQUFpQyxFQVJuQyxRQUFRLGNBQUEsRUFDUixTQUFTLGVBQUEsRUFDVCxXQUFXLGlCQUFBLEVBQ1gsVUFBVSxnQkFBQSxFQUNWLEtBQUssV0FBQSxFQUVMLElBQUksVUFBQSxFQUNKLFlBQVksa0JBQUE7d0JBRWQscUJBQU0sc0JBQWUsQ0FDbkIsS0FBSyxFQUNMLFVBQVUsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FDL0MsRUFBQTs7d0JBSEQsU0FHQyxDQUFDO3dCQUNGLElBQUksWUFBWSxFQUFFOzRCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3lCQUMvQjt3QkFDRCxJQUFJLElBQUksRUFBRTs0QkFDUixzQkFBTzt5QkFDUjt3QkFDTSxxQkFBTSxJQUFJLGdCQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQzlELEtBQUssRUFDTCxVQUFVLENBQ1gsRUFBQTs0QkFIRCxzQkFBTyxTQUdOLEVBQUM7Ozs7S0FDSDtJQUVEOztPQUVHO0lBQ1UsNEJBQUksR0FBakIsVUFBa0IsTUFBa0I7Ozs7OzRCQUN4QixxQkFBTSxlQUFRLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUEzQixDQUFDLEdBQUcsU0FBdUI7d0JBQ2pDLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNmLHNCQUFPLENBQUMsRUFBQzs7OztLQUNWO0lBRUQ7OztPQUdHO0lBQ1UsNEJBQUksR0FBakI7Ozs7NEJBQ0UscUJBQU0sc0JBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUE7O3dCQUFwQyxTQUFvQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUFtQixDQUFDLENBQUM7Ozs7O0tBQ2hDO0lBTUgsb0JBQUM7QUFBRCxDQUFDLEFBaEdELENBQTJDLGNBQWEsR0FnR3ZEIn0=