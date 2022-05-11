import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ModuleService } from 'src/services/module.service';

@Controller('module')
export class ModulesController { 
    constructor(private moduleService: ModuleService){
        
    }

    @Get()
    async list(){
        return await this.moduleService.list();
    }

    @Get()
    async detail(){

    }

    @Post()
    async create(){
        return await this.moduleService.create();
    }   

    @Delete()
    async delete(){

    }

    @Put()
    async update(){

    }
}
