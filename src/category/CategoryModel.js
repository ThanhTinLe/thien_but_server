import { mongoose } from 'mongoose'

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const CategoryModel = mongoose.model('Category', categorySchema);
