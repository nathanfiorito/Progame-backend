import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/repositories/question.repository';
import CreateQuestionDTO from 'src/utils/dto/question/create-question.dto';
import UpdateQuestionDTO from 'src/utils/dto/question/update-question.dto';

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(QuestionRepository) private questionRepository: QuestionRepository){}

    async list(){
        return await this.questionRepository.find();
    }

    async findById(id: number){
        return await this.questionRepository.findOne({where: {id}})
    }

    async create(createQuestionDTO: CreateQuestionDTO){
        return await this.questionRepository.save(createQuestionDTO)
    }

    async delete(id: number){
        return await this.questionRepository.delete({id})
    }

    async update(updateQuestionDTO: UpdateQuestionDTO){
        await this.questionRepository.update(updateQuestionDTO.id, updateQuestionDTO)
        
        return this.questionRepository.findOne({where: {id: updateQuestionDTO.id}})
    }
}
