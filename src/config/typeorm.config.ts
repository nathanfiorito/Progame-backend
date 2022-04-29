import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'data/dev.db',
    logging: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '../db/migrations/*{.ts,.js}'],
    synchronize: true,
}

module.exports = typeOrmConfig;