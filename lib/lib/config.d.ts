declare const LANGS: string[];
declare const getLang: (runtime: any) => string;
declare const CONFIGS: {
    compName: string;
    compFullname: string;
    functionName: string;
    handler: string;
    codeUri: string;
    timeout: number;
    memorySize: number;
    description(app?: string): string;
    codeType: string;
    pkg: string;
    dashBoardUrl: string;
    endpoints: {
        "af-south-1": string;
        "cn-north-4": string;
        "cn-north-1": string;
        "cn-east-2": string;
        "cn-east-3": string;
        "cn-south-1": string;
        "na-mexico-1": string;
        "sa-brazil-1": string;
        "la-south-2": string;
        "ap-southeast-2": string;
        "ap-southeast-1": string;
        "ap-southeast-3": string;
    };
};
