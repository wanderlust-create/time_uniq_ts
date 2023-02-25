import { NextFunction, Request, Response, Router } from "express";
import EventController from "../../controllers/event";

const route = Router();
export default (app: Router) => {
  app.use("/events", route);

  route.get("/", EventController.listAllEvents);
}