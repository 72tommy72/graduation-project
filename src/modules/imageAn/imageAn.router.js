import { Router } from "express";
import { detectAnemiaController } from "./imageAn.controller.js";
import multer from "multer";

const router = Router();
const upload = multer();
router.post("/", upload.single("image"), detectAnemiaController);

export default router;