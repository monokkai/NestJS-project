import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) { }
    private _products: Array<Product> = new Array<Product>;

    // Приветствие
    public welcome(): string {
        return "Привет, я сервис товаров";
    }

    // Добавить товар
    public async createProduct(productData: ProductDto): Promise<Product> {
        const product: ProductDto = this.productRepository.create(productData);

        return this.productRepository.save(product);
    }

    // Добавить товары
    public async createProducts(productsData: Array<ProductDto>): Promise<Array<Product>> {
        const products: Array<ProductDto> = this.productRepository.create(productsData);

        return this.productRepository.save(products);
    }

    // Получение всех товаров
    public async readAllProduct(): Promise<Array<Product>> {
        return this.productRepository.find();
    }

    // Получить товар по id
    public async readOneByIdProduct(id: number): Promise<Product> {
        try {
            return this.productRepository.findOneBy({ id });
        } catch (error) {
            throw new BadRequestException("Товар с данным id не найден")
        }
    }

    // Обновить товар
    public async updateProduct(id: number, productData: ProductDto): Promise<UpdateResult> {
        try {
            return this.productRepository.update(id, productData);
        } catch (error) {
            throw new BadRequestException("Товаар с данным id не найден")
        }
    }

    // Удалить товар
    public async deleteProduct(id: number): Promise<DeleteResult> {
        try {
            return this.productRepository.delete(id);
        } catch (error) {
            throw new BadRequestException("Товар с данным id не найден");
        }
    }
}
