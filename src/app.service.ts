import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schemes } from './entities';
import { IScheme } from './interface';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Schemes)
    private scheme: Repository<Schemes>,
  ) {}
  getHello(): string {
    console.log('hi');
    return 'Hello World!';
  }

  async addNewScheme(data: IScheme) {
    const isSchemeExist = await this.scheme.findOne({
      where: { schemeName: data.schemeName },
    });
    if (!isSchemeExist) {
      const newScheme = { ...data };
      await this.scheme.save(newScheme);

      return {
        status: 'SUCCESS',
        message: 'New scheme created successfully',
      };
    } else {
      throw new Error('Invalid Input : The scheme is alreay exist');
    }
  }

  async getSchemeByName(data: any) {
    const getScheme = await this.scheme.findOne({
      where: { schemeId: data.schemeId },
    });
    return getScheme;
  }

  async updateScheme(data: any) {
    console.log(data);
    const scheme = await this.scheme.findOne({
      where: { schemeId: data.schemeId },
    });
    console.log(scheme);
    await this.scheme.update({ schemeId: data.schemeId }, { ...data });
    return scheme;
  }

  async addCollectionOfScheme(data: IScheme[]) {
    console.log(data);
    try {
      return await data.map(async (v: any, i) => {
        const isSchemeExist = await this.scheme.findOne({
          where: { schemeId: v.schemeId },
        });
        console.log('data', !isSchemeExist);
        if (!isSchemeExist) {
          const newScheme = { ...v };
          await this.scheme.save(newScheme);
          if (i === data.length - 1) {
            console.log(i, data.length);
            return {
              status: 'SUCCESS',
              message: 'New scheme created successfully',
            };
          }
        } else throw new Error('Invalid Input : The scheme is alreay exist');
      })[0];
    } catch (e) {
      return {
        status: 'ERROR',
        message: e.message,
      };
    }
  }

  async getAllSchemes() {
    const scheme = await this.scheme.find();
    return scheme;
  }
}
