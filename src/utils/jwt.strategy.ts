import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDTO } from './dto/auth/signin.dto'
import { UserRepository } from 'src/repositories/user.repository';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService,
              private userRepository: UserRepository) {
    super();
  }

  async validate(payload: JwtPayload): Promise<any> {
    const {username} = payload;
        const user = await this.userRepository.findOne({username})

        if(!user){
            throw new UnauthorizedException()
        }

        return user;
  }
}