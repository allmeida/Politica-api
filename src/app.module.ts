import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    ProductModule,
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
