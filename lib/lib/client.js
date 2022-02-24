"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FunctionGraphClient_1 = require("@huaweicloud/huaweicloud-sdk-functiongraph/v2/FunctionGraphClient");
var BasicCredentials_1 = require("@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.setFgClient = function (credentials, projectId, endpoint) {
        this.fgClient = FunctionGraphClient_1.FunctionGraphClient.newBuilder()
            .withCredential(new BasicCredentials_1.BasicCredentials()
            .withAk(credentials.AccessKeyID)
            .withSk(credentials.SecretAccessKey)
            .withProjectId(projectId))
            .withEndpoint(endpoint)
            .build();
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5R0FBd0c7QUFDeEcsNEZBQTJGO0FBRTNGO0lBQUE7SUFXQSxDQUFDO0lBVFEsa0JBQVcsR0FBbEIsVUFBbUIsV0FBeUIsRUFBRSxTQUFpQixFQUFFLFFBQWdCO1FBQy9FLElBQUksQ0FBQyxRQUFRLEdBQUcseUNBQW1CLENBQUMsVUFBVSxFQUFFO2FBQzdDLGNBQWMsQ0FBQyxJQUFJLG1DQUFnQixFQUFFO2FBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO2FBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO2FBQ25DLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM3QixZQUFZLENBQUMsUUFBUSxDQUFDO2FBQ3RCLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQyJ9