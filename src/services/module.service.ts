import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleRepository } from 'src/repositories/module.repository';

@Injectable()
export class ModuleService {
    constructor(@InjectRepository(ModuleRepository) private moduleRepository: ModuleRepository){}

    async list(){
        return await this.moduleRepository.find();
    }
}
