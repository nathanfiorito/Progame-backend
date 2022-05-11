import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Module from "./module.entity";
import Question from "./question.entity";

@Entity()
export default class Answer{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(type => Question, question => question.answers)
    @JoinColumn()
    question: Promise<Question>;
}