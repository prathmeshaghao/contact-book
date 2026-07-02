import dotenv from "dotenv";
import app from "./app";
import { createTables } from "./database/schema";
import { seedDatabase } from "./database/seed";

dotenv.config();

createTables();
seedDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
