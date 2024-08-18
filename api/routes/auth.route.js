import { Router } from "express";
import {
  authCheck,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/ProtectRoute.js";
const router = Router();

router.post("/signup", register);
router.post("/logout", logout);
router.post("/login", login);

router.get("/authCheck", protectRoute, authCheck);
export default router;
