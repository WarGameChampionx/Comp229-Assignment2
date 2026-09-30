import express from "express";

import {
    getEducations,
    getEducationById,
    createEducation,
    updateEducation,
    deleteEducation,
    deleteAllEducations
} from "../controllers/education.controller.js";

const router = express.Router();

router.get("/", getEducations);
router.get("/:id", getEducationById);
router.post("/", createEducation);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);
router.delete("/", deleteAllEducations);

export default router;