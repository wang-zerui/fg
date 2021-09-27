// import { HcClient } from "../../core/HcClient";
// import { ClientBuilder } from "../../core/ClientBuilder";
// import { SdkResponse } from "../../core/SdkResponse";
// import { ClientRequest } from "http"
// import { CreateFunctionRequest } from "./model/CreateFunctionRequest";
// import { CreateFunctionResponse } from "./model/CreateFunctionResponse";
// import { GetFunctionListRequest } from "./model/GetFunctionListRequest";
// import { GetFunctionListResponse } from "./model/GetFunctionListResponse";
// import { UpdateFunctionRequest } from "./model/UpdateFunctionRequest";
// import { UpdateFunctionResponse } from "./model/UpdateFunctionResponse";
// import { DeleteFunctionRequest } from "./model/DeleteFunctionRequest";
// import { UpdateFunctionConfigRequestBody } from "./model/UpdateFunctionConfigRequestBody";
// import { UpdateFunctionConfigRequest } from "./model/UpdateFunctionConfigRequest";
// import { UpdateFunctionConfigResponse } from "./model/UpdateFunctionConfigResponse";
// export class FunctionGraphClient {
//     public ak?: string;
//     public sk?: string;
//     public project_id?: string;
//     public constructor(ak?:string, sk?: string, project_id?: string) {
//         this['ak'] = ak;
//         this['sk'] = sk;
//         this['project_id'] = project_id;
//     }
//     public withAk(ak: string): FunctionGraphClient {
//         this['ak'] = ak;
//         return this;
//     }
//     public withSk(sk: string): FunctionGraphClient {
//         this['sk'] = sk;
//         return this;
//     }
//     public withProjectId(project_id: string): FunctionGraphClient {
//         this['project_id'] = project_id;
//         return this;
//     }
//     public getPath() {
//         return __dirname;
//     }
//     /**
//      * 创建函数
//      * @summary 创建函数
//      * @param {CreateFunctionRequestBody}
//      * @throws {RequiredError}
//      */
//     public createFunction(createFunctionRequest: CreateFunctionRequest): Promise<CreateFunctionResponse> {
//         const options = ParamCreater().createFunction(createFunctionRequest, this);
//         options['responseHeader'] = [''];
//         return this.hcClient.sendRequest(options);
//     }
//     /**
//      * 更新函数代码
//      * @param updateFuncionRequest
//      * @returns
//      */
//     // public updateFunction(updateFuncionRequest: UpdateFunctionRequest): Promise<UpdateFunctionResponse>{
//     //     const options = ParamCreater().updateFunction(updateFuncionRequest);
//     //     options['responseHeader'] = ['']
//     //     return this.hcClient.sendRequest(options);
//     // }
//     // public updateFunctionConfig(updateFunctionConfigRequest: UpdateFunctionConfigRequest): Promise<UpdateFunctionConfigResponse>{
//     //     const options = ParamCreater().updateFunctionConfig(updateFunctionConfigRequest);
//     //     options['responseHeader'] = ['']
//     //     return this.hcClient.sendRequest(options);
//     // }
//     // /**
//     //  * 删除函数
//     //  * @param deleteFunctionRequest
//     //  */
//     // public deleteFunction(deleteFunctionRequest: DeleteFunctionRequest): Promise<any>{
//     //     const options = ParamCreater().deleteFunction(deleteFunctionRequest);
//     //     options['responseHeader'] = [''];
//     //     return this.hcClient.sendRequest(options);
//     // }
//     /**
//      * 获取函数列表
//      * @summary 获取函数列表
//      * @param {GetFunctionListRequest}
//      * @param {RequiredError}
//      */
//     public getFunctionList(getFunctionListRequest: GetFunctionListRequest): Promise<GetFunctionListResponse> {
//         const options = ParamCreater().getFunctionList(getFunctionListRequest);
//         options['responseHeader'] = [''];
//         return this.hcClient.sendRequest(options);
//     }
// }
// export const ParamCreater = function () {
//     return {
//         /**
//          * 此接口用于创建函数
//          */
//         createFunction(createFunctionRequest: CreateFunctionRequest, client: FunctionGraphClient) {
//             const options = {
//                 method: "POST",
//                 url: `/v2/${client.project_id}/fgs/functions`,
//                 headers: {},
//                 data: {}
//             }
//             const localVarHeaderParameter = {} as any;
//             var body: any;
//             if (createFunctionRequest !== null && createFunctionRequest !== undefined) {
//                 if (createFunctionRequest instanceof CreateFunctionRequest) {
//                     body = createFunctionRequest.body;
//                 } else {
//                     body = createFunctionRequest['body'];
//                 }
//             }
//             if(body === null || body === undefined) {
//                 throw new RequiredError('body', 'Required parameter body')
//             }
//             localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';
//             options.data = body !== undefined ? body : {};
//             options.headers = localVarHeaderParameter;
//             return options;
//         },
//         /**
//          * 更新函数
//          */
//         updateFunction(updateFunctionRequest?: UpdateFunctionRequest) {
//             const options = {
//                 method: "PUT",
//                 url: "/v2/{project_id}/fgs/functions/{function_urn}/code",
//                 queryParams: {},
//                 pathParams: {},
//                 headers: {},
//                 data: {}
//             }
//             const localVarHeaderParameter = {} as any;
//             const localVarPathParameter = {} as any;
//             let body: any;
//             let func_urn: any;
//             if (updateFunctionRequest !== null && updateFunctionRequest !== undefined) {
//                 if (updateFunctionRequest instanceof UpdateFunctionRequest) {
//                     body = updateFunctionRequest.body;
//                     func_urn = updateFunctionRequest.func_urn;
//                 } else {
//                     body = updateFunctionRequest['body'];
//                     func_urn = updateFunctionRequest['func_urn'];
//                 }
//             }
//             if(body === null || body === undefined) {
//                 throw new RequiredError('body', 'Required parameter body')
//             }
//             if(func_urn === null || func_urn === undefined) {
//                 throw new RequiredError('function_urn', 'Required parameter function_urn')
//             }
//             localVarPathParameter['function_urn'] = func_urn;
//             localVarHeaderParameter['Content-Type'] = 'application/json';
//             options.data = body !== undefined ? body : {};
//             // options.data = {}
//             options.headers = localVarHeaderParameter;
//             options.pathParams = { 'function_urn': func_urn}
//             return options;
//         },
//         updateFunctionConfig(updateFunctionConfigRequest?: UpdateFunctionConfigRequest) {
//             const options = {
//                 method: "PUT",
//                 url: "/v2/{project_id}/fgs/functions/{function_urn}/config",
//                 contentType: "application/json",
//                 queryParams: {},
//                 pathParams: {},
//                 headers: {},
//                 data: {}
//             }
//             const localVarHeaderParameter = {} as any;
//             var body: any;
//             let func_urn: any;
//             if (updateFunctionConfigRequest !== null && updateFunctionConfigRequest !== undefined) {
//                 if (updateFunctionConfigRequest instanceof UpdateFunctionConfigRequest) {
//                     body = updateFunctionConfigRequest.body;
//                     func_urn = updateFunctionConfigRequest.func_urn;
//                 } else {
//                     body = updateFunctionConfigRequest['body'];
//                     func_urn = updateFunctionConfigRequest['func_urn'];
//                 }
//             }
//             if(body === null || body === undefined) {
//                 throw new RequiredError('body', 'Required parameter body')
//             }
//             localVarHeaderParameter['Content-Type'] = 'application/json';
//             options.data = body !== undefined ? body : {};
//             options.pathParams = { 'function_urn': func_urn}
//             options.headers = localVarHeaderParameter;
//             return options;
//         },
//         /**
//          * 此接口用于获取函数列表
//          */
//         getFunctionList(getFunctionListRequest?: GetFunctionListRequest) {
//             const options = {
//                 method: "GET",
//                 url: "/v2/{project_id}/fgs/functions",
//                 queryParams: {},
//                 pathParams: {},
//                 headers: {},
//                 data: {}
//             };
//             const localVarQueryParameter = {} as any;
//             let pkg;
//             if(getFunctionListRequest !== null && getFunctionListRequest !== undefined) {
//                 if (getFunctionListRequest instanceof GetFunctionListRequest) {
//                     pkg = getFunctionListRequest.package;
//                 }else{
//                     pkg = getFunctionListRequest['package'];
//                 }
//             }
//             if (pkg !== null && pkg !== undefined) {
//                 localVarQueryParameter['package'] = pkg;
//             }
//             options.queryParams = localVarQueryParameter;
//             return options;
//         },
//         /**
//          * 此接口用于删除函数
//          * @param deleteFunctionRequest
//          * @returns
//          */
//         deleteFunction(deleteFunctionRequest: DeleteFunctionRequest) {
//             const options = {
//                 method: "DELETE",
//                 url: "/v2/{project_id}/fgs/functions/{function_urn}",
//                 queryParams: {},
//                 pathParams: {},
//                 headers: {},
//                 data: {}
//             };
//             let func_urn: any;
//             if (deleteFunctionRequest !== null && deleteFunctionRequest !== undefined) {
//                 if (deleteFunctionRequest instanceof DeleteFunctionRequest) {
//                     func_urn = deleteFunctionRequest.func_urn;
//                 } else {
//                     func_urn = deleteFunctionRequest['func_urn'];
//                 }
//             }
//             if(func_urn === null || func_urn === undefined) {
//                 throw new RequiredError('function_urn', 'Required parameter function_urn')
//             }
//             options.pathParams = { 'function_urn': func_urn}
//             return options;
//         }
//     }
// }
// function newClient(client: HcClient): FunctionGraphClient {
//     return new FunctionGraphClient(client);
// }
// /**
//  *
//  * @export
//  * @class RequiredError
//  * @extends {Error}
//  */
//  export class RequiredError extends Error {
//     name: "RequiredError" = "RequiredError";
//     constructor(public field: string, msg?: string) {
//         super(msg);
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25HcmFwaENsaWVudCBjb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvZnVuY3Rpb25HcmFwaC9GdW5jdGlvbkdyYXBoQ2xpZW50IGNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEO0FBQ2xELDREQUE0RDtBQUM1RCx3REFBd0Q7QUFDeEQsdUNBQXVDO0FBRXZDLHlFQUF5RTtBQUN6RSwyRUFBMkU7QUFDM0UsMkVBQTJFO0FBQzNFLDZFQUE2RTtBQUM3RSx5RUFBeUU7QUFDekUsMkVBQTJFO0FBQzNFLHlFQUF5RTtBQUN6RSw2RkFBNkY7QUFDN0YscUZBQXFGO0FBQ3JGLHVGQUF1RjtBQUV2RixxQ0FBcUM7QUFDckMsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMseUVBQXlFO0FBQ3pFLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsMkNBQTJDO0FBQzNDLFFBQVE7QUFFUix1REFBdUQ7QUFDdkQsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixRQUFRO0FBRVIsdURBQXVEO0FBQ3ZELDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkIsUUFBUTtBQUVSLHNFQUFzRTtBQUN0RSwyQ0FBMkM7QUFDM0MsdUJBQXVCO0FBQ3ZCLFFBQVE7QUFFUix5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLFFBQVE7QUFFUixVQUFVO0FBQ1YsY0FBYztBQUNkLHVCQUF1QjtBQUN2Qiw0Q0FBNEM7QUFDNUMsaUNBQWlDO0FBQ2pDLFVBQVU7QUFDViw2R0FBNkc7QUFDN0csc0ZBQXNGO0FBQ3RGLDRDQUE0QztBQUM1QyxxREFBcUQ7QUFDckQsUUFBUTtBQUNSLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIscUNBQXFDO0FBQ3JDLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsOEdBQThHO0FBQzlHLGtGQUFrRjtBQUNsRiw4Q0FBOEM7QUFDOUMsd0RBQXdEO0FBQ3hE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