import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Schemes } from './entities';

export const postgresLocalConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: '***********',
  entities: [Schemes],
  synchronize: true,
};

export const environment = {
  production: false,
  databaseConfig: postgresLocalConfig,
};
