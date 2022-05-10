import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const options: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'data/dev.db',
    logging: true,
    entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '../db/migrations/*{.ts,.js}'],
    synchronize: true,
}