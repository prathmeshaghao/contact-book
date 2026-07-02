import request from "supertest";
import app from "../app";

describe("Authentication API", () => {
  const user = {
    username: "testuser",
    password: "123456",
  };

  it("should register a new user", async () => {
    const response = await request(app).post("/auth/register").send(user);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.username).toBe(user.username);
    expect(response.body.data.token).toBeDefined();
  });

  it("should login successfully", async () => {
    const response = await request(app).post("/auth/login").send(user);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.token).toBeDefined();
  });
});
