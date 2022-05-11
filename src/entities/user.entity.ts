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

    @Column('integer', {default: 0})
    experience: number

    @Column()
    salt: string

    @Column()
    isAdmin: boolean

    async validatePassword(password: string): Promise<Boolean>{
        const hash = await bcrypt.hash(password, this.salt);
        console.log(hash)
        return hash === this.password;
    }
}