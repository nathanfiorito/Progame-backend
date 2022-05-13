import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerRepository } from 'src/repositories/answer.repository';
import CreateAnswerDTO from 'src/utils/dto/answer/create-answer.dto';
import UpdateAnswerDTO from 'src/utils/dto/answer/update-answer.dto';

@Injectable()
export class AnswerService {
    constructor(@InjectRepository(AnswerRepository) private answerRepository: AnswerRepository){}

    async list(){
        return await this.answerRepository.find();
    }

    async findById(id: number){
        return await this.answerRepository.findOne({where: {id}})
    }

    async create(createAnswerDTO: CreateAnswerDTO){
        return await this.answerRepository.save(createAnswerDTO)
    }

    async delete(id: number){
        return await this.answerRepository.delete({id})
    }

    async update(updateAnswerDTO: UpdateAnswerDTO){
        await this.answerRepository.update(updateAnswerDTO.id, updateAnswerDTO)
        
        return this.answerRepository.findOne({where: {id: updateAnswerDTO.id}})
    }
}
