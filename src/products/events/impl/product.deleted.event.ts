import { IEvent } from '@nestjs/cqrs';

export class ProductDeletedEvent implements IEvent {
  constructor(
    public readonly productId: string) {}
}