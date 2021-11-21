import { Type } from '@nestjs/common';
import { IsString } from 'class-validator';

export class ProductIdRequestParamsDto {
  @IsString()
  readonly productId!: string;
}

export class ProductDto {
  @IsString()
  readonly ProductId!: string;

  @IsString()
  readonly name!: string;

  @IsString()
  readonly description!: string;
  
  readonly price!: number;

}

