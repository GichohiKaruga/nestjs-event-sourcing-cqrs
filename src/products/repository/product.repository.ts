import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';

@Injectable()
export class ProductRepository {
  async createProduct(productDto) {
    const product = new Product(undefined);
    product.setData(productDto);
    product.createProduct();
    return product;
  }

  async updateProduct(productDto) {
    const product = new Product(productDto.productId);
    product.setData(productDto);
    product.updateProduct();
    return product;
  }

  async deleteProduct(productDto) {
    const product = new Product(productDto.productId);
    product.deleteProduct();
    return product;
  }

  async readProduct(productDto) {
    const product = new Product(productDto.productId);
    product.readProduct();
    return product;
  }
}