// @ts-ignore
import express from 'express';
import {addToDeposit, getDeposit} from "../controllers/deposit.controller";
import {authenticateUser} from "../auth/authentication";
const depositRouter = express.Router()


depositRouter.route('/deposit')
    .get(getDeposit)
    .post(authenticateUser, addToDeposit)
export default depositRouter;