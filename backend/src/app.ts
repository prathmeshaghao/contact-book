import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middleware/error.middleware";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Contacts Book Backend Running 🚀",
  });
});

app.use("/auth", authRoutes);
app.use("/contacts", contactRoutes);
export default app;
app.use(errorHandler);
