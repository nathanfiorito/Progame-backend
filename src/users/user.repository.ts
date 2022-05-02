import { Repository } from "typeorm";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import User from '../db/models/user.entity';
import * as bcrypt from 'bcrypt';
import { SigninRequest } from "src/utils/requests/signin.request";

export class UserRepository extends Repository<User>{
    async singUp(request: any): Promise<void>{
        const {username, password} = request;

        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        try{
            // await user.save();
        } catch(error){
            if(error.code === '23505') throw new ConflictException('Nome de usuario já existe')
            else throw new InternalServerErrorException();
        }
    }

    async validateUserPassword(signinRequest: SigninRequest): Promise<string>{
        const {username, password} = signinRequest;
        const user = await this.findOne({where:{username}})
        
        if(user && await user.validatePassword(password)){
            return user.username
        } else {
            return null;
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string>{
        return bcrypt.hash(password, salt);
    }
}