import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AnswerService } from 'src/services/answer.service';
import CreateAnswerDTO from 'src/utils/dto/answer/create-answer.dto';
import UpdateAnswerDTO from 'src/utils/dto/answer/update-answer.dto';

@Controller('answer')
export class AnswerController {
    constructor(
        private answerService: AnswerService
    ){}

    @Get('list')
    async list(){
        return await this.answerService.list();
    }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number){
        return await this.answerService.findById(id);  
    }

    @Post('create')
    async create(@Body(ValidationPipe) createAnswerDTO: CreateAnswerDTO){
        return await this.answerService.create(createAnswerDTO);
    }   

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.answerService.delete(id);  
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    async update(@Body() updateAnswerDTO: UpdateAnswerDTO){
        return await this.answerService.update(updateAnswerDTO);  
    }
 }
