var LANGS = ['nodejs', 'python', 'java', 'golang', 'php', 'lua', 'dotnetcore', 'powershell'];
var getLang = function (runtime) {
    for (var i = 0; i < LANGS.length; i++) {
        if (runtime.indexOf(LANGS[i]) === 0) {
            return LANGS[i];
        }
    }
    return 'nodejs';
};
var CONFIGS = {
    compName: 'fg',
    compFullname: 'FunctionGraph',
    functionName: 'ServerlessDevsFunction',
    handler: 'index.handler',
    codeUri: './',
    timeout: 3,
    memorySize: 128,
    description: function (app) {
        if (app === void 0) { app = 'serverless devs'; }
        return "This is a function in " + app + " application";
    },
    codeType: 'zip',
    pkg: 'default',
    dashBoardUrl: 'https://console.huaweicloud.com/functiongraph/#/serverless/dashboard',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDL0YsSUFBTSxPQUFPLEdBQUcsVUFBQyxPQUFPO0lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakI7S0FDRjtJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLElBQU0sT0FBTyxHQUFHO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxZQUFZLEVBQUUsZUFBZTtJQUM3QixZQUFZLEVBQUUsd0JBQXdCO0lBQ3RDLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLENBQUM7SUFDVixVQUFVLEVBQUUsR0FBRztJQUNmLFdBQVcsRUFBWCxVQUFZLEdBQThCO1FBQTlCLG9CQUFBLEVBQUEsdUJBQThCO1FBQ3hDLE9BQU8sMkJBQXlCLEdBQUcsaUJBQWMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUUsU0FBUztJQUNkLFlBQVksRUFBRSxzRUFBc0U7SUFDcEYsU0FBUyxFQUFFO1FBQ1QsWUFBWSxFQUFDLG9EQUFvRDtRQUNqRSxZQUFZLEVBQUMsb0RBQW9EO1FBQ2pFLFlBQVksRUFBQyxvREFBb0Q7UUFDakUsV0FBVyxFQUFDLG1EQUFtRDtRQUMvRCxXQUFXLEVBQUMsbURBQW1EO1FBQy9ELFlBQVksRUFBQyxvREFBb0Q7UUFDakUsYUFBYSxFQUFDLHFEQUFxRDtRQUNuRSxhQUFhLEVBQUMscURBQXFEO1FBQ25FLFlBQVksRUFBQyxvREFBb0Q7UUFDakUsZ0JBQWdCLEVBQUMsd0RBQXdEO1FBQ3pFLGdCQUFnQixFQUFDLHdEQUF3RDtRQUN6RSxnQkFBZ0IsRUFBQyx1REFBdUQ7S0FDekU7Q0FFRixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMifQ==