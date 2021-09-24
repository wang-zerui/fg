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
const CONFIGS = {
  compName: "fg",
  compFullname: "FunctionGraph",
  functionName: "ServerlessDevsFunction",
  handler: "index.handler",
  codeUri: "./",
  timeout: 3,
  memorySize: 128,
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
