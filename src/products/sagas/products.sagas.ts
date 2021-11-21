import { Injectable, Logger } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { delay, map, Observable } from "rxjs";
import { ReadProductCommand } from "../commands/impl/read.product.command";
import { ProductCreatedEvent } from "../events/impl/product.created.event";

@Injectable()
export class ProductsSagas {
  @Saga()
  productCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(ProductCreatedEvent),
        delay(1000),
        map(event => {
          Logger.log('Inside [ProductsSagas] Saga', 'ProductsSagas');
          const productId = event.productDto[0].productId[0];
          return new ReadProductCommand(productId);
        }),
      );
  }
}