const AWS = require("aws-sdk");
const awsRegion = process.env.AWS_REGION || "us-east-2";
var makeDynamodbClient;
var client;
var options = {
  region: awsRegion
};
if (process.env.TEST) {
  options.endpoint = "http://localhost:8000";
  client = new AWS.DynamoDB(options);
}

if (process.env.AWS_SAM_LOCAL) {
  options.endpoint = "http://dynamodb:8000";
}

makeDynamodbClient = () => {
  return new AWS.DynamoDB.DocumentClient(options);
};

module.exports = { makeDynamodbClient, client };