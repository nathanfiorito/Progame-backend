import { ModulesController } from './controllers/modules.controller';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from './config/typeorm.config';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    TypeOrmModule.forRoot(options),
  ],
  controllers: [
    ModulesController,
    AuthController],
  providers: [],
})
export class AppModule { }
