"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionInfo = exports.FUNCTION_INFO_KEYS = void 0;
exports.FUNCTION_INFO_KEYS = ['func_urn', 'func_name', 'project_name', 'pkg', 'runtime', 'timeout',
    'handler', 'memory_size', 'cpu', 'code_size', 'digest', 'version', 'image_name', 'enterprise_project_id'];
var FunctionInfo = /** @class */ (function () {
    function FunctionInfo(input) {
        this['func_urn'] = input.func_urn;
        this['func_name'] = input.func_name;
        this['domain_id'] = input.domain_id;
        this['namespace'] = input.namespace;
        this['project_name'] = input.project_name;
        this['pkg'] = input.pkg;
        this['runtime'] = input.runtime;
        this['timeout'] = input.timeout;
        this['handler'] = input.handler;
        this['memory_size'] = input.memory_size;
        this['cpu'] = input.cpu;
        this['code_type'] = input.code_type;
        this['code_filename'] = input.code_filename;
        this['code_size'] = input.code_size;
        this['digest'] = input.digest;
        this['version'] = input.version;
        this['image_name'] = input.image_name;
        this['enterprise_project_id'] = input.enterprise_project_id;
    }
    return FunctionInfo;
}());
exports.FunctionInfo = FunctionInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25JbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvZnVuY3Rpb25HcmFwaC9tb2RlbC9GdW5jdGlvbkluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBcUJhLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdkcsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDLENBQUM7QUFFMUc7SUFvQkksc0JBQW1CLEtBQWlDO1FBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztJQUNoRSxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLG9DQUFZIn0=