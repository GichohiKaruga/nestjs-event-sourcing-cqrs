import { ProductCreatedHandler } from "./product.created.handler";
import { ProductDeletedHandler } from "./product.deleted.handler";
import { ProductReadHandler } from "./product.read.handler";
import { ProductUpdatedHandler } from "./product.updated.handler";

export const EventHandlers = [
    ProductCreatedHandler,
    ProductUpdatedHandler,
    ProductDeletedHandler,
    ProductReadHandler
  ];