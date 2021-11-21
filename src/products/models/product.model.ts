import { AggregateRoot } from '@nestjs/cqrs';
import { ProductCreatedEvent } from '../events/impl/product.created.event';
import { ProductDeletedEvent } from '../events/impl/product.deleted.event';
import { ProductReadEvent } from '../events/impl/product.read.event';
import { ProductUpdatedEvent } from '../events/impl/product.updated.event';


export class Product extends AggregateRoot {
  [x: string]: any;

  constructor(private readonly id: string | undefined) {
    super();
  }

  setData(data) {
    this.data = data;
  }

  createProduct() {
    this.apply(new ProductCreatedEvent(this.data));
  }

  updateProduct() {
    this.apply(new ProductUpdatedEvent(this.data));
  }

  readProduct() {
    this.apply(new ProductReadEvent(this.id));
  }

  deleteProduct() {
    this.apply(new ProductDeletedEvent(this.id));
  }
}