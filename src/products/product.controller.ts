import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { ProductCadastroDto } from './dto/product.cadastrar.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('listar')
  async listar(): Promise<Product[]> {
    return this.productService.listar()
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: ProductCadastroDto): Promise<ResultadoDto> {
    return this.productService.cadastrar(data)
  }
}