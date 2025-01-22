import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import GoodSchema from '../schemas/good.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Good', schema: GoodSchema }]),
    ],
    controllers: [BasketController],
    providers: [BasketService],
})
export class BasketModule {}
