import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/repositories/category.repository';
import { CategoryService } from 'src/services/category.service';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryRepository])],
    providers: [CategoryService],
    exports: [CategoryService]
})
export class CategoryModule {}