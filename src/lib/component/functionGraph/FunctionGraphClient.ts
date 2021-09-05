import { CreateFunctionRequest } from "./model/CreateFunctionRequest";
import { GetFunctionListRequest } from "./model/GetFunctionListRequest";
import { UpdateFunctionRequest } from "./model/UpdateFunctionRequest";
import { DeleteFunctionRequest } from "./model/DeleteFunctionRequest";
import { UpdateFunctionConfigRequest } from "./model/UpdateFunctionConfigRequest";
import { CreateTriggerRequest } from "./model/CreateTriggerRequest";
import { UpdateTriggerRequest } from "./model/UpdateTriggerRequest";
import { DeleteTriggerRequest } from "./model/DeleteTriggerRequest";
import { ListTriggerRequest } from "./model/ListTriggerRequest";
var axios = require('axios');

export class FunctionGraphClient {
    public ak?: string;
    public sk?: string;
    public project_id?: string;
    public endpoint?: string;
    public constructor(ak?:string, sk?: string, project_id?: string, endpoint?: string) {
        this['ak'] = ak;
        this['sk'] = sk;
        this['project_id'] = project_id;
        this['endpoint'] = endpoint;
    }
     
    public withAk(ak: string): FunctionGraphClient {
        this['ak'] = ak;
        return this;
    }

    public withSk(sk: string): FunctionGraphClient {
        this['sk'] = sk;
        return this;
    }

    public withProjectId(project_id: string): FunctionGraphClient {
        this['project_id'] = project_id;
        return this;
    }

    public withEndpoint(endpoint: string): FunctionGraphClient {
        this['endpoint'] = endpoint;
        return this;
    }

    public getPath() {
        return __dirname;
    }

    /**
     * 创建函数
     * @summary 创建函数
     * @param {CreateFunctionRequestBody}  
     * @throws {RequiredError}
     */
    public async createFunction(createFunctionRequest: CreateFunctionRequest): Promise<any> {
        const options = ParamCreater().createFunction(createFunctionRequest, this);
        return await axios(options)
            .then((res:any)=>{
                return {status: 200, data:res.data};
            })
            .catch((err:any) => {
                const res = {
                    data: err.response.data,
                    headers: err.response.headers,
                    status: err.response.status,
                    statesText: err.response.statusText
                }
                return res;
            })
    }
    /**
     * 更新函数代码
     * @param updateFuncionRequest 
     * @returns 
     */
    public async updateFunction(updateFuncionRequest: UpdateFunctionRequest): Promise<any>{
        const options = ParamCreater().updateFunction(updateFuncionRequest, this);
        return await axios(options)
            .then((res:any)=>{
                return {status: 200, data:res.data};
            })
            .catch((err:any) => {
                const res = {
                    data: err.response.data,
                    headers: err.response.headers,
                    status: err.response.status,
                    statesText: err.response.statusText
                }
                return res;
            })
    }

    /**
     * 更新函数配置
     * @param updateFunctionConfigRequest 
     * @returns 
     */
    public async updateFunctionConfig(updateFunctionConfigRequest: UpdateFunctionConfigRequest): Promise<any>{
        const options = ParamCreater().updateFunctionConfig(updateFunctionConfigRequest, this);    
        return await axios(options)
            .then((res:any)=>{
                return {status: 200, data:res.data};
            })
            .catch((err:any) => {
                const res = {
                    data: err.response.data,
                    headers: err.response.headers,
                    status: err.response.status,
                    statesText: err.response.statusText
                }
                return res;
            })
    }

    /**
     * 删除函数
     * @param deleteFunctionRequest 
     */
    public async deleteFunction(deleteFunctionRequest: DeleteFunctionRequest): Promise<any>{
        const options = ParamCreater().deleteFunction(deleteFunctionRequest, this);
        return await axios(options)
            .then((res:any)=>{
                return {status: 200, data:res.data};
            })
            .catch((err:any) => {
                const res = {
                    data: err.response.data,
                    headers: err.response.headers,
                    status: err.response.status,
                    statesText: err.response.statusText
                }
                return res;
            })
    }
    /**
     * 获取函数列表
     * @summary 获取函数列表
     * @param {GetFunctionListRequest} 
     * @param {RequiredError}
     */
    public async getFunctionList(getFunctionListRequest: GetFunctionListRequest): Promise<any> {
        const options = ParamCreater().getFunctionList(getFunctionListRequest, this);
        return await axios(options)
            .then((res:any)=>{
                return {status: 200, data:res.data};
            })
            .catch((err:any) => {
                const res = {
                    data: err.response.data,
                    headers: err.response.headers,
                    status: err.response.status,
                    statesText: err.response.statusText
                }
                return res;
            })
    }

