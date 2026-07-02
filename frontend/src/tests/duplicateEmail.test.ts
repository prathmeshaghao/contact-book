import { describe, it, expect } from "vitest";

describe("Duplicate Email Check", () => {
  const contacts = [
    {
      email: "john@gmail.com",
    },
    {
      email: "alex@gmail.com",
    },
  ];

  it("detects duplicate email", () => {
    const emailExists = contacts.some(
      (contact) => contact.email.toLowerCase() === "john@gmail.com",
    );

    expect(emailExists).toBe(true);
  });

  it("allows unique email", () => {
    const emailExists = contacts.some(
      (contact) => contact.email.toLowerCase() === "new@gmail.com",
    );

    expect(emailExists).toBe(false);
  });
});
