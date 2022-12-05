/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */
exports.handler = async (event, context, callback) => {
    console.log("##### EVENTS ########");
    console.log(event, JSON.stringify(event));
    console.log("##### EVENTS END ########")


    console.log("###### CONTEXT #######");
    console.log(context, JSON.stringify(context));
    console.log("###### CONTEXT END #######");


    callback(null, generatePolicy('user', 'Allow', event.methodArn));
    // callback(null, generatePolicy('user', 'Deny', event.methodArn));
    // callback("Unauthorized");   // Return a 401 Unauthorized response
    // break;
}


// Help function to generate an IAM policy
const generatePolicy = function (principalId, effect, resource) {
    console.log(`I am at ${effect}`);
    const authResponse = {};

    authResponse.principalId = principalId;
    if (effect && resource) {
        const policyDocument = {};
        policyDocument.Version = '2012-10-17';
        policyDocument.Statement = [];
        const statementOne = {};
        statementOne.Action = 'execute-api:Invoke';
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }

    // Optional output with custom properties of the String, Number or Boolean type.
    authResponse.context = {
        "name": "anuj",
        "numberKey": 123,
        "booleanKey": true
    };
    return authResponse;
}