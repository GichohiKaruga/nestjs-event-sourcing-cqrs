import { Logger } from "@nestjs/common";
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { ProductRepository } from "src/products/repository/product.repository";
import { ReadProductCommand } from "../impl/read.product.command";

@CommandHandler(ReadProductCommand)
export class ReadProductHandler
  implements ICommandHandler<ReadProductCommand> {
  constructor(
    private readonly repository: ProductRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: ReadProductCommand) {
    Logger.log('Async WelcomeProductHandler...', 'WelcomeProductCommand');
    const {productId} = command;
    const product = this.publisher.mergeObjectContext(
      await this.repository.readProduct({productId}),
    );
    product.commit();
  }
}