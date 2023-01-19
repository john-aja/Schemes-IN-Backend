import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IScheme } from './interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('createScheme')
  createScheme(@Body() data: IScheme) {
    console.log(data);
    const addScheme = this.appService.addNewScheme(data);
    return addScheme;
  }

  @Post('getScheme')
  getScheme(@Body() data: IScheme) {
    console.log(data);
    const getScheme = this.appService.getSchemeByName(data);
    return getScheme;
  }

  @Post('updateScheme')
  updateScheme(@Body() data: IScheme) {
    const updateScheme = this.appService.updateScheme(data);
    return updateScheme;
  }

  @Post('getAllScheme')
  async getAllScheme() {
    const res = await this.appService.getAllSchemes();
    return res;
  }

  @Post('uploadJsonb')
  async uploadJsonb(@Body() data: any) {
    console.log(Array.isArray(data.data));
    const res = await this.appService.addCollectionOfScheme(data.data);
    console.log(res);
    return res;
  }
}
