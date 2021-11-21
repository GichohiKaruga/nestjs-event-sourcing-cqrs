import { CreateProductHandler } from "./create.product.handler";
import { DeleteProductHandler } from "./delete.product.command";
import { ReadProductHandler } from "./read.product.handler";
import { UpdateProductHandler } from "./update.product.handler";

export const CommandHandlers = [
    CreateProductHandler,
    DeleteProductHandler,
    UpdateProductHandler,
    ReadProductHandler,
  ];