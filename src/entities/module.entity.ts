import { Column, Entity, IsNull, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Question from "./question.entity";

@Entity()
export default class Module{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column({type:'text', nullable: true})
    supportingText: string;

    @Column({type: 'varchar', nullable: true})
    image: string;
    
    @Column({type: 'varchar', nullable: true})
    resume: string;
    
    @OneToMany(type => Question, question => question.module)
    questions: Promise<Question[]>;

    
}