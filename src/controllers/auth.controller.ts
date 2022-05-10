import { SigninRequest } from './../utils/requests/signin.request';
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignupRequest } from 'src/utils/requests/signup.request';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signin')
    async signin(@Body(ValidationPipe) signinRequest: SigninRequest) {
        return this.authService.signIn(signinRequest);
    }

    @Post('signup')
    async signup(@Body(ValidationPipe) signupRequest: SignupRequest) {
        console.log(signupRequest)
        return this.authService.signup(signupRequest);
    }
}
