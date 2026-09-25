const randomNumber = Math.floor(Math.random() * 10000);

export const createUserPayload = {
  name: `Siva Ramakrishna_${randomNumber}`,
  email: `SivaRama_${Date.now()}@example.com`,
  gender: "male",
  status: "active",
};
