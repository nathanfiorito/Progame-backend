import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { QuestionService } from 'src/services/question.service';

@Controller('question')
export class QuestionController {
    constructor(
        private questionService: QuestionService
    ){}

    @Get()
    async list(){
        
    }

    @Get()
    async detail(){

    }

    @Post()
    async create(){

    }

    @Delete()
    async delete(){

    }

    @Put()
    async update(){

    } 
}
