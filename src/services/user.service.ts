// import * as users from "./users.json"
import {UserModel} from "../models/user.model";

let allUsers: UserModel[] = [
    {
        id: 1,
        username: "admin",
        password: "password",
        deposit: 0,
        role: "seller"
    },
    {
        id: 2,
        username: "user",
        password: "password",
        deposit: 0,
        role: "buyer"
    }
];

 export const getAllUsers = () => {
    return allUsers
}

export const addToUser = (user: UserModel) => {
     user.id = allUsers.length  + 1;
     user.deposit  = 0;
    allUsers.push(user)
}

export const findUserById = (id: string): UserModel => {
    const user = allUsers.find(u => u.id === parseInt(id, 10));
    return user
}

export const modifyUser = (id: string, deposit: number): UserModel => {
    const user = allUsers.find(u => u.id === parseInt(id, 10));
    user.deposit = deposit || user.deposit;
    return user
}

export const deleteUserById= (userId: string): boolean =>  {
     const id = Number.parseInt(userId, 10)
    if(!id) return false
    allUsers = allUsers.filter(user => user.id !== id)
    return true
}