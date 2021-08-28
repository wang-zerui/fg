import { ICredentials } from './interface/profile';
export default class Client {
    static cfcClient: any;
    static setCfcClient(credentials: ICredentials, endpoint?: string): void;
}
