import {
    AuthenticatedUser,
    LoginUser,
    LogoutUser,
    registerUser,
    UpdateUserInfo,
    UserUpdatePassword,
} from "./../controller/user/auth.controller";
import { AddGadget, RemoveGadget } from "../controller/user/gadget.controller";


import { Router } from "express";
import { UserAuthMiddleware } from "../middlewares/auth.middleware";



export const routes = Router();

routes.post("/register", registerUser);
routes.post("/login", LoginUser);
routes.get("/", UserAuthMiddleware, AuthenticatedUser);
routes.post("/logout", UserAuthMiddleware, LogoutUser);
routes.patch("/updateinfo", UserAuthMiddleware, UpdateUserInfo);
routes.patch("/password", UserAuthMiddleware, UserUpdatePassword);

// gadgets 
routes.patch("/add/Device",UserAuthMiddleware ,AddGadget)
routes.delete("/remove/Device", UserAuthMiddleware ,RemoveGadget)