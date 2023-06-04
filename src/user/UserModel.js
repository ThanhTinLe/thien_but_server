import { mongoose } from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: String,
    address: String,
    role: {
        type: String,
        enum: ['admin', 'employee'],
        default: 'employee'
    },
    status: Boolean
},{ timestamps: true });

export const UserModel = mongoose.model('User', userSchema);
