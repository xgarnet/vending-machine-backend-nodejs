// @ts-ignore
import express from 'express';
import {getReset} from "../controllers/reset.controller";
const resetRouter = express.Router()

resetRouter.route('/reset')
    .get(getReset)

export default resetRouter;