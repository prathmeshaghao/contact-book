import { Router } from "express";

import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/contact.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", authenticate, update);
router.post("/", authenticate, create);
router.delete("/:id", authenticate, remove);
export default router;
