const LANGS = [
  "nodejs",
  "python",
  "java",
  "golang",
  "php",
  "lua",
  "dotnetcore",
  "powershell",
];
const getLang = (runtime) => {
  for (let i = 0; i < LANGS.length; i++) {
    if (runtime.indexOf(LANGS[i]) === 0) {
      return LANGS[i];
    }
  }
  return "nodejs";
};
const RUNTIMES = {
  "Python2.7" : "PYTHON2_7",
  "Python3.6" : "PYTHON3_6",
  "Go1.8" : "GO1_8",
  "Java8" : "JAVA8",
  "Node.js6.10" : "NODE_JS6_10",
  "Node.js8.10" : "NODE_JS8_10",
  "Node.js10.16" : "NODE_JS8_10",
  "Node.js12.13" : "NODE_JS8_10",
  "C#(.NET Core 2.0)" : "C__NET_CORE_2_0",
  "C#(.NET Core 2.1)" : "C__NET_CORE_2_1",
  "C#(.NET Core 3.1)" : "C__NET_CORE_3_1",
  "Custom": "CUSTOM",
  "PHP7.3":"PHP7_3" 
}
const CONFIGS = {
  compName: "fg",
  compFullname: "FunctionGraph",
  functionName: "ServerlessDevsFunction",
  handler: "index.handler",
  codeUri: "./",
  timeout: 3,
  memorySize: 128,
  runtime(runtime: string, logger: any) {
    const CurrentlyNotSupportRuntimes = ['Nodejs12.13', 'Nodejs10.16'];
    if(runtime in CurrentlyNotSupportRuntimes){
      logger.warning('Not supported runtime in this sdk, will be supported in the future. Using "Nodejs8.10" this time. https://github.com/huaweicloud/huaweicloud-sdk-nodejs-v3/issues/5');
    }
    if(RUNTIMES[runtime] === undefined){
      logger.error("Unknown runtime.");
      
    }
    return RUNTIMES[runtime];
  },
  description(app: string = "serverless devs") {
    return `This is a function in ${app} application`;
  },
  codeType: "zip",
  pkg: "default",
  dashBoardUrl:
    "https://console.huaweicloud.com/functiongraph/#/serverless/dashboard",
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
