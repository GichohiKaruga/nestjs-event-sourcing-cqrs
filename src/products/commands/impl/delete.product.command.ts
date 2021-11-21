import { ICommand } from '@nestjs/cqrs';
import { ProductIdRequestParamsDto } from '../../dtos/products.dto';

export class DeleteProductCommand implements ICommand {
  constructor(
    public readonly productDto: ProductIdRequestParamsDto,
  ) {}
}