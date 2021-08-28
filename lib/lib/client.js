"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CfcClient = require('@baiducloud/sdk').CfcClient;
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.setCfcClient = function (credentials, endpoint) {
        if (endpoint) {
            var cfcClient = new CfcClient({
                endpoint: endpoint,
                credentials: {
                    ak: credentials.AccessKeyID,
                    sk: credentials.SecretAccessKey,
                },
            });
            this.cfcClient = cfcClient;
        }
        else {
            var cfcClient = new CfcClient({
                credentials: {
                    ak: credentials.AccessKeyID,
                    sk: credentials.SecretAccessKey,
                },
            });
            this.cfcClient = cfcClient;
        }
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFFckQ7SUFBQTtJQXVCQSxDQUFDO0lBcEJRLG1CQUFZLEdBQW5CLFVBQW9CLFdBQXlCLEVBQUUsUUFBaUI7UUFDOUQsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFNLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQztnQkFDOUIsUUFBUSxVQUFBO2dCQUNSLFdBQVcsRUFBRTtvQkFDWCxFQUFFLEVBQUUsV0FBVyxDQUFDLFdBQVc7b0JBQzNCLEVBQUUsRUFBRSxXQUFXLENBQUMsZUFBZTtpQkFDaEM7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUM7Z0JBQzlCLFdBQVcsRUFBRTtvQkFDWCxFQUFFLEVBQUUsV0FBVyxDQUFDLFdBQVc7b0JBQzNCLEVBQUUsRUFBRSxXQUFXLENBQUMsZUFBZTtpQkFDaEM7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQyJ9