const crud = require("./crud");

exports.lambdaHandler = (event, context, callback) => {
    console.log("****** loading lambdaPost");
    console.log("****** event.body : "+JSON.stringify(event.body));

  const user = JSON.parse(event.body);
  console.log(`the user to add : ${JSON.stringify(user)}`);

  crud
    .addUser(user)
    .then(response => {
      if (response) {
        sendResponse(
          200,
          { message: "user added successfuly", user: user },
          callback
        );
      }
    })
    .catch(err => {
      sendResponse(500, `err ${err} failed to add ${user}`, callback);
    });
};

function sendResponse(statusCode, message, callback) {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
  callback(null, response);
}