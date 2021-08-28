"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var HLogger = require('@serverless-devs/core').HLogger;
var ComponentLogger = /** @class */ (function () {
    function ComponentLogger() {
    }
    ComponentLogger.setContent = function (content) {
        ComponentLogger.CONTENT = content;
    };
    ComponentLogger.log = function (m, color) {
        this.logger.log(m, color);
    };
    ComponentLogger.info = function (m) {
        this.logger.info(ComponentLogger.CONTENT, m);
    };
    ComponentLogger.debug = function (m) {
        this.logger.debug(ComponentLogger.CONTENT, m);
    };
    ComponentLogger.error = function (m) {
        this.logger.error(ComponentLogger.CONTENT, m);
    };
    ComponentLogger.warning = function (m) {
        this.logger.warn(ComponentLogger.CONTENT, m);
    };
    ComponentLogger.success = function (m) {
        this.logger.log(m, 'green');
    };
    ComponentLogger.CONTENT = 'CFC';
    __decorate([
        HLogger('S-CORE'),
        __metadata("design:type", Object)
    ], ComponentLogger, "logger", void 0);
    return ComponentLogger;
}());
exports.default = ComponentLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxPQUFPLENBQUMsdUJBQXVCLENBQUMsUUFBckMsQ0FBc0M7QUFFckQ7SUFBQTtJQTRCQSxDQUFDO0lBekJRLDBCQUFVLEdBQWpCLFVBQWtCLE9BQU87UUFDdkIsZUFBZSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUNNLG1CQUFHLEdBQVYsVUFBVyxDQUFDLEVBQUUsS0FBNkc7UUFDekgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSxvQkFBSSxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLHFCQUFLLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0scUJBQUssR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUF6Qk0sdUJBQU8sR0FBRyxLQUFLLENBQUM7SUFESjtRQUFsQixPQUFPLENBQUMsUUFBUSxDQUFDOzt5Q0FBZTtJQTJCbkMsc0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztrQkE1Qm9CLGVBQWUifQ==