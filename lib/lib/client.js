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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxRkFBb0Y7QUFFcEY7SUFBQTtJQVNBLENBQUM7SUFQUSxrQkFBVyxHQUFsQixVQUFtQixXQUF5QixFQUFFLFNBQWlCLEVBQUUsUUFBZ0I7UUFDL0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHlDQUFtQixFQUFFO2FBQ3BDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO2FBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO2FBQ25DLGFBQWEsQ0FBQyxTQUFTLENBQUM7YUFDeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQVRELElBU0MifQ==