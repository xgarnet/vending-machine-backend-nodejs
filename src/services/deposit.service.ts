import {findUserById} from "./user.service";

export const getDepositByUserId = (userId: string) =>  {
    const user = findUserById(userId)
    return user.deposit
}

export const addDepositByUserId = (userId: string, deposit: { coins: number[]; }) => {
    const user = findUserById(userId)
    const {coins} = deposit
    const coinValues = [5, 10, 20, 50, 100];
    if (!Array.isArray(coins)) {
        return  { error: 'Coins must be an array'};
    }
    if (coins.some(c => !coinValues.includes(c))) {
        return {error: 'Invalid coin value'};
    }
    if (!user || user.role !== 'buyer') {
        return {error: 'User not found' };
    }
    user.deposit += coins.reduce((acc, curr) => acc + curr, 0);
    return user
}