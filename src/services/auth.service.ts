import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/services/users.service';
import { SigninRequest } from 'src/utils/requests/signin.request';
import { SignupRequest } from 'src/utils/requests/signup.request';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async validateUser(signinRequest: SigninRequest): Promise<boolean>{
        const user = await this.usersService.signIn(signinRequest.username);
        if(user && await user.validatePassword(signinRequest.password)){
            console.log(true)
            return true;
        }
        console.log(false)
        return false;
    }

    async signIn(signinRequest: SigninRequest): Promise<any>{
        if(!await this.validateUser(signinRequest)){
            return 'usuario não é valido'
        }
        console.log(signinRequest);
        return 'token'
    }

    async signup(signupRequest: SignupRequest): Promise<any>{
        if(signupRequest){
            await this.usersService.signUp(signupRequest);
        }
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }


}
