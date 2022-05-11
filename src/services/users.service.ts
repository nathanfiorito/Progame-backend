import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { SignupRequest } from 'src/utils/requests/signup.request';
import { SignupDbRequest } from 'src/utils/requests/singupDb.request';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserRepository) private userRepository: UserRepository){}

    async signIn(username: string): Promise<User | undefined> {
        return await this.userRepository.findOne({where: {username}});
    }

    async signUp(signupRequest: SignupRequest): Promise<User | undefined> {
        const user = new SignupDbRequest();
        user.email = signupRequest.email;
        user.username = signupRequest.username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(signupRequest.password, user.salt);
        user.isAdmin = false;
        return await this.userRepository.signUp(user);
    }

    private async hashPassword(password: string, salt: string){
        return bcrypt.hash(password, salt);
    }
}
