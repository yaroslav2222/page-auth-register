import {Router} from "express"
import {loginUser, registerUser} from "./handlers";

export const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
