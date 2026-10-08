import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";

import {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", requireAuth, getContacts);
router.get("/:id", requireAuth, getContactById);

router.post("/", createContact);

router.put("/:id", requireAuth, updateContact);
router.delete("/:id", requireAuth, deleteContact);

export default router;