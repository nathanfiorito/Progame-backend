import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Module from "./module.entity";
import Question from "./question.entity";

@Entity()
export default class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Module, module => module.category)
    module: Module[];
}