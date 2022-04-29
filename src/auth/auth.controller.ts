import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/signin')
    async signin(@Request() req) {
        return req.user;
    }

    @Post('/signup')
    async signup(@Request() req) {
        return req.user;
    }
}
