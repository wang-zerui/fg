declare const LANGS: string[];
declare const getLang: (runtime: any) => string;
declare const CONFIGS: {
  compName: string;
  compFullname: string;
  functionName: string;
  codeUri: string;
  timeout: number;
  memorySize: number;
  description(app: any): string;
  endpoints: string[];
  defaultEndpoint: string;
  protocols: string[];
  defaultProtocol: string;
  triggerSourceTypes: string[];
};
