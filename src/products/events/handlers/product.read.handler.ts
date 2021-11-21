import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { ProductReadEvent } from '../impl/product.read.event';

@EventsHandler(ProductReadEvent)
export class ProductReadHandler
  implements IEventHandler<ProductReadEvent> {
  handle(event: ProductReadEvent) {
    Logger.log(event, 'ProductReadEvent');
  }
}
