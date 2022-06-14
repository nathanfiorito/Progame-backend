import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenController } from 'src/controllers/token.controller';
import { TokenRepository } from 'src/repositories/token.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { AuthService } from 'src/services/auth.service';
import { TokenService } from 'src/services/token.service';
import { AuthModule } from './auth.module';
import { UsersModule } from './users.module';

@Module({
  imports:[
    forwardRef(() => AuthModule),
    UsersModule,
    TypeOrmModule.forFeature([TokenRepository])
  ],
  controllers:[TokenController],
  providers: [TokenService],
  exports: [TokenService]
})
export class TokenModule {}
