import { IEvent } from "@nestjs/cqrs";
import { ProductDto } from '../../dtos/products.dto';

export class ProductCreatedEvent implements IEvent {
    constructor(
      public readonly productDto: ProductDto) {}
  }