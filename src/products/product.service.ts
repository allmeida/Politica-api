import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { ProductCadastroDto } from './dto/product.cadastrar.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) { }

  async listar(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async cadastrar(data: ProductCadastroDto): Promise<ResultadoDto> {
    let product = new Product()
    product.otimo = data.otimo
    product.bom = data.bom
    product.critico = data.critico
    return this.productRepository.save(product)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: "Cadastrado com sucesso"
        }
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: "Houve um erro ao salvar"
        }
      })
  }
}
