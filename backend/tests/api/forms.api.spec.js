
const { test, expect } = require("@playwright/test");

const BASE_URL = "http://localhost:5000";

test.describe("AVODAH & KHEN API tests", () => {
  test("Backend health endpoint returns 200", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.message).toBe("AVODAH & KHEN Backend is running");
  });

  test("Database health endpoint responds successfully", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/test-db`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.message).toBe("Neon PostgreSQL connected successfully");
  });

  test("Contact API rejects missing fields", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/contact`, {
      data: {},
    });

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.success).toBe(false);
  });

  test("Contact API rejects invalid email", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/contact`, {
      data: {
        name: "API Test",
        email: "invalid-email",
        city: "Mumbai",
      },
    });

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.success).toBe(false);
  });

  test("Careers API rejects missing fields", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/careers`, {
      data: {},
    });

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.success).toBe(false);
  });

  test("Careers API rejects invalid email", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/careers`, {
      data: {
        firstName: "API",
        lastName: "Test",
        phone: "9876543210",
        email: "invalid-email",
        department: "Technology",
        jobTitle: "Developer",
        message: "Automated validation test",
      },
    });

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.success).toBe(false);
  });

  test("Careers API rejects invalid phone number", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/careers`, {
      data: {
        firstName: "API",
        lastName: "Test",
        phone: "abc",
        email: "api.test@example.com",
        department: "Technology",
        jobTitle: "Developer",
        message: "Automated validation test",
      },
    });

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.success).toBe(false);
  });
});
