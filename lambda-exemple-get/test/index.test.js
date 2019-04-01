var request = require("supertest");
var expect = require("chai").expect;
var host = process.env.HOST || "http://localhost:3000";

describe("Test get user", () => {
  const userToFetch = {
    id: "1",
    name: "Amine",
    pseudo: "Volk"
  };
  it("Should get user", done => {
    request(`${host}`)
      .get("/user/1")
      .expect(200)
      .expect(res => {
        console.log(`**** res ${JSON.stringify(res.body[0])}`);
        expect(res.body[0]).deep.eq(userToFetch);
      })
      .end(done);
  });
});