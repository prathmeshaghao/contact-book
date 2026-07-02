import { useMemo } from "react";
import type { Contact } from "../types/contact";

interface FilterOptions {
  searchTerm: string;
  selectedTags: string[];
  sortBy: string;
}

export const useContactFilter = (
  contacts: Contact[],
  options: FilterOptions,
) => {
  return useMemo(() => {
    let filtered = [...contacts];

    if (options.searchTerm) {
      const term = options.searchTerm.toLowerCase();

      filtered = filtered.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(term) ||
          contact.lastName.toLowerCase().includes(term) ||
          contact.email.toLowerCase().includes(term) ||
          contact.company.toLowerCase().includes(term),
      );
    }

    if (options.selectedTags.length) {
      filtered = filtered.filter((contact) =>
        contact.tags.some((tag) => options.selectedTags.includes(tag)),
      );
    }

    switch (options.sortBy) {
      case "nameAsc":
        filtered.sort((a, b) =>
          `${a.firstName} ${a.lastName}`.localeCompare(
            `${b.firstName} ${b.lastName}`,
          ),
        );
        break;

      case "nameDesc":
        filtered.sort((a, b) =>
          `${b.firstName} ${b.lastName}`.localeCompare(
            `${a.firstName} ${a.lastName}`,
          ),
        );
        break;

      case "date":
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
    }

    return filtered;
  }, [contacts, options]);
};
