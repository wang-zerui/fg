const LANGS = ['nodejs', 'python', 'java', 'golang', 'php', 'lua', 'dotnetcore', 'powershell'];
const getLang = (runtime) => {
  for (let i = 0; i < LANGS.length; i++) {
    if (runtime.indexOf(LANGS[i]) === 0) {
      return LANGS[i];
    }
  }
  return 'nodejs';
};
const CONFIGS = {
  compName: 'fg',
  compFullname: 'FunctionGraph',
  functionName: 'ServerlessDevsFunction',
  codeUri: './',
  timeout: 3,
  memorySize: 128,
  description(app) {
    return `This is a function in ${app} application`;
  },
  dashBoardUrl: "https://console.huaweicloud.com/functiongraph/#/serverless/dashboard"
};

module.exports = CONFIGS;
