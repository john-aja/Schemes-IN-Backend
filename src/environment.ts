import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Schemes } from 'entities';

export const postgresLocalConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://bxbysyax:z79ce_H4mNLovv6RP7XZt2cwIfSQmGFt@hansken.db.elephantsql.com/bxbysyax',
  entities: [Schemes],
  synchronize: true,
};

export const environment = {
  production: false,
  databaseConfig: postgresLocalConfig,
};