    /**
     * 创建触发器
     * @param createTriggerRequest 
     * @returns 
     */
    public async createTrigger(createTriggerRequest: CreateTriggerRequest): Promise<any> {
        const options = ParamCreater().createTrigger(createTriggerRequest, this);
        return await axios(options)
            .then((res:any)=>{
                return {status: 200, data:res.data};
            })
            .catch((err:any) => {
                const res = {
                    data: err.response.data,
                    headers: err.response.headers,
                    status: err.response.status,
                    statesText: err.response.statusText
                }
                return res;
            })
    }

    public async updateTrigger(updateTriggerRequest: UpdateTriggerRequest): Promise<any> {
        const options = ParamCreater().updateTrigger(updateTriggerRequest, this);
        return await axios(options)
            .then((res:any)=>{
                return {status: 200, data:res.data};
            })
            .catch((err:any) => {
                const res = {
                    data: err.response.data,
                    headers: err.response.headers,
                    status: err.response.status,
                    statesText: err.response.statusText
                }
                return res;
            })
    }

    public async deleteTrigger(deleteTriggerRequest: DeleteTriggerRequest): Promise<any> {
        const options = ParamCreater().deleteTrigger(deleteTriggerRequest, this);
        return await axios(options)
            .then((res:any)=>{
                return {status: 200, data:res.data};
            })
            .catch((err:any) => {
                const res = {
                    data: err.response.data,
                    headers: err.response.headers,
                    status: err.response.status,
                    statesText: err.response.statusText
                }
                return res;
            })
    }

    public async listTrigger(listTriggerRequest: ListTriggerRequest): Promise<any> {
        const options = ParamCreater().listTrigger(listTriggerRequest, this);
        return await axios(options)
            .then((res:any)=>{
                return {status: 200, data:res.data};
            })
            .catch((err:any) => {
                const res = {
                    data: err.response.data,
                    headers: err.response.headers,
                    status: err.response.status,
                    statesText: err.response.statusText
                }
                return res;
            })
    }


}

