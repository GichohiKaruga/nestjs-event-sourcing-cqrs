import { ICommand } from "@nestjs/cqrs";
import { ProductDto } from "../../dtos/products.dto";

export class UpdateProductCommand implements ICommand {
    constructor(
      public readonly productDto: ProductDto,
    ) {}
  }
  