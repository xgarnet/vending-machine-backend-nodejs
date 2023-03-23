import {ProductModel} from "../models/product.model";

let allProducts: ProductModel[] =  [
    {id: 1, amountAvailable: 10,  cost: 15, productName: "Product 1",  sellerId: 2},
    {id: 2, amountAvailable: 5, cost: 25, productName: "Product 2",  sellerId: 2}
]
export const getAllProducts = () => {
    return allProducts;
}

export const addToProduct = (product: ProductModel) =>  {
    allProducts = allProducts.concat(product)
}

export const findProductById = (id: string): ProductModel => {
    const productId = parseInt(id, 10);
    const product = allProducts.find(p => p.id === productId);
    return product
}

export const modifyProduct = (id: string) => {
    return
}

export const deleteProductById = (productId: string) => {
    return
}