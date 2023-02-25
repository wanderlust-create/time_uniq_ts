import { Router } from "express";
import event from "./event";

const app = Router();
event(app);

export default app;
