import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/repositories/question.repository';

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(QuestionRepository) private questionRepository: QuestionRepository){}
}
