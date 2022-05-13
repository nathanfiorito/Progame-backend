import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleRepository } from 'src/repositories/module.repository';
import UpdateModuleDTO from 'src/utils/dto/module/update-module.dto';
import CreateModuleDTO from 'src/utils/dto/module/create-module.dto';

@Injectable()
export class ModuleService {
    constructor(@InjectRepository(ModuleRepository) private moduleRepository: ModuleRepository){}

    async list(){
        return await this.moduleRepository.find();
    }

    async findById(id: number){
        return await this.moduleRepository.findOne({where: {id}})
    }

    async create(moduleCreateRequest: CreateModuleDTO){
        return await this.moduleRepository.save(moduleCreateRequest)
    }

    async delete(id: number){
        return await this.moduleRepository.delete({id})
    }

    async update(updateModuleDTO: UpdateModuleDTO){
        await this.moduleRepository.update(updateModuleDTO.id, updateModuleDTO)
        
        return this.moduleRepository.findOne({where: {id: updateModuleDTO.id}})
    }
}
