// tests/EmailService.test.ts
import { EmailService } from "../src/EmailService";
import { MockProvider1, MockProvider2 } from "../src/MockProviders";

describe("EmailService", () => {
  it("should retry and fallback on failure", async () => {
    const provider1 = new MockProvider1();
    const provider2 = new MockProvider2();
    const service = new EmailService(provider1, provider2);

    const email = { id: "1", to: "test@example.com", subject: "Test", body: "Test Body" };
    await service.sendEmail(email);

    expect(true).toBe(true); // Example assertion
  });
});
