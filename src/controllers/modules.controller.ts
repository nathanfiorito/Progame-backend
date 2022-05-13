import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ModuleService } from 'src/services/module.service';
import UpdateModuleDTO from 'src/utils/dto/module/update-module.dto';
import CreateModuleDTO from 'src/utils/dto/module/create-module.dto';

@Controller('module')
export class ModulesController { 
    constructor(private moduleService: ModuleService){}

    @Get('list')
    async list(){
        return await this.moduleService.list();
    }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number){
        return await this.moduleService.findById(id);  
    }

    @Post('create')
    async create(@Body(ValidationPipe) createModuleDTO: CreateModuleDTO){
        return await this.moduleService.create(createModuleDTO);
    }   

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.moduleService.delete(id);  
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    async update(@Body() updateModuleDTO: UpdateModuleDTO){
        return await this.moduleService.update(updateModuleDTO);  
    }
}
