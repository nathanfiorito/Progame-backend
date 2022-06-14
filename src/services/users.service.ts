import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
import * as bcrypt from 'bcrypt'
import { SignUpDTO } from 'src/utils/dto/auth/signup.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserRepository) private userRepository: UserRepository){}

    async signIn(username: string): Promise<User | undefined> {
        return await this.userRepository.findOne({where: {username}});
    }

    async signUp(signUpDTO: SignUpDTO): Promise<User | undefined> {
        const user = new User();
        user.email = signUpDTO.email;
        user.username = signUpDTO.username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(signUpDTO.password, user.salt);
        user.isAdmin = false;
        return await this.userRepository.signUp(user);
    }

    private async hashPassword(password: string, salt: string){
        return bcrypt.hash(password, salt);
    }

    async findOneById(id: number){
        return this.userRepository.findOne({where:{id}})
    }
}
