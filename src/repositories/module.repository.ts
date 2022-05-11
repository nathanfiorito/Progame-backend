import Module from "src/entities/module.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Module)
export class ModuleRepository extends Repository<Module> {
    async createModule(){
        return await this.save(module)
    }
}