import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleRepository } from 'src/repositories/module.repository';
import { ModuleService } from 'src/services/module.service';

@Module({
    imports: [TypeOrmModule.forFeature([ModuleRepository])],
    providers: [ModuleService],
    exports: [ModuleService]
})
export class ModuleModule { }
