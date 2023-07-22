import {
    Column, 
    CreateDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn
} from "typeorm";
import { Gadget } from "./gadget.entity";


@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    uid: number;

    @Column({nullable:false})
    name: string;

    @Column({select: false})
    password: string;

    @Column({type: "bigint"})
    phone: number;

    @CreateDateColumn({type: "datetime"})
    joinedAt: number;

    @Column({ type: "float" })
    HomeLatitude: number;

    @Column({ type: "float" })
    HomeLongitude: number;

    @OneToMany(()=> Gadget,(gadget)=>gadget.user )
    gadgets: Gadget[];
}