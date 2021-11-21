import { Logger } from "@nestjs/common";
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { ProductRepository } from "src/products/repository/product.repository";
import { UpdateProductCommand } from "../impl/update.product.command";

@CommandHandler(UpdateProductCommand)
export class UpdateProductHandler
  implements ICommandHandler<UpdateProductCommand> {
  constructor(
    private readonly repository: ProductRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateProductCommand) {
    Logger.log('Async UpdateProductHandler...', 'UpdateProductCommand');

    const {productDto} = command;
    const product = this.publisher.mergeObjectContext(
      await this.repository.updateProduct(productDto),
    );
    product.commit();
  }
}