import express from "express";
import {
  login,
  register,
  logout,
  getUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/getuser", getUser);

export default router;
