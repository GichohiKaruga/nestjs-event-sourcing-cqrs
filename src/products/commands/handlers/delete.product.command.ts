import { Logger } from "@nestjs/common";
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { ProductRepository } from "../../repository/product.repository";
import { DeleteProductCommand } from "../impl/delete.product.command";

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler
  implements ICommandHandler<DeleteProductCommand> {
  constructor(
    private readonly repository: ProductRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteProductCommand) {
    Logger.log('Async DeleteProductHandler...', 'DeleteProductCommand');
    const {productDto} = command;
    const product = this.publisher.mergeObjectContext(
      await this.repository.deleteProduct(productDto),
    );
    product.commit();
  }
}
