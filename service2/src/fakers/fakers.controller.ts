import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FakersService } from './fakers.service';

@Controller('products/fakers')
export class FakersController {
    constructor(private readonly fakersService: FakersService) {}

    @Get()
    public async createProducts() {
        await this.fakersService.createProducts(10);
        return 'Товары успешно созданы';
    }
    @Get(':count')
    public async createCountProducts(
        @Param('count', ParseIntPipe) count: number,
    ) {
        await this.fakersService.createProducts(count);
        return 'Товары успешно созданы';
    }
}
