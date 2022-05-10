import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/repositories/user.repository';
import { UsersService } from '../services/users.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
