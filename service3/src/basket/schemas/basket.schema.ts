import { Schema } from 'mongoose';

const basketSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    weight: { type: String },
    orderDate: { type: Date },
    productsIds: { type: Number, required: true },
    orderFrom: { type: String },
    orderTo: { type: String },
});

export default basketSchema;
