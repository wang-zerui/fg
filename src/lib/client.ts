import { ICredentials } from "./interface/profile";
import { FunctionGraphClient } from "@huaweicloud/huaweicloud-sdk-functiongraph/v2/FunctionGraphClient";
import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";

export default class Client {
  static fgClient: any;
  static setFgClient(credentials: ICredentials, projectId: string, endpoint: string) {
    this.fgClient = FunctionGraphClient.newBuilder()
      .withCredential(new BasicCredentials()
          .withAk(credentials.AccessKeyID)
          .withSk(credentials.SecretAccessKey)
          .withProjectId(projectId))
      .withEndpoint(endpoint)
      .build();
  }
}
