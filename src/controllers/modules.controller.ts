import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { ModuleService } from 'src/services/module.service';
import { ModuleCreateRequest } from 'src/utils/requests/module/moduleCreate.request';

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
    async create(@Body(ValidationPipe) moduleCreateRequest: ModuleCreateRequest){
        return await this.moduleService.create(moduleCreateRequest);
    }   

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.moduleService.delete(id);  
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number){
        return await this.moduleService.update(id);  
    }
}
