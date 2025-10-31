import type { ContactRequestBody } from "~~/shared/types/contact";

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactRequestBody>(event);
  console.log("Received contact form submission:", body);
  // wait for 1 second to simulate processing
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true };
});
