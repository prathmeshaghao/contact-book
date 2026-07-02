import bcrypt from "bcrypt";
import db from "../config/db";
import { generateToken } from "../utils/jwt";

export const registerUser = async (username: string, password: string) => {
  const existingUser = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username);

  if (existingUser) {
    throw new Error("Username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = db
    .prepare(
      `
            INSERT INTO users (username, password)
            VALUES (?, ?)
        `,
    )
    .run(username, hashedPassword);

  const token = generateToken(Number(result.lastInsertRowid), username);

  return {
    id: result.lastInsertRowid,
    username,
    token,
  };
};

export const loginUser = async (username: string, password: string) => {
  const user: any = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user.id, user.username);

  return {
    id: user.id,
    username: user.username,
    token,
  };
};
