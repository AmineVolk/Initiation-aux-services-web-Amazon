var request = require("supertest");
var expect = require("chai").expect;
var host = process.env.HOST || "http://localhost:3000";

describe("Test create user", () => {
  const userToAdd = {
    id: "1",
    name: "Amine",
    pseudo: "Volk"
  };

  it("Should create user", done => {
    request(`${host}`)
      .post("/user")
      .send(userToAdd)
      .expect(200)
      .expect(res => {
        expect(res.body).deep.eq({
          message: "user added successfuly",
          user: userToAdd
        });
      })
      .end(done);
  });
});