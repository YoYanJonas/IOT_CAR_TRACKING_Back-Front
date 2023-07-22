import { Router } from "express";

import { routes as userRoutes } from "./user.router";
import {routes as gadgetRoutes} from "./gadget.router";




export const routes = Router();

routes.use("/api/user", userRoutes)
routes.use("/api/gadget", gadgetRoutes)
