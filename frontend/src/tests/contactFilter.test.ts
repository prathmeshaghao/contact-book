import { describe, it, expect } from "vitest";

describe("Contact Filter", () => {
  const contacts = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      company: "Google",
    },
    {
      firstName: "Alex",
      lastName: "Johnson",
      email: "alex@gmail.com",
      company: "Amazon",
    },
  ];

  it("filters contacts by search term", () => {
    const result = contacts.filter((contact) =>
      contact.firstName.toLowerCase().includes("john"),
    );

    expect(result).toHaveLength(1);

    expect(result[0].firstName).toBe("John");
  });
});
