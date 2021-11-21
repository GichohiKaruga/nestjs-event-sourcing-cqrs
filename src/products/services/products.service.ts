import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProductCommand } from '../commands/impl/create.product.command';
import { DeleteProductCommand } from '../commands/impl/delete.product.command';
import { ReadProductCommand } from '../commands/impl/read.product.command';
import { UpdateProductCommand } from '../commands/impl/update.product.command';
import { ProductDto, ProductIdRequestParamsDto } from '../dtos/products.dto';


@Injectable()
export class ProductsService {
  constructor(private readonly commandBus: CommandBus) {}

  async createProduct(product: ProductDto) {
    return await this.commandBus.execute(
      new CreateProductCommand(product),
    );
  }

  async updateProduct(product: ProductDto) {
    return await this.commandBus.execute(
      new UpdateProductCommand(product),
    );
  }

  async deleteProduct(product: ProductIdRequestParamsDto) {
    return await this.commandBus.execute(
      new DeleteProductCommand(product),
    );
  }

  async findProduct(productid: string) {
    return await this.commandBus.execute(
        new ReadProductCommand(productid)
      );
  }
}