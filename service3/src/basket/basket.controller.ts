import { Body, Controller, Delete, Get, Put } from '@nestjs/common';
import { BasketService } from './basket.service';
import CreateGoodDto from './dto/good.dto';
import Good from './interfaces/good.interface';

@Controller('goods')
export class CatsController {
    constructor(private readonly basketService: BasketService) {}

    @Get()
    public async create(@Body() createGoodData: CreateGoodDto): Promise<Good> {
        return await this.basketService.create(createGoodData);
    }

    @Get()
    public async findAll(): Promise<Good[]> {
        return await this.basketService.findAll();
    }
    @Get()
    public async findOne(id: string): Promise<Good> {
        return await this.basketService.findOne(id);
    }
    @Put()
    public async update(id: string, payload: CreateGoodDto): Promise<any> {
        return await this.basketService.update(id, payload);
    }
    @Delete()
    public async delete(id: string): Promise<Good> {
        return await this.basketService.delete(id);
    }

    // @Patch()
    // public async addGood(id: string, newIdGood: string): Promise<Good> {
    //     return await this.basketService.
    // }
}
