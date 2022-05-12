import Module from "src/entities/module.entity";
import { ModuleCreateRequest } from "src/utils/requests/module/moduleCreate.request";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Module)
export class ModuleRepository extends Repository<Module> {
    async createModule(moduleCreateRequest: ModuleCreateRequest){
        return await this.save(moduleCreateRequest);
    }
}