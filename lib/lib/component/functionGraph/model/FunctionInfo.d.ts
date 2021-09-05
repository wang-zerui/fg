export interface FunctionInfoInputInterface {
    func_urn?: string;
    func_name?: string;
    domain_id?: string;
    namespace?: string;
    project_name?: string;
    pkg?: string;
    runtime?: string;
    timeout?: number;
    handler?: string;
    memory_size?: string;
    cpu?: number;
    code_type?: string;
    code_filename?: string;
    code_size?: number;
    digest?: string;
    version?: string;
    image_name?: string;
    enterprise_project_id?: string;
}
export declare const FUNCTION_INFO_KEYS: string[];
export declare class FunctionInfo {
    func_urn?: string;
    func_name?: string;
    domain_id?: string;
    namespace?: string;
    project_name?: string;
    pkg?: string;
    runtime?: string;
    timeout?: number;
    handler?: string;
    memory_size?: string;
    cpu?: number;
    code_type?: string;
    code_filename?: string;
    code_size?: number;
    digest?: string;
    version?: string;
    image_name?: string;
    enterprise_project_id?: string;
    constructor(input: FunctionInfoInputInterface);
}
