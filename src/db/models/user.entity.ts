import { Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity()
@Unique(['username'])
export default class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    experience: number

    @Column()
    salt: string

    async validatePassword(password: string): Promise<Boolean>{
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}