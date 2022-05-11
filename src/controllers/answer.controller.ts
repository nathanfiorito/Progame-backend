import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AnswerService } from 'src/services/answer.service';

@Controller('answer')
export class AnswerController {
    constructor(
        private answerService: AnswerService
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
