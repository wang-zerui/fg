var LANGS = [
    "nodejs",
    "python",
    "java",
    "golang",
    "php",
    "lua",
    "dotnetcore",
    "powershell",
];
var getLang = function (runtime) {
    for (var i = 0; i < LANGS.length; i++) {
        if (runtime.indexOf(LANGS[i]) === 0) {
            return LANGS[i];
        }
    }
    return "nodejs";
};
var CONFIGS = {
    compName: "fg",
    compFullname: "FunctionGraph",
    functionName: "ServerlessDevsFunction",
    handler: "index.handler",
    codeUri: "./",
    timeout: 3,
    memorySize: 128,
    description: function (app) {
        if (app === void 0) { app = "serverless devs"; }
        return "This is a function in " + app + " application";
    },
    codeType: "zip",
    pkg: "default",
    dashBoardUrl: "https://console.huaweicloud.com/functiongraph/#/serverless/dashboard",
    endpoints: {
        "af-south-1": "https://functiongraph.af-south-1.myhuaweicloud.com",
        "cn-north-4": "https://functiongraph.cn-north-4.myhuaweicloud.com",
        "cn-north-1": "https://functiongraph.cn-north-1.myhuaweicloud.com",
        "cn-east-2": "https://functiongraph.cn-east-2.myhuaweicloud.com",
        "cn-east-3": "https://functiongraph.cn-east-3.myhuaweicloud.com",
        "cn-south-1": "https://functiongraph.cn-south-1.myhuaweicloud.com",
        "na-mexico-1": "https://functiongraph.na-mexico-1.myhuaweicloud.com",
        "sa-brazil-1": "https://functiongraph.sa-brazil-1.myhuaweicloud.com",
        "la-south-2": "https://functiongraph.la-south-2.myhuaweicloud.com",
        "ap-southeast-2": "https://functiongraph.ap-southeast-2.myhuaweicloud.com",
        "ap-southeast-1": "https://functiongraph.ap-southeast-1.myhuaweicloud.com",
        "ap-southeast-3": "https://functiongraph.ap-southeast-3.myhuaweiclou.com",
    },
};
module.exports = CONFIGS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUc7SUFDWixRQUFRO0lBQ1IsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1IsS0FBSztJQUNMLEtBQUs7SUFDTCxZQUFZO0lBQ1osWUFBWTtDQUNiLENBQUM7QUFDRixJQUFNLE9BQU8sR0FBRyxVQUFDLE9BQU87SUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0YsSUFBTSxPQUFPLEdBQUc7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFlBQVksRUFBRSxlQUFlO0lBQzdCLFlBQVksRUFBRSx3QkFBd0I7SUFDdEMsT0FBTyxFQUFFLGVBQWU7SUFDeEIsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsQ0FBQztJQUNWLFVBQVUsRUFBRSxHQUFHO0lBQ2YsV0FBVyxFQUFYLFVBQVksR0FBK0I7UUFBL0Isb0JBQUEsRUFBQSx1QkFBK0I7UUFDekMsT0FBTywyQkFBeUIsR0FBRyxpQkFBYyxDQUFDO0lBQ3BELENBQUM7SUFDRCxRQUFRLEVBQUUsS0FBSztJQUNmLEdBQUcsRUFBRSxTQUFTO0lBQ2QsWUFBWSxFQUNWLHNFQUFzRTtJQUN4RSxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsb0RBQW9EO1FBQ2xFLFlBQVksRUFBRSxvREFBb0Q7UUFDbEUsWUFBWSxFQUFFLG9EQUFvRDtRQUNsRSxXQUFXLEVBQUUsbURBQW1EO1FBQ2hFLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsWUFBWSxFQUFFLG9EQUFvRDtRQUNsRSxhQUFhLEVBQUUscURBQXFEO1FBQ3BFLGFBQWEsRUFBRSxxREFBcUQ7UUFDcEUsWUFBWSxFQUFFLG9EQUFvRDtRQUNsRSxnQkFBZ0IsRUFBRSx3REFBd0Q7UUFDMUUsZ0JBQWdCLEVBQUUsd0RBQXdEO1FBQzFFLGdCQUFnQixFQUFFLHVEQUF1RDtLQUMxRTtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyJ9