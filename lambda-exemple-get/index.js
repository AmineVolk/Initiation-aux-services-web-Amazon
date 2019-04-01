const crud = require("./crud");
exports.lambdaHandler = (event, context, callback) => {
  const id = event.pathParameters.user;
  crud
    .getUser(id)
    .then(response => {
      console.log("response : "+response);
      sendResponse(200, response, callback);
    })
    .catch(err => {
      console.error(`get failed ${err}`);
    });
};

function sendResponse(statusCode, message, callback) {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
  callback(null, response);
}