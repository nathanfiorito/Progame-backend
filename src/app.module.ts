import { ModulesController } from './modules/modules.controller';
import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [
    ModulesController,
    AuthController],
  providers: [],
})
export class AppModule { }
