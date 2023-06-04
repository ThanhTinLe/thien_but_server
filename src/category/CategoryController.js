import { ProductModel } from "../product/ProductModel.js";
import { CategoryModel } from "./CategoryModel.js";

export const createCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        console.log(newCategory);
        const category = new CategoryModel(newCategory);
        await category.save()
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllCategory = async (req, res) => {
    try {
        const category = await CategoryModel.find();
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id);
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateCategory = async (req, res) => {
    try {
        const updateCategory = req.body;
        const category = await CategoryModel.findByIdAndUpdate(
            { _id: updateCategory._id },
            updateCategory,
            { new: true }
        );
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const searchProductByCategory = async (req, res) => {
    try {

        const categoryId = req.query.categoryId
        const listProduct = await ProductModel.find({ categoryId: categoryId })
        res.status(200).json(listProduct)

    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteCategory = async (req, res) => {
    try {
        await ProductModel.findByIdAndRemove(req.params.id)
        res.status(200).send("Delete category success")

    } catch (error) {
        res.status(500).send("Delete category failed")
    }
}