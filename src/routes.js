import { Router } from "express";
import SessionControler from "./app/controllers/SessionControler";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/sessions", SessionControler.store);

export default routes;
