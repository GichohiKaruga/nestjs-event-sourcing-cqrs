import { IEvent } from '@nestjs/cqrs';
import { ProductDto } from '../../dtos/products.dto';

export class ProductUpdatedEvent implements IEvent {
  constructor(
    public readonly productDto: ProductDto) {}
}