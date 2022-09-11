import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('product')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  get(): any {
    return this.appService.getHello()
  }
}
