import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { ProductUpdatedEvent } from '../definition/product.updated.event';

@EventsHandler(ProductUpdatedEvent)
export class ProductUpdatedHandler
  implements IEventHandler<ProductUpdatedEvent> {
  handle(event: ProductUpdatedEvent) {
    Logger.log(event, 'ProductUpdatedEvent'); 
  }
}