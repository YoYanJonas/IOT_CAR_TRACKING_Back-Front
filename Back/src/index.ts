import express , {json} from "express";
import cors from "cors";
import { MyDataSource } from "./my-data-source";
import { routes } from "./routes";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();


MyDataSource.initialize().then(async () =>{
    const app = express();
    app.use(
        cors({
            origin:'http://localhost:3000',
            credentials:true
        })
    );

    app.use(cookieParser());
    app.use(json());


    app.use("/", routes)

    app.listen(8000, () =>{
        console.log("Listening to port 8000");
    });
});