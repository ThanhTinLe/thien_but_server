import { ProductModel } from "./ProductModel.js";

export const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const product = new ProductModel(newProduct);
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const product = await ProductModel.find();
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateProduct = async (req, res) => {
    try {
        const updateProduct = req.body;

        const product = await ProductModel.findByIdAndUpdate(
            { _id: updateProduct._id },
            updateProduct,
            { new: true }
        );

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const deleteProductid = req.params.id;
        await ProductModel.findByIdAndRemove(deleteProductid)
        res.status(200).send("delete completed")

    } catch (error) {
        console.log(error);
        res.status(500).send("delete failed")
    }
}

export const searchProduct = async (req, res) => {
    try {


        // const product = await ProductModel.findById(req.params.id)
        const searchValue = req.query.name;
        const product = await ProductModel.find({ name: searchValue })

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error);
    }
}