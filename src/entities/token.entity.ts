import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Token{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    hash: string;
}