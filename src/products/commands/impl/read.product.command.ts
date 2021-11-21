import { ICommand } from "@nestjs/cqrs";

export class ReadProductCommand implements ICommand {
    constructor(
      public readonly productId: string,
    ) {}
  }