// @ts-ignore
import express from 'express';
import {addUser, deleteUser, getUserById, getUsers, updateUser} from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.route('/user')
    .get(getUsers)
    .post(addUser)

userRouter.route('/user/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
export default userRouter;