export const ParamCreater = function () {

    return {
        /**
         * 此接口用于创建函数
         */
        createFunction(createFunctionRequest: CreateFunctionRequest, client: FunctionGraphClient) {
            const options = {
                method: "POST",
                url: `${client.endpoint}/v2/${client.project_id}/fgs/functions`,
                headers: {"Content-Type": "application/json"},
                data: ""
            }
            let body: any;

            if (createFunctionRequest !== null && createFunctionRequest !== undefined) {
                if (createFunctionRequest instanceof CreateFunctionRequest) {
                    body = createFunctionRequest.body;
                } else {
                    body = createFunctionRequest['body'];
                }
            }

            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            options.data =  JSON.stringify(Object.assign({}, body));
            options.headers = sign(options, client);
            return options;
        },

        /**
         * 更新函数
         */
        updateFunction(updateFunctionRequest: UpdateFunctionRequest, client:FunctionGraphClient) {
            const options = {
                method: "PUT",
                url: ``,
                headers: {"Content-Type": "application/json"},
                data: {}
            }

            let body: any;
            let func_urn: any;
            if (updateFunctionRequest !== null && updateFunctionRequest !== undefined) {
                if (updateFunctionRequest instanceof UpdateFunctionRequest) {
                    body = updateFunctionRequest.body;
                    func_urn = updateFunctionRequest.func_urn;
                } else {
                    body = updateFunctionRequest['body'];
                    func_urn = updateFunctionRequest['func_urn'];
                }
            }
            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn')
            }

            options.url = `${client.endpoint}/v2/${client.project_id}/fgs/functions/${func_urn}/code`
            options.data = body !== undefined ? JSON.stringify(Object.assign({}, body)) : "";
            options.headers = sign(options, client);
            return options;
        },

        /**
         * 更新函数配置
         * @param updateFunctionConfigRequest 
         * @returns 
         */
        updateFunctionConfig(updateFunctionConfigRequest: UpdateFunctionConfigRequest, client:FunctionGraphClient) {
            const options = {
                method: "PUT",
                url: '',
                headers: {"Content-Type": "application/json"},
                data: {}
            }
            var body: any;
            let func_urn: any;
            if (updateFunctionConfigRequest !== null && updateFunctionConfigRequest !== undefined) {
                if (updateFunctionConfigRequest instanceof UpdateFunctionConfigRequest) {
                    body = updateFunctionConfigRequest.body;
                    func_urn = updateFunctionConfigRequest.func_urn;
                } else {
                    body = updateFunctionConfigRequest['body'];
                    func_urn = updateFunctionConfigRequest['func_urn'];
                }
            }
            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn')
            }

            options.url = `${client.endpoint}/v2/${client.project_id}/fgs/functions/${func_urn}/config`
            options.data = body !== undefined ? JSON.stringify(Object.assign({}, body)) : "";
            options.headers = sign(options, client);
            return options;
        },

        /**
         * 此接口用于获取函数列表
         */
        getFunctionList(getFunctionListRequest: GetFunctionListRequest, client: FunctionGraphClient) {
            const options = {
                method: "GET",
                url: `${client.endpoint}/v2/${client.project_id}/fgs/functions`,
                headers: {"Content-Type": "application/json"},
                data: ""
            };
            let pkg: any;
            if(getFunctionListRequest !== null && getFunctionListRequest !== undefined) {
                if (getFunctionListRequest instanceof GetFunctionListRequest) {
                    pkg = getFunctionListRequest.package;
                }else{
                    pkg = getFunctionListRequest['package'];
                }
            }
            if (pkg !== null && pkg !== undefined) {
                options.url = options.url + `?package_name=${pkg}`
            }
            options.headers = sign(options, client);
            return options;
        },

        /**
         * 此接口用于删除函数
         * @param deleteFunctionRequest 
         * @returns 
         */
        deleteFunction(deleteFunctionRequest: DeleteFunctionRequest, client:FunctionGraphClient) {
            let options = {
                method: "DELETE",
                url: `${client.endpoint}/v2/${client.project_id}/fgs/functions/{function_urn}`,
                headers: {},
                data: {}
            };
            let func_urn: any;
            if (deleteFunctionRequest !== null && deleteFunctionRequest !== undefined) {
                if (deleteFunctionRequest instanceof DeleteFunctionRequest) {
                    func_urn = deleteFunctionRequest.func_urn;
                } else {
                    func_urn = deleteFunctionRequest['func_urn'];
                }
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn')
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
        createTrigger(createTriggerRequest: CreateTriggerRequest, client: FunctionGraphClient) {
            const options = {
                method: "POST",
                url: `${client.endpoint}/v2/${client.project_id}/fgs/triggers/`,
                headers: {"Content-Type": "application/json"},
                data: ""
            }
            let body: any;
            let func_urn: any;
            if (createTriggerRequest !== null && createTriggerRequest !== undefined) {
                if (createTriggerRequest instanceof CreateTriggerRequest) {
                    func_urn = createTriggerRequest.func_urn;
                    body = createTriggerRequest.body;
                } else {
                    func_urn = createTriggerRequest['func_urn'];
                    body = createTriggerRequest['body'];
                }
            }

            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            options.url = options.url + func_urn;
            options.data =  JSON.stringify(Object.assign({}, body));
            options.headers = sign(options, client);
            return options;
        },

        updateTrigger(updateTriggerRequest: UpdateTriggerRequest, client: FunctionGraphClient) {
            let options = {
                method: "PUT",
                url: "",
                headers: {"Content-Type": "application/json"},
                data: ""
            }
            let func_urn: any;
            let body: any;
            let trigger_type_code: any;
            let trigger_id: any;

            if (updateTriggerRequest !== null && updateTriggerRequest !== undefined) {
                if (updateTriggerRequest instanceof UpdateTriggerRequest) {
                    func_urn = updateTriggerRequest.func_urn;
                    trigger_type_code = updateTriggerRequest.trigger_type_code;
                    trigger_id = updateTriggerRequest.trigger_id;
                    body = updateTriggerRequest.body;
                } else {
                    func_urn = updateTriggerRequest['func_urn'];
                    trigger_type_code = updateTriggerRequest['trigger_type_code'];
                    trigger_id = updateTriggerRequest['trigger_id'];
                    body = updateTriggerRequest['body'];
                }
            }

            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('func_urn', 'Required parameter function urn')
            }
            if(trigger_type_code === null || trigger_type_code === undefined) {
                throw new RequiredError('trigger_type_code', 'Required parameter trigger_type_code')
            }
            if(trigger_id === null || trigger_id === undefined) {
                throw new RequiredError('trigger_id', 'Required parameter trigger_id')
            }
            options.url = `${client.endpoint}/v2/${client.project_id}/fgs/triggers/${func_urn}/${trigger_type_code}/${trigger_id}`
            options.data =  JSON.stringify(Object.assign({}, body));
            options.headers = sign(options, client);
            return options;
        },

        deleteTrigger(deleteTriggerRequest: DeleteTriggerRequest, client: FunctionGraphClient) {
            const options = {
                method: "DELETE",
                url: "",
                headers: {"Content-Type": "application/json"},
                data: ""
            }
            
            let func_urn: any;
            let trigger_type_code: any;
            let trigger_id: any;
            if (deleteTriggerRequest !== null && deleteTriggerRequest !== undefined) {
                if (deleteTriggerRequest instanceof DeleteTriggerRequest) {
                    func_urn = deleteTriggerRequest.func_urn;
                    trigger_type_code = deleteTriggerRequest.trigger_type_code;
                    trigger_id = deleteTriggerRequest.trigger_id;
                } else {
                    func_urn = deleteTriggerRequest['func_urn'];
                    trigger_type_code = deleteTriggerRequest['trigger_type_code'];
                    trigger_id = deleteTriggerRequest['trigger_id'];
                }
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('func_urn', 'Required parameter func_urn')
            }
            if(trigger_type_code === null || trigger_type_code === undefined) {
                throw new RequiredError('trigger_type_code', 'Required parameter trigger_type_code')
            }
            if(trigger_id === null || trigger_id === undefined) {
                throw new RequiredError('trigger_id', 'Required parameter trigger_id')
            }

            options.url = `${client.endpoint}/v2/${client.project_id}/fgs/triggers/${func_urn}/${trigger_type_code}/${trigger_id}`;
            options.headers = sign(options, client);
            return options;
        },

        listTrigger(listTriggerRequest: ListTriggerRequest, client: FunctionGraphClient) {
            const options = {
                method: "GET",
                url: "",
                headers: {"Content-Type": "application/json"},
                data: ""
            }
            
            let func_urn: any;
            if (listTriggerRequest !== null && listTriggerRequest !== undefined) {
                if (listTriggerRequest instanceof ListTriggerRequest) {
                    func_urn = listTriggerRequest.func_urn;
                } else {
                    func_urn = listTriggerRequest['func_urn'];
                }
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('func_urn', 'Required parameter func_urn')
            }

            options.url = `${client.endpoint}/v2/${client.project_id}/fgs/triggers/${func_urn}`;
            options.headers = sign(options, client);
            return options;
        }
    }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 获得签名头
 * @param options 
 * @param client 
 * @returns 签名头
 */
function sign(options: any, client:FunctionGraphClient) {
    let signer = require('./signer');
    let sig = new signer.Signer();

    sig.Key = client.ak;
    sig.Secret = client.sk;
    
    let r = new signer.HttpRequest(options.method, options.url.slice(8));
    r.headers = options.headers;
    r.body = typeof(options.data) === 'string' ? options.data: JSON.stringify(options.data);
    
    let opt = sig.Sign(r);

    return opt.headers;
}