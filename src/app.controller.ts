import { Controller, Get, Redirect, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ab*cd')
  getHello(): string {
    // return res.status(201).send("hello world")
    return this.appService.getHello();
  }

  @Get('number')
  multiplyByTwo(): number {
    return this.appService.multiplyByTwo(5);
  }
  @Get('nest')
  @Redirect('https://nestjs.com')
  getDocs(@Query('version') version) {
    return this.appService.getDoc(version);
  }
  // redirectToUrl(@Response() res : Response){
  //   res.redirect()
  // }
}
