import express from "express";
import {
  addEvent,
  attendevent,
  getallevents,
  getevent,
} from "../controllers/event.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", addEvent);
router.put("/:id", attendevent);
router.get("/:id", getevent);
router.get("/", getallevents);

export default router;
