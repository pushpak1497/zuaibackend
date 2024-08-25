import { Router } from "express";
import { isAuthenticatedUser } from "../middlewares/authMiddleware.js";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";

const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

export default router;
