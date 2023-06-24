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
    return 'Hello Schemes-IN User!';
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
    if (getScheme) {
      return getScheme;
    } else {
      return { status: 'ERROR', message: 'No Schemes Available' };
    }
  }

  async updateScheme(data: any) {
    const scheme = await this.scheme.findOne({
      where: { schemeId: data.schemeId },
    });
    await this.scheme.update({ schemeId: data.schemeId }, { ...data });
    return scheme;
  }

  // async addCollectionOfScheme(data: IScheme[]) {
  //   try {
  //     return await data.map(async (v: any, i) => {
  //       const isSchemeExist = await this.scheme.findOne({
  //         where: { schemeId: v.schemeId },
  //       });
  //       if (!isSchemeExist) {
  //         const newScheme = { ...v };
  //         await this.scheme.save(newScheme);
  //         if (i === data.length - 1) {
  //           return {
  //             status: 'SUCCESS',
  //             message: 'New scheme created successfully',
  //           };
  //         }
  //       } else throw new Error('Invalid Input : The scheme is alreay exist');
  //     })[0];
  //   } catch (e) {
  //     return {
  //       status: 'ERROR',
  //       message: e.message,
  //     };
  //   }
  // }

  async getAllSchemes() {
    const scheme = await this.scheme.find();
    return scheme;
  }
}
