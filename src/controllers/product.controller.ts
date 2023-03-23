import {Request, Response} from "express";
import {ProductModel} from "../models/product.model";
import {
    addToProduct,
    deleteProductById,
    findProductById,
    getAllProducts,
    modifyProduct
} from "../services/product.service";

export const getProducts = async (req: Request, res: Response) => {
    res.send(getAllProducts())
}

export const getProductById = async (req: Request, res: Response) => {
    const product = findProductById(req.params.id)
    if (!product)  {
        return res.status(404).send('Product not found');
    }
    res.json(product);
}

export const addProduct = async (req: Request, res: Response) => {
    addToProduct(req.body as ProductModel)
    res.json(req.body)
}

export const updateProduct = async (req: Request, res: Response) => {
     modifyProduct(req.params.id)
}

export const deleteProduct = async (req: Request, res: Response) => {
    deleteProductById(req.params.id)
}