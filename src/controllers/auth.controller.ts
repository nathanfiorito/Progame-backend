import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignUpDTO } from 'src/utils/dto/auth/signup.dto';
import { SignInDTO } from 'src/utils/dto/auth/signin.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signin')
    async signin(@Body(ValidationPipe) signInDTO: SignInDTO) {
        console.log(signInDTO);
        return this.authService.signIn(signInDTO);
    }

    @Post('signup')
    async signup(@Body(ValidationPipe) signUpDTO: SignUpDTO) {
        return this.authService.signup(signUpDTO);
    }
}
