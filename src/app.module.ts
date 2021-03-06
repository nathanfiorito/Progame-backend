import { CategoryModule } from './modules/category.module';
import { TokenModule } from './modules/token.module';
import { QuestionModule } from './modules/question.module';
import { AnswerModule } from './modules/answer.module';
import { AnswerService } from './services/answer.service';
import { QuestionService } from './services/question.service';
import { AnswerController } from './controllers/answer.controller';
import { QuestionController } from './controllers/question.controller';
import { ModulesController } from './controllers/modules.controller';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from './config/typeorm.config';
import { ModuleModule } from './modules/module.module';
import { CategoryController } from './controllers/category.controller';

@Module({
  imports: [
    CategoryModule,
    TokenModule,
    QuestionModule,
    AnswerModule,
    AuthModule,
    UsersModule,
    ModuleModule,
    TypeOrmModule.forRoot(options),
  ],
  controllers: [
    AnswerController,
    QuestionController,
    ModulesController,
    AuthController,
    CategoryController,
  ],
  providers: [],
})
export class AppModule { }
