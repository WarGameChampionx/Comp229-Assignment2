import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";

import {
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js";

import { signUp } from "../controllers/auth.controller.js";

const router = express.Router();

// Retrieve the authenticated user's record.
router.get("/", requireAuth, (req, res) => {
    res.json([req.user]);
});

// Create a user using the secure sign-up controller.
router.post("/", signUp);

// Access and manage only your own account.
const requireOwnership = (req, res, next) => {
    if (req.user._id.toString() !== req.params.id) {
        return res.status(403).json({
            message: "Access denied. You can only manage your own account."
        });
    }

    next();
};

router.get("/:id", requireAuth, requireOwnership, getUserById);
router.put("/:id", requireAuth, requireOwnership, updateUser);
router.delete("/:id", requireAuth, requireOwnership, deleteUser);

export default router;