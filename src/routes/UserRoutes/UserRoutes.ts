import express from 'express';
import UserCollection from '../../data/models/UserCollection';
import { getAllUsers, addUser } from '../../services/UsersService';
import { IUser, UserModel } from '../../types/User';

const router = express.Router();

router.get('/get-all', async (req, res, next) => {
    try {
        getAllUsers().then((result) => {
            res.json(result.map((_result: IUser) => {
                return new UserModel(_result);
            }));
        });
    } catch (error) {
        console.log("$$$$ Error on router.get $$$$");
        console.log(error);
        next();
    }
});

router.post('/anotherpost', (req, res, next) => {
    res.json(req.body);
})

router.post("/", async (req, res, next) => {
    try {
        const model = req.body;
        UserCollection.findOne({ email: model.email })
            .exec()
            .then((existingUser: IUser | null) => {
                if (existingUser) {
                    return Promise.reject(res.status(409).json({ message: "User already exists" }));
                }

                return addUser(model);
            }).then((createdUser) => res.json(createdUser as UserModel));
    } catch (error) {
        console.log("$$$$ Error on router.add $$$$");
        console.log(error);
        next();
    }
});


export default router;
