import { ICredentials } from './interface/profile';
export default class Client {
    static fgClient: any;
    static setFgClient(credentials: ICredentials, projectId: string, endpoint: string): void;
}
