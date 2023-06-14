import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Schemes } from './entities';
import { environment } from 'environment';

@Module({
  imports: [
    TypeOrmModule.forRoot(environment.databaseConfig),
    TypeOrmModule.forFeature([Schemes]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
