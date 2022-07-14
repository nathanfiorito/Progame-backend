import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/repositories/category.repository';
import CreateCategoryDTO from 'src/utils/dto/category/create-category.dto';
import UpdateCategoryDTO from 'src/utils/dto/category/update-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(CategoryRepository) private categoryRepository: CategoryRepository){}

    async list(){
        return await this.categoryRepository.find();
    }

    async findById(id: number){
        return await this.categoryRepository.findOne({where: {id}})
    }

    async create(createCategoryDTO: CreateCategoryDTO){
        return await this.categoryRepository.save(createCategoryDTO)
    }

    async delete(id: number){
        return await this.categoryRepository.delete({id})
    }

    async update(updateCategoryDTO: UpdateCategoryDTO){
        await this.categoryRepository.update(updateCategoryDTO.id, updateCategoryDTO)
        
        return this.categoryRepository.findOne({where: {id: updateCategoryDTO.id}})
    }
}
