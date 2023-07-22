import { RequestHandler } from "express";

import { Gadget } from "../../entity/gadget.entity";
import { MyDataSource } from "../../my-data-source";
import { User } from "../../entity/user.entity";


export const GadgetList : RequestHandler= async(req, res)=>{
    try{
        if (req){
            const missUser= req["user"]
            const user = await MyDataSource.getRepository(User).findOne({where:{uid:missUser.uid},relations:{gadgets:true}})
            
            if(user){
                res.send(user.gadgets)}
        };}
    catch(e){
        res.send(e);
    };
}

export const AllGadgets : RequestHandler = async (req, res)=>{
try{
    if(req){
        const user = req["user"]
        if(user.uid == -1){
            const allGadgets= await MyDataSource.getRepository(Gadget).find()

            res.status(200).send(allGadgets)       
        }else{
            res.send({message:"You are not admin sir."})
        }
    }
}catch(e){res.send(e)};
}


export const AddGadget: RequestHandler = async(req, res)=>{
    try{
        const user = req["user"];
        delete req["user"];
        const body = req.body;

        if(user && body.code){
            const gadget= await MyDataSource.getRepository(Gadget).save({
                ...body,
                user:user
            });
            
            res.send(gadget);
        }

    }catch(e){res.send(e)}
}


export const RemoveGadget: RequestHandler = async(req, res)=>{
    try{
        const body = req.body;
        await MyDataSource.getRepository(Gadget).delete(body.gid);

        res.send({message:"Gadget got removed succesfully."})
    }catch(e){res.send(e)}
}
