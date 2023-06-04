import express from 'express'
import { createCategory, deleteCategory, getAllCategory, getCategoryById, searchProductByCategory, updateCategory } from './CategoryController.js';
import {authenticateToken} from './../jwt.js'


const router = express.Router();

router.get('/', getAllCategory)
router.post('/', authenticateToken, createCategory)
router.get('/:id', getCategoryById)
router.put('/', authenticateToken, updateCategory)
router.get('/search/bycategoryid', searchProductByCategory)
router.delete('/:id', authenticateToken, deleteCategory)

export default router;