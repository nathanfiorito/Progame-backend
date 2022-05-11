import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerRepository } from 'src/repositories/answer.repository';

@Injectable()
export class AnswerService {
    constructor(@InjectRepository(AnswerRepository) private answerRepository: AnswerRepository){}

    async findOne(id: any){
        return await this.findOne({where: {id}})
    }
}
