const TABLENAME = process.env.DYNAMODB_TABLE || "ExampleTable";
const { makeDynamodbClient } = require("./clientDynamodb");
const clientDynamoDB = makeDynamodbClient();

const getUser = id => {
  var params_for_search = {
    TableName: TABLENAME,
    KeyConditionExpression: "#id = :idValue",
    ExpressionAttributeNames: {
      "#id": "id"
    },
    ExpressionAttributeValues: {
      ":idValue": id
    }
  };

  return new Promise((resolve, reject) => {
    clientDynamoDB.query(params_for_search, function(err, data) {
      if (err) {
        reject(err);
      } else {
        if (data.Items.length == 0) {
          resolve(data.Items);
        } else {
          resolve(data.Items);
        }
      }
    });
  });
};

const addUser = user => {
  var profileToAdd = {
    TableName: TABLENAME,
    Item: user
  };

  return new Promise((resolve, reject) => {
    clientDynamoDB.put(profileToAdd, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports = { getUser, addUser };