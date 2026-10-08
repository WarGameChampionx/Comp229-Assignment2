import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";

import {
    getQualifications,
    getQualificationById,
    createQualification,
    updateQualification,
    deleteQualification
} from "../controllers/qualification.controller.js";

const router = express.Router();

router.get("/", getQualifications);
router.get("/:id", getQualificationById);

router.post("/", requireAuth, createQualification);
router.put("/:id", requireAuth, updateQualification);
router.delete("/:id", requireAuth, deleteQualification);

export default router;