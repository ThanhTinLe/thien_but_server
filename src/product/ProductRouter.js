import express from 'express'
import { createProduct, deleteProduct, getAllProduct, getProductById, searchProduct, updateProduct } from './ProductController.js';
import { authenticateToken } from '../jwt.js';


const router = express.Router();

router.post('/', authenticateToken, createProduct);
router.get('/', getAllProduct);
router.get('/:id', getProductById);
router.put('/', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/search/byname', searchProduct);

export default router;