import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/modules/users.module';
import { AuthService } from '../services/auth.service';
import { jwtConstants } from '../utils/constants';
import { JwtStrategy } from '../utils/jwt.strategy';

@Module({
  imports: [
    UsersModule, 
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '60s'}
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
