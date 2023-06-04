import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import ProductRouter from './src/product/ProductRouter.js';
import CategoryRouter from './src/category/CategoryRouter.js'
import UserRouter from './src/user/UserRouter.js'

const app = express()
const PORT = process.env.port || 5000;
dotenv.config()
const secretKey = process.env.SECRET_KEY;
const URI = process.env.DATABASE_URI


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());


//khai báo route
app.use('/product', ProductRouter);
app.use('/category', CategoryRouter);
app.use('/user', UserRouter);


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        console.log("CONNECTED TO DB");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    }).catch((err) => {
        console.log("err:", err);
    });



