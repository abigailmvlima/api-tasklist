import { Router } from "express";

import SessionControler from "./app/controllers/SessionControler";
import TaskController from "./app/controllers/TaskController";
import UserController from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.put("/users", authMiddleware, UserController.update);

routes.post("/sessions", SessionControler.store);
routes.post("/tasks", authMiddleware, TaskController.store);
routes.get("/tasks", authMiddleware, TaskController.index);
routes.put("/tasks/:task_id", authMiddleware, TaskController.update);
routes.delete("/tasks/:task_id", authMiddleware, TaskController.delete);

export default routes;
