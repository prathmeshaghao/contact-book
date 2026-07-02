import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name cannot exceed 50 characters")
    .regex(/^[A-Za-z\s]+$/, "First name can contain only letters"),

  lastName: z
    .string()
    .trim()
    .max(50, "Last name cannot exceed 50 characters")
    .regex(/^[A-Za-z\s]*$/, "Last name can contain only letters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 numerical digits"),

  company: z
    .string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters"),

  notes: z.string().max(500, "Notes cannot exceed 500 characters"),

  tags: z.array(z.enum(["Client", "Vendor", "Personal"])),
});

export type ContactFormData = z.infer<typeof contactSchema>;
