
jest.mock("../db", () => ({
  query: jest.fn(),
}));

const request = require("supertest");
const app = require("../app");
const pool = require("../db");

describe("Contact API integration tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns 201 when contact is submitted successfully", async () => {
    const savedContact = {
      id: 100,
      name: "Test User",
      work_email: "test@example.com",
      city: "Mumbai",
      created_at: "2026-10-19T10:00:00.000Z",
    };

    pool.query.mockResolvedValueOnce({
      rows: [savedContact],
    });

    const response = await request(app)
      .post("/api/contact")
      .send({
        name: "Test User",
        email: "test@example.com",
        city: "Mumbai",
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual(savedContact);

    expect(pool.query).toHaveBeenCalledWith(
      expect.stringContaining("INSERT INTO contacts"),
      ["Test User", "test@example.com", "Mumbai"]
    );
  });

  test("returns 400 when contact fields are missing", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send({
        name: "Test User",
        email: "test@example.com",
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      success: false,
      message:
        "Name, work email and city are required and must be valid text.",
    });

    expect(pool.query).not.toHaveBeenCalled();
  });

  test("rejects an invalid email without querying the database", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send({
        name: "Test User",
        email: "invalid-email",
        city: "Mumbai",
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe(
      "Please provide a valid work email address."
    );

    expect(pool.query).not.toHaveBeenCalled();
  });

  test("rejects a whitespace-only name without querying the database", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send({
        name: "   ",
        email: "test@example.com",
        city: "Mumbai",
      });

    expect(response.statusCode).toBe(400);
    expect(pool.query).not.toHaveBeenCalled();
  });

  test("rejects a numeric name without querying the database", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send({
        name: 123,
        email: "test@example.com",
        city: "Mumbai",
      });

    expect(response.statusCode).toBe(400);
    expect(pool.query).not.toHaveBeenCalled();
  });

  test("rejects an object email without querying the database", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send({
        name: "Test User",
        email: {
          value: "test@example.com",
        },
        city: "Mumbai",
      });

    expect(response.statusCode).toBe(400);
    expect(pool.query).not.toHaveBeenCalled();
  });

  test("returns 500 when contact database query fails", async () => {
    pool.query.mockRejectedValueOnce(
      new Error("Simulated database failure")
    );

    const response = await request(app)
      .post("/api/contact")
      .send({
        name: "Test User",
        email: "test@example.com",
        city: "Mumbai",
      });

    expect(response.statusCode).toBe(500);
    expect(response.body.success).toBe(false);
    expect(pool.query).toHaveBeenCalledTimes(1);
  });
});

describe("Careers API integration tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns 201 when career application is submitted successfully", async () => {
    const savedApplication = {
      id: 100,
      first_name: "Test",
      last_name: "Candidate",
      contact_number: "9999999999",
      email_address: "test@example.com",
      department: "Technology",
      job_applied_for: "Software Tester",
      message: "Testing application",
      created_at: "2026-10-19T10:00:00.000Z",
    };

    pool.query.mockResolvedValueOnce({
      rows: [savedApplication],
    });

    const response = await request(app)
      .post("/api/careers")
      .send({
        firstName: "Test",
        lastName: "Candidate",
        phone: "9999999999",
        email: "test@example.com",
        department: "Technology",
        jobTitle: "Software Tester",
        message: "Testing application",
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual(savedApplication);

    expect(pool.query).toHaveBeenCalledWith(
      expect.stringContaining("INSERT INTO career_applications"),
      [
        "Test",
        "Candidate",
        "9999999999",
        "test@example.com",
        "Technology",
        "Software Tester",
        "Testing application",
      ]
    );
  });

  test.each([
    ["invalid email", { email: "invalid-email" }],
    ["invalid phone", { phone: "abcdefghij" }],
    ["whitespace-only first name", { firstName: "   " }],
    ["numeric first name", { firstName: 123 }],
    ["object email", { email: { value: "test@example.com" } }],
  ])(
    "rejects %s without querying the database",
    async (_case, overrides) => {
      const response = await request(app)
        .post("/api/careers")
        .send({
          firstName: "Test",
          lastName: "Candidate",
          phone: "9999999999",
          email: "test@example.com",
          department: "Technology",
          jobTitle: "Software Tester",
          message: "Testing application",
          ...overrides,
        });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
      expect(pool.query).not.toHaveBeenCalled();
    }
  );

  test("returns 500 when careers database query fails", async () => {
    pool.query.mockRejectedValueOnce(
      new Error("Simulated database failure")
    );

    const response = await request(app)
      .post("/api/careers")
      .send({
        firstName: "Test",
        lastName: "Candidate",
        phone: "9999999999",
        email: "test@example.com",
        department: "Technology",
        jobTitle: "Software Tester",
        message: "Testing application",
      });

    expect(response.statusCode).toBe(500);
    expect(response.body.success).toBe(false);
    expect(pool.query).toHaveBeenCalledTimes(1);
  });
});
