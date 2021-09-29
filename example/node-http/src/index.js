const https = require('https');
let CONTEXT = null;
exports.handler = function (event, context, callback) {
    CONTEXT = context;
    console.log('OPTIONS request, pass.');
    const result = {
        body: 'Hello world, hello serverless.',
        headers: {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type,Accept",
            "Access-Control-Allow-Methods": "GET"
        },
        statusCode: 200,
        isBase64Encoded: false
    };
    callback(null, result);
    return;
}