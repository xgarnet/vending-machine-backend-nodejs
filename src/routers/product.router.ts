// @ts-ignore
import express from 'express';
import {addProduct, deleteProduct, getProductById, getProducts, updateProduct} from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.route('/product')
    .get(getProducts)
    .post(addProduct)


productRouter.route('/product/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct)

export default productRouter;

