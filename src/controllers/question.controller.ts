import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { QuestionService } from 'src/services/question.service';
import CreateQuestionDTO from 'src/utils/dto/question/create-question.dto';
import UpdateQuestionDTO from 'src/utils/dto/question/update-question.dto';

@Controller('question')
@ApiTags('Questions')
@UseGuards(AuthGuard())
export class QuestionController {
    constructor(
        private questionService: QuestionService
    ){}

    @Get('list')
    async list(){
        return await this.questionService.list();
    }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number){
        return await this.questionService.findById(id);  
    }

    @Post('create')
    async create(@Body(ValidationPipe) createQuestionDTO: CreateQuestionDTO){
        return await this.questionService.create(createQuestionDTO);
    }   

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.questionService.delete(id);  
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    async update(@Body() updateQuestionDTO: UpdateQuestionDTO){
        return await this.questionService.update(updateQuestionDTO);  
    }
}
