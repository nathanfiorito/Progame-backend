import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/services/users.service';
import { SignUpDTO } from 'src/utils/dto/auth/signup.dto';
import { SignInDTO } from 'src/utils/dto/auth/signin.dto';
import { JwtPayload } from 'src/utils/jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}
    
    async signIn(signInDTO: SignInDTO): Promise<any>{
        const user = await this.usersService.signIn(signInDTO.username);
        const {username, id, experience, isAdmin} = user;
        
        if(user && await user.validatePassword(signInDTO.password)){
            const payload: JwtPayload = {username, id, experience, isAdmin};
            const accessToken = await this.jwtService.sign(payload);
            
            return {accessToken}
        }
        
        throw new UnauthorizedException('Dados Incorretos.');
    }
    
    async signup(signUpDTO: SignUpDTO): Promise<any>{
        if(signUpDTO){
            await this.usersService.signUp(signUpDTO);
        }
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
