import request from "supertest";
import app from "../app";

describe("Contacts API", () => {
  let token = "";

  beforeAll(async () => {
    await request(app).post("/auth/register").send({
      username: "contactuser",
      password: "123456",
    });

    const login = await request(app).post("/auth/login").send({
      username: "contactuser",
      password: "123456",
    });

    token = login.body.data.token;
  });

  it("should reject unauthenticated contact creation", async () => {
    const response = await request(app).post("/contacts").send({
      firstName: "John",
    });

    expect(response.status).toBe(401);
  });

  it("should create a contact", async () => {
    const response = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${token}`)
      .send({
        firstName: "John",
        lastName: "Doe",
        email: "john@test.com",
        phone: "9999999999",
        company: "Google",
        notes: "Developer",
        tags: "Client",
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
  });

  it("should get all contacts", async () => {
    const response = await request(app).get("/contacts");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should get contact by id", async () => {
    const response = await request(app).get("/contacts/1");

    expect(response.status).toBe(200);
  });
});
