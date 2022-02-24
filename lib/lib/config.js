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
var RUNTIMES = {
    "Python2.7": "PYTHON2_7",
    "Python3.6": "PYTHON3_6",
    "Go1.8": "GO1_8",
    "Java8": "JAVA8",
    "Node.js6.10": "NODE_JS6_10",
    "Node.js8.10": "NODE_JS8_10",
    "Node.js10.16": "NODE_JS8_10",
    "Node.js12.13": "NODE_JS8_10",
    "C#(.NET Core 2.0)": "C__NET_CORE_2_0",
    "C#(.NET Core 2.1)": "C__NET_CORE_2_1",
    "C#(.NET Core 3.1)": "C__NET_CORE_3_1",
    "Custom": "CUSTOM",
    "PHP7.3": "PHP7_3"
};
var CONFIGS = {
    compName: "fg",
    compFullname: "FunctionGraph",
    functionName: "ServerlessDevsFunction",
    handler: "index.handler",
    codeUri: "./",
    timeout: 3,
    memorySize: 128,
    runtime: function (runtime, logger) {
        var CurrentlyNotSupportRuntimes = ['Nodejs12.13', 'Nodejs10.16'];
        if (runtime in CurrentlyNotSupportRuntimes) {
            logger.warning('Not supported runtime in this sdk, will be supported in the future. Using "Nodejs8.10" this time. https://github.com/huaweicloud/huaweicloud-sdk-nodejs-v3/issues/5');
        }
        if (RUNTIMES[runtime] === undefined) {
            logger.error("Unknown runtime.");
        }
        return RUNTIMES[runtime];
    },
    description: function (app) {
        if (app === void 0) { app = "serverless devs"; }
        return "This is a function in ".concat(app, " application");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUc7SUFDWixRQUFRO0lBQ1IsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1IsS0FBSztJQUNMLEtBQUs7SUFDTCxZQUFZO0lBQ1osWUFBWTtDQUNiLENBQUM7QUFDRixJQUFNLE9BQU8sR0FBRyxVQUFDLE9BQU87SUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0YsSUFBTSxRQUFRLEdBQUc7SUFDZixXQUFXLEVBQUcsV0FBVztJQUN6QixXQUFXLEVBQUcsV0FBVztJQUN6QixPQUFPLEVBQUcsT0FBTztJQUNqQixPQUFPLEVBQUcsT0FBTztJQUNqQixhQUFhLEVBQUcsYUFBYTtJQUM3QixhQUFhLEVBQUcsYUFBYTtJQUM3QixjQUFjLEVBQUcsYUFBYTtJQUM5QixjQUFjLEVBQUcsYUFBYTtJQUM5QixtQkFBbUIsRUFBRyxpQkFBaUI7SUFDdkMsbUJBQW1CLEVBQUcsaUJBQWlCO0lBQ3ZDLG1CQUFtQixFQUFHLGlCQUFpQjtJQUN2QyxRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUMsUUFBUTtDQUNsQixDQUFBO0FBQ0QsSUFBTSxPQUFPLEdBQUc7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFlBQVksRUFBRSxlQUFlO0lBQzdCLFlBQVksRUFBRSx3QkFBd0I7SUFDdEMsT0FBTyxFQUFFLGVBQWU7SUFDeEIsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsQ0FBQztJQUNWLFVBQVUsRUFBRSxHQUFHO0lBQ2YsT0FBTyxFQUFQLFVBQVEsT0FBZSxFQUFFLE1BQVc7UUFDbEMsSUFBTSwyQkFBMkIsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNuRSxJQUFHLE9BQU8sSUFBSSwyQkFBMkIsRUFBQztZQUN4QyxNQUFNLENBQUMsT0FBTyxDQUFDLHFLQUFxSyxDQUFDLENBQUM7U0FDdkw7UUFDRCxJQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLEVBQUM7WUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBRWxDO1FBQ0QsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLEdBQStCO1FBQS9CLG9CQUFBLEVBQUEsdUJBQStCO1FBQ3pDLE9BQU8sZ0NBQXlCLEdBQUcsaUJBQWMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUUsU0FBUztJQUNkLFlBQVksRUFDVixzRUFBc0U7SUFDeEUsU0FBUyxFQUFFO1FBQ1QsWUFBWSxFQUFFLG9EQUFvRDtRQUNsRSxZQUFZLEVBQUUsb0RBQW9EO1FBQ2xFLFlBQVksRUFBRSxvREFBb0Q7UUFDbEUsV0FBVyxFQUFFLG1EQUFtRDtRQUNoRSxXQUFXLEVBQUUsbURBQW1EO1FBQ2hFLFlBQVksRUFBRSxvREFBb0Q7UUFDbEUsYUFBYSxFQUFFLHFEQUFxRDtRQUNwRSxhQUFhLEVBQUUscURBQXFEO1FBQ3BFLFlBQVksRUFBRSxvREFBb0Q7UUFDbEUsZ0JBQWdCLEVBQUUsd0RBQXdEO1FBQzFFLGdCQUFnQixFQUFFLHdEQUF3RDtRQUMxRSxnQkFBZ0IsRUFBRSx1REFBdUQ7S0FDMUU7Q0FDRixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMifQ==