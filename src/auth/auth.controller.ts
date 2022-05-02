import { SigninRequest } from './../utils/requests/signin.request';
import { Controller, Request, Post, UseGuards, Body, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignupRequest } from 'src/utils/requests/signup.request';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signin')
    async signin(@Body(ValidationPipe) signinRequest: SigninRequest) {
        return signinRequest;
    }

    @Post('signup')
    async signup(@Body(ValidationPipe) signupRequest: SignupRequest) {
        return signupRequest;
    }
}
