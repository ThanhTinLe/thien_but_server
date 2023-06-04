import { mongoose } from 'mongoose'
import { ObjectId } from 'mongodb'

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    altText: String
});

const coldStorageProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    InputPrice: Number,
    manufacturer: String,
    unit: String,
    quantity: Number,
    productionDate: Date,
    expirationDate: Date,
    storageInstructions: String,
    ingredients: String,
    usage: String,
    origin: String,
    nutritionalRestrictions: String,
    usageInstructions: String,
    categoryId: {
        type:ObjectId,
        required: true
    },
    createBy: {
        type:ObjectId,
        required: true
    },
    status: {
        type: String,
        enum:["stocking", "out of stock", "out of date", ],
        default: "stocking"
    },
    images: [imageSchema]
}, { timestamps: true });

export const ProductModel = mongoose.model('ColdStorageProduct', coldStorageProductSchema);
