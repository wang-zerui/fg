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
  compName: 'cfc',
  compFullname: 'CFC',
  functionName: 'ServerlessDevsFunction',
  codeUri: './',
  timeout: 3,
  memorySize: 128,
  description: function (app) {
    return 'This is a function in ' + app + ' application';
  },
  endpoints: ['cfc.bj.baidubce.com', 'cfc.gz.baidubce.com', 'cfc.su.baidubce.com'],
  defaultEndpoint: 'cfc.bj.baidubce.com',
  protocols: ['http', 'https'],
  defaultProtocol: 'https',
  triggerSourceTypes: ['dueros', 'bos/your-bucket-name', 'duedge', 'cfc-http-trigger/v1/CFCAPI', 'cfc-crontab-trigger/v1/'],
};
module.exports = CONFIGS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQTtBQUM5RixJQUFNLE9BQU8sR0FBRyxVQUFDLE9BQU87SUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNoQjtLQUNGO0lBQ0QsT0FBTyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBO0FBQ0QsSUFBTSxPQUFPLEdBQUc7SUFDWixRQUFRLEVBQUUsS0FBSztJQUNmLFlBQVksRUFBRSxLQUFLO0lBQ25CLFlBQVksRUFBRSx3QkFBd0I7SUFDdEMsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsQ0FBQztJQUNWLFVBQVUsRUFBRSxHQUFHO0lBQ2YsV0FBVyxZQUFDLEdBQUc7UUFDYixPQUFPLDJCQUF5QixHQUFHLGlCQUFjLENBQUE7SUFDbkQsQ0FBQztJQUNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDO0lBQ2hGLGVBQWUsRUFBRSxxQkFBcUI7SUFDdEMsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUM1QixlQUFlLEVBQUUsT0FBTztJQUN4QixrQkFBa0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7Q0FDMUgsQ0FBQTtBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBIn0=
