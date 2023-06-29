import { Schema, model, Types } from 'mongoose';

const saleSchema = new Schema({
    operation_date: { type: Date },
    total_amount: { type: Number },
    user: { type: Types.ObjectId, ref: 'User' }
})

const SaleModel = model("sale", saleSchema, "sales")

export default SaleModel