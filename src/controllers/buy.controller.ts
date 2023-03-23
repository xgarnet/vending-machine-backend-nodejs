import {buyByUser} from "../services/buy.service";

export const buy = async (req: any, res: any) =>  {
    const ret = buyByUser(req.body, req.user)
    res.json(ret)
}