import { Document } from 'mongoose';

interface Good extends Document {
    name: string;
    price: string;
    description: string;
    weight: string;
    orderDate: Date;
    orderFrom: string;
    orderTo: string;
}

export default Good;
