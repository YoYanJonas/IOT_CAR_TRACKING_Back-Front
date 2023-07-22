import { Router } from "express";
import { AllGadgets, GadgetList } from "../controller/user/gadget.controller";
import { UserAuthMiddleware } from "../middlewares/auth.middleware";


export const routes = Router();

routes.get("/",UserAuthMiddleware, GadgetList)
routes.get("/all", UserAuthMiddleware, AllGadgets)