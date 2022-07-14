import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CategoryService } from 'src/services/category.service';
import CreateCategoryDTO from 'src/utils/dto/category/create-category.dto';
import UpdateCategoryDTO from 'src/utils/dto/category/update-category.dto';

@Controller('category')
@ApiTags('Category')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class CategoryController {
    constructor(
        private categoryService: CategoryService
    ){}

    @Get('list')
    async list(){
        return await this.categoryService.list();
    }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number){
        return await this.categoryService.findById(id);  
    }

    @Post('create')
    async create(@Body(ValidationPipe) createCategoryDTO: CreateCategoryDTO){
        return await this.categoryService.create(createCategoryDTO);
    }   

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.categoryService.delete(id);  
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    async update(@Body() updateCategoryDTO: UpdateCategoryDTO){
        return await this.categoryService.update(updateCategoryDTO);  
    }
 }
