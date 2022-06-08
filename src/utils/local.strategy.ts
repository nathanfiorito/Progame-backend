import { jwtConstants } from './constants';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDTO } from './dto/auth/signin.dto'
import { UserRepository } from 'src/repositories/user.repository';
import { JwtPayload } from './jwt-payload.interface';
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.authService.validateUser(username, password);
    if(!user){
        throw new UnauthorizedException();
    }
    return user;
  }

}