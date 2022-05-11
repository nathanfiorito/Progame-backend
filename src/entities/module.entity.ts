import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Question from "./question.entity";

@Entity()
export default class Module{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    supportingText: string;

    @Column()
    image: string;
    
    @OneToMany(type => Question, question => question.module)
    questions: Promise<Question[]>;
    
}