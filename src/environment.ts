import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Schemes } from 'entities';

export const postgresLocalConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 8090,
  username: 'postgres',
  password: 'root',
  database: 'schemesA',
  entities: [Schemes],
  synchronize: true,
};

export const environment = {
  production: false,
  databaseConfig: postgresLocalConfig,
};
