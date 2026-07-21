import { Router } from "express";
import { generateResponse } from "../controllers/chat.controller";

const router = Router();

router.post("/", generateResponse);

export default router;
