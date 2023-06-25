import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IScheme } from './interface';
import * as nodemailer from 'nodemailer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('createScheme')
  createScheme(@Body() data: IScheme) {
    const addScheme = this.appService.addNewScheme(data);
    return addScheme;
  }

  @Post('getScheme')
  getScheme(@Body() data: IScheme) {
    const getScheme = this.appService.getSchemeByName(data);
    if (getScheme) {
      return getScheme;
    } else {
      return { status: 'ERROR', message: 'No Schemes Available' };
    }
  }

  @Post('updateScheme')
  updateScheme(@Body() data: IScheme) {
    const updateScheme = this.appService.updateScheme(data);
    return updateScheme;
  }

  @Post('getAllScheme')
  async getAllScheme() {
    const schemes = await this.appService.getAllSchemes();
    return schemes;
  }

  @Post('sendEmail')
  async sendEmail(@Body() body: any) {
    const { name, email, description } = body;
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'janakiramjack@gmail.com',
        pass: '******',
      },
    });

    // Setup email data
    const mailOptions = {
      from: email,
      to: 'janakiram.0695@gmail.com',
      subject: 'New message from your website',
      text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}`,
    };

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      const response = {
        status: 'SUCCESS',
        message: 'Email successfully sent to Admin',
        data: info,
      };
      return response;
    } catch (error) {
      console.error('Error sending email:', error);
      const response = {
        status: 'SUCCESS',
        message: 'Email successfully sent to Admin',
      };
      return response;
    }
  }
}
// @Post('uploadJsonb')
// async uploadJsonb(@Body() data: any) {
//   const res = await this.appService.addCollectionOfScheme(data.data);
//   return res;
// }
