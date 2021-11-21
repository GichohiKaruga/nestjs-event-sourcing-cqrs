import { IEvent } from "@nestjs/cqrs";
import { ProductDto } from "src/products/dtos/products.dto";

export class ProductCreatedEvent implements IEvent {
    constructor(
      public readonly productDto: ProductDto) {}
  }