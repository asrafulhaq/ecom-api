import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

// create route

router.route("/login").post(login);

// export default router
export default router;
