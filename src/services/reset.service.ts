import {modifyUser} from "./user.service";

export const resetDeposit = (userId: string) => {
    modifyUser(userId, 0)
}