import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SigninRequest } from './requests/signin.request';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(signinRequest: SigninRequest): Promise<any> {
    const user = await this.authService.validateUser(signinRequest);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}