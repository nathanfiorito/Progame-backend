import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Answer from "./answer.entity";
import Module from "./module.entity";
import {EQuestionType} from "../utils/enums/EQuestionType";

@Entity()
export default class Question{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    image:string;

    @ManyToOne(type => Module, module => module.questions)
    @JoinColumn()
    module: Promise<Module>;
    
    @OneToMany(type => Answer, answer => answer.question)
    answers: Promise<Answer[]>;
    
    @Column()
    correctAnswer: number;

    @Column()
    type: EQuestionType
}