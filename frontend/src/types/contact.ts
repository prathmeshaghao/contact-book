export type ContactTag = "Client" | "Vendor" | "Personal";

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  notes: string;
  tags: ContactTag[];
  createdAt: string;
}
