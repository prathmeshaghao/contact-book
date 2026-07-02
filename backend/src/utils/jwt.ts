import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const generateToken = (userId: number, username: string) => {
  return jwt.sign(
    {
      id: userId,
      username,
    },
    JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
