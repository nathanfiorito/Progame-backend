import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenRepository } from 'src/repositories/token.repository';
import * as bcrypt from 'bcrypt'
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

@Injectable()
export class TokenService {
    constructor(
        @InjectRepository(TokenRepository) private tokenRepository: TokenRepository,
        private usersService: UsersService,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService
        ){

        }

    async save(hash: string, user_id: number){
        const token = await this.tokenRepository.findOne({where:{user_id}})

        if(token){
            await this.tokenRepository.update({user_id: user_id},{
                hash
            })
        } else {
            await this.tokenRepository.insert({
                hash,
                user_id
            })
        }
    }

    async refreshToken(oldToken: string){
        const token = await this.tokenRepository.findOne({where:{hash: oldToken}})
        const tokenlist = await this.tokenRepository.find();
        
        if(token){
            const user = await this.usersService.findOneById(token.user_id)

            return this.authService.generateAccessToken(user);
        } else {
            return new HttpException({
                errorMessage: ''
            }, HttpStatus.UNAUTHORIZED
            )
        }
    }
}
