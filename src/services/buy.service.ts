import {getAllProducts} from "./product.service";
import {getAllUsers} from "./user.service";

export const buyByUser = (par: any, auser: any) => {

    const { productId, amount } = par;
    const products = getAllProducts();
    const users = getAllUsers();

    // find the product with the given ID
    const product = products.find(p => p.id === productId);

    // if the product doesn't exist, return an error
    if (!product) {
        return { message: 'Product not found' };
    }

    // if there isn't enough of the product available, return an error
    if (product.amountAvailable < amount) {
        return {message: 'Not enough products available' };
    }

    // find the user making the purchase
    const user = users.find(u => u.username === auser.username);

    // if the user doesn't exist, return an error
    if (!user) {
        return { message: 'User not found' };
    }

    // if the user doesn't have enough deposit, return an error
    if (user.deposit < product.cost * amount) {
        return { message: 'Not enough deposit' };
    }

    // update the product amount and user deposit
    product.amountAvailable -= amount;
    user.deposit -= product.cost * amount;

    // calculate the change and return the purchase information
    const change = calculateChange(user.deposit);

    return {
        message: 'Purchase successful',
        totalSpent: product.cost * amount,
        product,
        change
    };

}
function calculateChange(deposit: number) {
    const coins = [100, 50, 20, 10, 5];
    const change = [];

    for (const coin of coins) {
        while (deposit >= coin) {
            change.push(coin);
            deposit -= coin;
        }
    }

    return change;
}
