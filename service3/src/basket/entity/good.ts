import GoodDto from '../../dto/good.dto';

class Good {
    id: number;
    createAt: Date;
    idUser: number;
    updatedAt: Date;
    idProduct: Array<GoodDto>;
}

export default Good;
