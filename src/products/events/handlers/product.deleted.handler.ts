import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { ProductDeletedEvent } from '../impl/product.deleted.event';

@EventsHandler(ProductDeletedEvent)
export class ProductDeletedHandler
  implements IEventHandler<ProductDeletedEvent> {
  handle(event: ProductDeletedEvent) {
    Logger.log(event, 'ProductDeletedEvent'); 
  }
}