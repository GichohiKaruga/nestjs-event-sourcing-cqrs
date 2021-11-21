import { Module, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, CqrsModule } from '@nestjs/cqrs';
import { EventStore } from 'src/store/event-store/event.store';
import { EventStoreModule } from 'src/store/event-store/event.store.module';
import { CommandHandlers } from './commands/handlers';
import { ProductsController } from './controllers/products.controller';
import { ProductDto } from './dtos/products.dto';
import { ProductDto } from './dtos/products.dto';
import { EventHandlers } from './events/handlers';
import { ProductCreatedEvent } from './events/impl/product.created.event';
import { ProductDeletedEvent } from './events/impl/product.deleted.event';
import { ProductReadEvent } from './events/impl/product.read.event';
import { ProductUpdatedEvent } from './events/impl/product.updated.event';
import { ProductRepository } from './repository/product.repository';
import { ProductsSagas } from './sagas/products.sagas';
import { ProductsService } from './services/products.service';


@Module({
  imports: [
    CqrsModule,
    EventStoreModule.forFeature(),
  ],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductsSagas,
    ...CommandHandlers,
    ...EventHandlers,
    ProductRepository,
  ],
})
export class ProductsModule implements OnModuleInit {
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly command$: CommandBus,
    private readonly event$: EventBus,
    private readonly productsSagas: ProductsSagas,
    private readonly eventStore: EventStore,
  ) {}

  onModuleInit() {

    this.eventStore.setEventHandlers(this.eventHandlers);
    this.eventStore.bridgeEventsTo((this.event$ as any).subject$);
    this.event$.publisher = this.eventStore;
    this.event$.register(EventHandlers);
    this.command$.register(CommandHandlers);
  }

  eventHandlers = {
    ProductCreatedEvent: (data: ProductDto) => new ProductCreatedEvent(data),
    ProductDeletedEvent: (data: string) => new ProductDeletedEvent(data),
    ProductUpdatedEvent: (data: ProductDto) => new ProductUpdatedEvent(data),
    ProductWelcomedEvent: (data: string) => new ProductReadEvent(data),
  };
}