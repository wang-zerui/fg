export interface ICredentials {
    AccessKeyID: string;
    SecretAccessKey: string;
}
export interface ServerlessProfile {
    project: {
        component?: string;
        access: string;
        projectName: string;
    };
    appName: string;
}
export declare function mark(source: string): string;
