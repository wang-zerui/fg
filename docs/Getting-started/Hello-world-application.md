# 部署一个Hello World函数

在完成[工具安装](./installconfig.md.md)以及[密钥配置](./config.md)后，我们可以尝试来部署一个简单的 Serverless 应用。

```shell
# 步骤一 初始化，并进入到项目中
$ s init xinwuyun/start-fg-http-nodejs
# 步骤二 进入项目部署应用
$ s deploy
```

可以看到以下输出

```
Function

  func_urn        urn:fss:cn-north-4:0bcc05efb100f2a92f53c011f262dfa0:function:default:fg-http-nodejs:latest 
  func_name       fg-http-nodejs                                                                             
  domain_id       0bbeba4f1080f3560fe8c011e1ec4960                                                           
  namespace       0bcc05efb100f2a92f53c011f262dfa0                                                           
  project_name    cn-north-4                                                                                 
  package         default                                                                                    
  runtime         Node.js8.10                                                                                
  timeout         30                                                                                         
  handler         index.handler                                                                              
  memory_size     128                                                                                        
  cpu             300                                                                                        
  code_type       zip                                                                                        
  code_filename   fg-http-nodejs.zip                                                                         
  code_size       22                                                                                         
  version         latest                                                                                     
  More            https://console.huaweicloud.com/functiongraph/#/serverless/dashboard                       

Trigger

  TriggerId         a95e6b638597425391599e9022ea3c8b 
  TriggerTypeCode   APIG                             
  TriggerStatus     ACTIVE                           

Trigger event data

  api_id       331b55cb791c4ab6a1c5b0adc0b53014                                                             
  api_name     test                                                                                         
  auth         IAM                                                                                          
  env_id                                                                                                    
  env_name                                                                                                  
  group_id     51ed66ba137d43afaf24c8281114ff4a                                                             
  group_name   APIGroup_h30p                                                                                
  invoke_url   https://51ed66ba137d43afaf24c8281114ff4a.apig.cn-north-4.huaweicloudapis.com/fg-http-nodejss 
  match_mode   SWA                                                                                          
  name         test                                                                                         
  path         /fg-http-nodejss                                                                             
  protocol     HTTPS                                                                                        
  req_method   GET                                                                                          
  triggerid    a95e6b638597425391599e9022ea3c8b 
```