import { RequestHandler } from "express";
import { MyDataSource } from "../my-data-source";
import { User } from "../entity/user.entity";
import { verify } from "jsonwebtoken";

export const UserAuthMiddleware: RequestHandler =async (req, res, next)=>{
    try{
        const user_jwt = req.cookies["user_jwt"];

        const payload: any = verify(user_jwt, process.env.SECRET_KEY)

        if(!payload){
            return res
                .status(401)
                .send({message: "You could not get an authentication."})
        }

        const user = await MyDataSource.getRepository(User).findOne({
            where:{uid: payload.id},
            select:{
                uid: true,
                name: true,
                password: true,
                phone: true,
                joinedAt: true,
                HomeLatitude: true,
                HomeLongitude: true,
                gadgets: true,
            },
        });
        req["user"]=user;

        next();
    }
    catch(e){
        return res
        .status(401)
        .send({message:"You could not get an authentication."})
    }
};