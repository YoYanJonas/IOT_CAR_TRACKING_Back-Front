import {
    Column, 
    Entity, 
    ManyToOne, 
    PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Gadget{

    @PrimaryGeneratedColumn()
    gid: number;

    @Column({nullable:false})
    name: string;

    @Column({nullable: false})
    code: string;


    @Column({ type: "float" })
    latitude: number;

    @Column({ type: "float" })
    longitude: number;

    
    @ManyToOne(()=> User, (user)=> user.gadgets)
    user: User;


}