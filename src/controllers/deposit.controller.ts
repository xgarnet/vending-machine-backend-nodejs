import {Request, Response} from "express";
import {addDepositByUserId, getDepositByUserId} from "../services/deposit.service";

export const getDeposit = async (req: Request, res: Response) => {
    res.send({"deposit": getDepositByUserId(req.params.id)})
}

export const addToDeposit = (req: any, res: any) => {
    const user = addDepositByUserId(req.user.id, req.body)
    res.json(user);
}
