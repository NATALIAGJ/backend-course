import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    document_type: { type: String, required: true },
    document_value: { type: String, required: true },
    sales: {type: {
        count: Number,
        amount: Number
    }, required: true}
})

const ClientModel = model("Client", clientSchema, "clients")

export default ClientModel