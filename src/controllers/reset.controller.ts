import {Request, Response} from "express";
import {resetDeposit} from "../services/reset.service";

export const getReset = async (req: Request, res: Response) =>  {
    resetDeposit(req.params.id)
    res.send("reset")
}