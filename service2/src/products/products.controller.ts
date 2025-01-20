import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';
import { ProductsGuard } from './guard/products.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  // Приветствие сервиса
  @Get()
  @UseGuards(ProductsGuard)
  public welcome() {
    return this.productsService.readAllProduct();
  }

  // Создание товара
  @Post('new')
  public createProduct(@Body() productData: ProductDto): Promise<Product> {
    return this.productsService.createProduct(productData)
  }

  // Поиск всех товаров
  @Get('searchall')
  public async readAllProduct(): Promise<Array<Product>> {
    return await this.productsService.readAllProduct();
  }

  // Поиск товаров по id
  @Get('searchid=:id')
  public async readOneByIdProduct(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return await this.productsService.readOneByIdProduct(id);
  }

  // Редактирование товара
  @Patch('update=:id')
  public async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() productData: ProductDto): Promise<UpdateResult> {
    return await this.productsService.updateProduct(id, productData)
  }

  // Удаление товара по id
  @Delete('remove=:id')
  public async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return await this.productsService.deleteProduct(id);
  }
}
