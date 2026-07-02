import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Contact } from "../types/contact";
import { seedContacts } from "../data/seedContacts";

interface ContactStore {
  contacts: Contact[];

  addContact: (contact: Contact) => void;

  updateContact: (id: string, updatedContact: Contact) => void;

  deleteContact: (id: string) => void;

  getContactById: (id: string) => Contact | undefined;

  emailExists: (email: string, excludeId?: string) => boolean;
}

export const useContactStore = create<ContactStore>()(
  persist(
    (set, get) => ({
      contacts: seedContacts,

      addContact: (contact) =>
        set((state) => ({
          contacts: [...state.contacts, contact],
        })),

      updateContact: (id, updatedContact) =>
        set((state) => ({
          contacts: state.contacts.map((contact) =>
            contact.id === id ? updatedContact : contact,
          ),
        })),

      deleteContact: (id) =>
        set((state) => ({
          contacts: state.contacts.filter((contact) => contact.id !== id),
        })),

      getContactById: (id) =>
        get().contacts.find((contact) => contact.id === id),

      emailExists: (email, excludeId) =>
        get().contacts.some(
          (contact) =>
            contact.email.toLowerCase() === email.toLowerCase() &&
            contact.id !== excludeId,
        ),
    }),
    {
      name: "contacts-storage",
    },
  ),
);
