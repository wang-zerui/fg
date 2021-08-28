import { ICredentials } from './interface/profile';
import { FunctionGraphClient } from './component/functionGraph/FunctionGraphClient';

export default class Client {
  static fgClient: any;
  static setFgClient(credentials: ICredentials, projectId: string, endpoint: string) {
    this.fgClient = new FunctionGraphClient()
        .withAk(credentials.AccessKeyID)
        .withSk(credentials.SecretAccessKey)
        .withProjectId(projectId)
        .withEndpoint(endpoint)

  }
}
