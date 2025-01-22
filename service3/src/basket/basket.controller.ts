import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import GoodDto from '../dto/good.dto';
import Good from './entity/good';

@Controller('goods')
export class BasketController {
    constructor(private readonly goodService: BasketService) {}

    @Post('new')
    public async create(
        @Body() createGoodData: GoodDto,
    ): Promise<Good | string> {
        return this.goodService.create(createGoodData);
    }

    @Get('findall')
    public async findAll(): Promise<Array<Good>> {
        return this.goodService.findAll();
    }

    @Get(':id')
    public async findOne(@Param('id') id: string): Promise<Good> {
        return this.goodService.findOne(id);
    }

    @Patch(':id')
    public async update(
        @Param('id') id: string,
        @Body() payload: GoodDto,
    ): Promise<Good> {
        return this.goodService.update(id, payload);
    }

    @Delete(':id')
    public async deleteOrder(@Param('id') id: string): Promise<any> {
        return this.goodService.delete(id);
    }
}
