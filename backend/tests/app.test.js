const request = require("supertest");

jest.mock("../db", () => ({
  query: jest.fn(),
}));

const pool = require("../db");
const app = require("../app");

describe("AVODAH & KHEN API", () => {
  test("GET / should return the backend health message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      message: "AVODAH & KHEN Backend is running",
    });
  });

  test("GET /api/test-db should return database connection success", async () => {
    const mockTime = "2026-10-20T10:00:00.000Z";

    pool.query.mockResolvedValueOnce({
      rows: [{ now: mockTime }],
    });

    const response = await request(app).get("/api/test-db");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: "Neon PostgreSQL connected successfully",
      time: mockTime,
    });
  });

  test("GET /api/test-db should return 500 when database query fails", async () => {
    pool.query.mockRejectedValueOnce(
      new Error("Simulated database failure")
    );

    const response = await request(app).get("/api/test-db");

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({
      success: false,
      message: "Database connection failed",
    });
  });

  test("POST /api/contact should reject missing fields", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send({
        name: "Test User",
        email: "test@example.com",
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      success: false,
      message: "Name, work email and city are required and must be valid text.",
    });
  });

  test("POST /api/careers should reject missing fields", async () => {
    const response = await request(app)
      .post("/api/careers")
      .send({
        firstName: "Test",
        lastName: "Candidate",
        phone: "9999999999",
        email: "test@example.com",
        department: "Technology",
        jobTitle: "Software Tester",
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      success: false,
      message: "All career application fields are required and must be valid text.",
    });
  });

  test("GET /unknown-route should return 404", async () => {
    const response = await request(app).get("/unknown-route");

    expect(response.statusCode).toBe(404);
  });

  test("POST /api/contact should reject malformed JSON", async () => {
    const response = await request(app)
      .post("/api/contact")
      .set("Content-Type", "application/json")
      .send('{"name":');

    expect(response.statusCode).toBe(400);
  });
});