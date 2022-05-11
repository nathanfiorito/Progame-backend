import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerRepository } from 'src/repositories/answer.repository';
import { AnswerService } from 'src/services/answer.service';

@Module({
    imports: [TypeOrmModule.forFeature([AnswerRepository])],
    providers: [AnswerService],
    exports: [AnswerService]
})
export class AnswerModule { }
