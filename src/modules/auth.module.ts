import { LocalStrategy } from './../utils/local.strategy';
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controllers/auth.controller';
import { UsersModule } from 'src/modules/users.module';
import { UserRepository } from 'src/repositories/user.repository';
import { AuthService } from '../services/auth.service';
import { jwtConstants } from '../utils/constants';
import { JwtStrategy } from '../utils/jwt.strategy';
import { TokenModule } from './token.module';

@Module({
  imports: [
    UsersModule, 
    forwardRef(() => TokenModule),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '1d'}
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [
    JwtModule,
    PassportModule,
    AuthService
  ]
})
export class AuthModule {}
