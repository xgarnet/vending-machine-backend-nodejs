import {UserModel} from "../models/user.model";
import {Request, Response} from "express";
import {addToUser, deleteUserById, findUserById, getAllUsers, modifyUser} from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
    res.send(getAllUsers())
}

export const getUserById = async (req: Request, res: Response) =>  {
    const user = findUserById(req.params.id)
    if (!user) return res.status(404).send('User not found');
    res.json(user);
}

export const addUser = async (req: Request, res: Response) => {
    addToUser(req.body as UserModel)
    res.status(201).json(req.body)
}

export const updateUser = (req: Request, res: Response) => {
    const {deposit} = req.body;
    if (deposit < 0) {
        return res.status(400).send('Deposit must be a positive number');
    }
    const user = modifyUser(req.params.id, deposit)
    if (!user)  {
        return res.status(404).send('User not found');
    }
    return res.json(user);
}

export const deleteUser = (req: Request, res: Response) => {
    if (!deleteUserById(req.params.id)) {
        return res.status(404).send('User not found');
    }
    return res.status(204)
}