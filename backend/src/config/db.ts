import Database from "better-sqlite3";
import dotenv from "dotenv";

dotenv.config();

const db = new Database(process.env.DATABASE_URL || "contacts.db");

export default db;
