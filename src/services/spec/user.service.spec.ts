import {getAllUsers} from "../user.service";
import {UserModel} from "../../models/user.model";

describe('call user get', () =>  {
    let expectedUsers: UserModel[] = [
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

    it('says list of all users', () =>  {
        expect(getAllUsers).toEqual(expectedUsers)
    })
});