// @ts-ignore
import express from 'express';
import {buy} from "../controllers/buy.controller";
const buyRouter = express.Router()


buyRouter.route('/buy')
    .post(buy)
export default buyRouter;