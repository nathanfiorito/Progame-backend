import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleRepository } from 'src/repositories/module.repository';
import { ModuleCreateRequest } from 'src/utils/requests/module/moduleCreate.request';

@Injectable()
export class ModuleService {
    constructor(@InjectRepository(ModuleRepository) private moduleRepository: ModuleRepository){}

    async list(){
        return await this.moduleRepository.find();
    }

    async findById(id: number){
        return await this.moduleRepository.findOne({where: {id}})
    }

    async create(moduleCreateRequest: ModuleCreateRequest){
        return await this.moduleRepository.createModule(moduleCreateRequest)
    }

    async delete(id: number){
        return await this.moduleRepository.delete({id})
    }
}
