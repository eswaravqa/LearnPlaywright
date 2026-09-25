import { test, expect } from "@playwright/test";
import { API_CONFIG } from "../../Utils/apiConfig";
import { API_HEADERS } from "../../Utils/Headers";
import { createUserPayload } from "../../Payloads/createUserPayload";

test("POST Create User - Validations", async ({ request }) => {
  const response = await request.post(`${API_CONFIG.BASE_URL}/users`, {
    headers: API_HEADERS,
    data: createUserPayload,
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body).toHaveProperty("id");
  expect(body.name).toBe(createUserPayload.name);
  expect(body.gender).toBe(createUserPayload.gender);
  expect(body.status).toBe(createUserPayload.status);

  console.log("Created User:", body);
});
