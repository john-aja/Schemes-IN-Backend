import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Schemes } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8090,
      username: 'postgres',
      password: 'root',
      database: 'schemes',
      entities: [Schemes],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Schemes]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
