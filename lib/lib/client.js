"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FunctionGraphClient_1 = require("./component/functionGraph/FunctionGraphClient");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.setFgClient = function (credentials, projectId, endpoint) {
        this.fgClient = new FunctionGraphClient_1.FunctionGraphClient()
            .withAk(credentials.AccessKeyID)
            .withSk(credentials.SecretAccessKey)
            .withProjectId(projectId)
            .withEndpoint(endpoint);
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxRkFBb0Y7QUFFcEY7SUFBQTtJQWFBLENBQUM7SUFYUSxrQkFBVyxHQUFsQixVQUNFLFdBQXlCLEVBQ3pCLFNBQWlCLEVBQ2pCLFFBQWdCO1FBRWhCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSx5Q0FBbUIsRUFBRTthQUN0QyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQzthQUNuQyxhQUFhLENBQUMsU0FBUyxDQUFDO2FBQ3hCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFiRCxJQWFDIn0=