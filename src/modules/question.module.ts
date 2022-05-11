import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/repositories/question.repository';
import { QuestionService } from 'src/services/question.service';

@Module({
    imports: [TypeOrmModule.forFeature([QuestionRepository])],
    providers: [QuestionService],
    exports: [QuestionService]
})
export class QuestionModule { }
