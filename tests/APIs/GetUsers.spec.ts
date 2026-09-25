import { test, expect } from '@playwright/test';

//API Token: 06cf6fb76d2b2be14e31a27b66b8113e37eb5d600b8dc779c78834a4fcbde127

test('GET Users List - Basic Validations', async ({ request }) => {

  // 1. Send GET request
  const response = await request.get('https://gorest.co.in/public/v2/users');

  // 2. Validate status code
  expect(response.status()).toBe(200);

  // 3. Parse JSON
  const users = await response.json();

  // 4. Validate response is a list
  expect(Array.isArray(users)).toBeTruthy();

  // 5. Validate list is not empty
  expect(users.length).toBeGreaterThan(0);

  // 6. Validate required fields for first user
  const firstUser = users[0];

  expect(firstUser).toHaveProperty('id');
  expect(firstUser).toHaveProperty('name');
  expect(firstUser).toHaveProperty('email');
  expect(firstUser).toHaveProperty('gender');
  expect(firstUser).toHaveProperty('status');

  // 7. Validate data types
  expect(typeof firstUser.id).toBe('number');
  expect(typeof firstUser.name).toBe('string');
  expect(typeof firstUser.email).toBe('string');

  console.log("First user:", firstUser);
});
