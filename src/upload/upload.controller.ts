import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {


  @Post('/file')
  @UseInterceptors(FileInterceptor('file'))
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    return 'File upload Api;'
  }
}