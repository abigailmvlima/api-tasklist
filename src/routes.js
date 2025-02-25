import { Router } from "express";

import SessionControler from "./app/controllers/SessionControler";
import UserController from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.put("/users", authMiddleware, UserController.update);

routes.post("/sessions", SessionControler.store);

export default routes;
