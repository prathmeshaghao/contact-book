import { describe, it, expect } from "vitest";

import { contactSchema } from "../utils/validation";

describe("Contact Validation", () => {
  it("fails when first name is empty", () => {
    const result = contactSchema.safeParse({
      firstName: "",
      lastName: "Doe",
      email: "john@gmail.com",
      phone: "9876543210",
      company: "Google",
      notes: "",
      tags: ["Client"],
    });

    expect(result.success).toBe(false);
  });

  it("passes valid data", () => {
    const result = contactSchema.safeParse({
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      phone: "9876543210",
      company: "Google",
      notes: "",
      tags: ["Client"],
    });

    expect(result.success).toBe(true);
  });
});
