import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { UsersService } from 'src/services/users.service';
import { SignUpDTO } from 'src/utils/dto/auth/signup.dto';
import { SignInDTO } from 'src/utils/dto/auth/signin.dto';
import { JwtPayload } from 'src/utils/jwt-payload.interface';
import User from 'src/entities/user.entity';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @Inject(forwardRef(() => TokenService))
        private tokenService: TokenService
    ){}
    
    async signIn(signinDTO: SignInDTO): Promise<any>{
        const user = await this.usersService.signIn(signinDTO.username);
        
        if(user && await user.validatePassword(signinDTO.password)){
            return await this.generateAccessToken(user);
        }else{
            throw new UnauthorizedException('Dados Incorretos.');
        }
        
    }
    
    async signup(signUpDTO: SignUpDTO): Promise<any>{
        if(signUpDTO){
            await this.usersService.signUp(signUpDTO);
        }
    }

    async refreshToken(user: User){

    }

    async generateAccessToken(user: User){
        const {username, id, experience, isAdmin} = user;
        const payload: JwtPayload = {username, id, experience, isAdmin};
        const token = await this.jwtService.sign(payload);
        this.tokenService.save(token, id)

        return {accessToken: token} 
    }

    async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.usersService.signIn(username);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
}
