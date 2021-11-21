import { IEvent } from '@nestjs/cqrs';

export class ProductReadEvent implements IEvent {
  constructor(
    public readonly productId: string) {}
}