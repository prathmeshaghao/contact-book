import db from "../config/db";
import { Contact } from "../models/contact.model";

export const createContact = (contact: Contact) => {
  const existing = db
    .prepare("SELECT * FROM contacts WHERE email = ?")
    .get(contact.email);

  if (existing) {
    throw new Error("Email already exists");
  }

  const result = db
    .prepare(
      `
        INSERT INTO contacts
        (
            firstName,
            lastName,
            email,
            phone,
            company,
            notes,
            tags
        )
        VALUES
        (
            ?,?,?,?,?,?,?
        )
    `,
    )
    .run(
      contact.firstName,
      contact.lastName,
      contact.email,
      contact.phone,
      contact.company,
      contact.notes,
      contact.tags,
    );

  return {
    id: result.lastInsertRowid,
    ...contact,
  };
};

export const getContacts = (search?: string, sort?: string, tag?: string) => {
  let query = `
        SELECT *
        FROM contacts
        WHERE 1=1
    `;

  const params: any[] = [];

  if (search) {
    query += `
            AND (
                firstName LIKE ?
                OR lastName LIKE ?
                OR email LIKE ?
                OR company LIKE ?
            )
        `;

    const value = `%${search}%`;

    params.push(value, value, value, value);
  }

  if (tag) {
    query += `
            AND tags LIKE ?
        `;

    params.push(`%${tag}%`);
  }

  if (sort === "name") {
    query += `
            ORDER BY firstName ASC
        `;
  } else {
    query += `
            ORDER BY createdAt DESC
        `;
  }

  return db.prepare(query).all(...params);
};
export const getContactById = (id: number) => {
  const contact = db
    .prepare(
      `
            SELECT *
            FROM contacts
            WHERE id = ?
        `,
    )
    .get(id);

  if (!contact) {
    throw new Error("Contact not found");
  }

  return contact;
};
export const updateContact = (id: number, contact: Contact) => {
  const existing = db.prepare("SELECT * FROM contacts WHERE id = ?").get(id);

  if (!existing) {
    throw new Error("Contact not found");
  }

  db.prepare(
    `
        UPDATE contacts
        SET
            firstName=?,
            lastName=?,
            email=?,
            phone=?,
            company=?,
            notes=?,
            tags=?,
            updatedAt=CURRENT_TIMESTAMP
        WHERE id=?
    `,
  ).run(
    contact.firstName,
    contact.lastName,
    contact.email,
    contact.phone,
    contact.company,
    contact.notes,
    contact.tags,
    id,
  );

  return getContactById(id);
};
export const deleteContact = (id: number) => {
  const existing = db.prepare("SELECT * FROM contacts WHERE id=?").get(id);

  if (!existing) {
    throw new Error("Contact not found");
  }

  db.prepare(
    `
        DELETE FROM contacts
        WHERE id=?
    `,
  ).run(id);

  return true;
};
