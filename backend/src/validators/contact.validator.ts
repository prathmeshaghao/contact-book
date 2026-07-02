import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1),

  lastName: z.string().min(1),

  email: z.string().email(),

  phone: z.string().min(10),

  company: z.string(),

  notes: z.string(),

  tags: z.string(),
});
