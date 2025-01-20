import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Good from './interfaces/good.interface';
import { Model } from 'mongoose';
import CreateGoodDto from './dto/good.dto';

@Injectable()
export class BasketService {
    constructor(@InjectModel('Good') private readonly goodModel: Model<Good>) {}

    public async create(createGood: CreateGoodDto): Promise<Good> {
        const good: Good = new this.goodModel(createGood);
        return await good.save();
    }

    public async update(id: string, payload: CreateGoodDto): Promise<any> {
        return await this.goodModel
            .findByIdAndUpdate(id, payload, { new: true })
            .exec();
    }
    public async delete(id: string): Promise<Good> {
        return await this.goodModel.findByIdAndDelete(id).exec();
    }

    public async findAll(): Promise<Good[]> {
        return await this.goodModel.find().exec();
    }

    public async findOne(id: string): Promise<Good> {
        return await this.goodModel.findById(id).exec();
    }

    // public async addGood(id: string, newIdGood: string): Promise<Good> {
    //     return await this.goodModel.
    // }
}
