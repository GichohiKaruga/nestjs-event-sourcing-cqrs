import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductDto, ProductIdRequestParamsDto } from '../dtos/products.dto';
import { ProductsService } from '../services/products.service';


@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @ApiResponse({ status: 200, description: 'Create Product.' })
  @Post()
  async createProduct(@Body() productDto: ProductDto): Promise<ProductDto> {
    const productId = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    return this.productsService.createProduct({...{productId}, ...productDto});
  }

  @ApiResponse({ status: 200, description: 'Update Product.' })
  @Put(':productId')
  async updateProduct(@Param() productId: ProductIdRequestParamsDto, @Body() productDto: ProductDto) {
    return this.productsService.updateProduct({...productId, ...productDto});
  }

  @ApiResponse({ status: 200, description: 'Delete Product.' })
  @Delete(':productId')
  async deleteProduct(@Param() productId: ProductIdRequestParamsDto) {
    return this.productsService.deleteProduct(productId);
  }

  @ApiResponse({ status: 200, description: 'Get Product.' })
  @Get(':productId')
  async findOneProduct(@Param() productId: string) {
    return this.productsService.findProduct(productId);
  }
}
