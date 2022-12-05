/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */

const helper = require('/opt/nodejs/index');

exports.lambdaHandler = async (event, context) => {
    // API Gateway Invocation
    console.log("#############")
    console.log(JSON.stringify(`httpMethod: ${event.httpMethod}, authorizer: ${JSON.stringify(event.requestContext.authorizer)}`));
    console.log(`body: ${event.body}`);
    console.log("#############")
    // const method = event.requestContext.http.method;
    // const path = event.requestContext.http.path;
    // console.log(method, path);

    // get all items from the table (only first 1MB data, you can use `LastEvaluatedKey` to get the rest of data)
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property
    // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html

    let response = {
        statusCode: 200,
        body: event.body ? event.body : `Hello world ${helper.randomString(10)}.`
    };
    return response;
}
