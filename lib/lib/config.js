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
        return "This is a function in " + app + " application";
    },
    endpoints: ['cfc.bj.baidubce.com', 'cfc.gz.baidubce.com', 'cfc.su.baidubce.com'],
    defaultEndpoint: 'cfc.bj.baidubce.com',
    protocols: ['http', 'https'],
    defaultProtocol: 'https',
    triggerSourceTypes: ['dueros', 'bos/your-bucket-name', 'duedge', 'cfc-http-trigger/v1/CFCAPI', 'cfc-crontab-trigger/v1/'],
};
module.exports = CONFIGS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDL0YsSUFBTSxPQUFPLEdBQUcsVUFBQyxPQUFPO0lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakI7S0FDRjtJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLElBQU0sT0FBTyxHQUFHO0lBQ2QsUUFBUSxFQUFFLEtBQUs7SUFDZixZQUFZLEVBQUUsS0FBSztJQUNuQixZQUFZLEVBQUUsd0JBQXdCO0lBQ3RDLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLENBQUM7SUFDVixVQUFVLEVBQUUsR0FBRztJQUNmLFdBQVcsWUFBQyxHQUFHO1FBQ2IsT0FBTywyQkFBeUIsR0FBRyxpQkFBYyxDQUFDO0lBQ3BELENBQUM7SUFDRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQztJQUNoRixlQUFlLEVBQUUscUJBQXFCO0lBQ3RDLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7SUFDNUIsZUFBZSxFQUFFLE9BQU87SUFDeEIsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO0NBQzFILENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyJ9