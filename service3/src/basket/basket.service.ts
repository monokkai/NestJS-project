import { Injectable } from '@nestjs/common';
import GoodDto from '../dto/good.dto';
import Good from '../interfaces/good.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BasketService {
    constructor(
        @InjectModel('Good') private readonly goodModule: Model<Good>,
    ) {}

    public async create(createGoodData: GoodDto): Promise<Good | string> {
        const user: Response = await fetch(
            `http://users-service:3000/products/${createGoodData.idUser}`,
        );
        if (!user.ok) {
            return 'Yes!';
        }

        const good: Response = await fetch(
            `http://products-service:3000/products/${createGoodData.idProduct}/check-availabilaty`,
        );
        if (!good.ok) {
            return 'Error of pushing the good!';
        }

        const createGood: Good = new this.goodModule(createGoodData);
        return await createGood.save();
    }

    public async findAll(): Promise<Array<Good>> {
        return await this.goodModule.find().exec();
    }

    public async findOne(id: string): Promise<Good> {
        return await this.goodModule.findById(id).exec();
    }

    public async update(id: string, payload: GoodDto): Promise<Good> {
        return await this.goodModule
            .findByIdAndUpdate(id, payload, { new: true })
            .exec();
    }

    public async delete(id: string): Promise<any> {
        return await this.goodModule.findByIdAndDelete(id).exec();
    }
}
