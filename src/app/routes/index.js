import express from "express";
import { TaskManegmentRoutes } from "../modules/TaskManegment/taskManegment.route.js";

const router = express.Router();

const routes = [
    {
        path: "/taskManegment",
        router: TaskManegmentRoutes,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.router);
});

export default router;
