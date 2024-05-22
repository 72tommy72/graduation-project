import { Router } from "express";
import { isAuthenticated } from "../../middleware/authentication.middleware.js";
import { isValid } from "../../middleware/validation.middleware.js";
import { userInfo } from "./userInfo.controller.js";
import { userInfoSchema } from "./userInfo.validation.js";

const router = Router()
//userInfo
router.post(
    "/userInfo",
    isAuthenticated,
    isValid(userInfoSchema),
    userInfo);
export default router;

