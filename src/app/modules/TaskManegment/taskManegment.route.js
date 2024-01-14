import express from "express";
import { TaskManegmentController } from "./taskManegment.controller.js";

const router = express.Router();

router.patch("/updateTask", TaskManegmentController.updateTask);
router.get("/getAllTask", TaskManegmentController.getAllTask);
router.post("/addTask", TaskManegmentController.addTask);
router.patch("/addNewSubTask", TaskManegmentController.addNewSubTask);
export const TaskManegmentRoutes = router;
