import express from 'express'
import { addUserInformation, getUserInformationByUser } from '../../services/UserInformationService';
import { UserInformationModel } from '../../types/UserInformation';

const router = express.Router();

router.get('/:userId', (req, res, next) => {
    getUserInformationByUser(req.params.userId)
    .then(result => {
        const mapped = result?.map(_item => new UserInformationModel(_item));

        res.json(mapped);
    })
    .catch((err) => {
        console.log("$$$$ Error on router.get $$$$");
        console.log(err);
        return null;
    });
});

router.post('/', (req,res,next) => {
    addUserInformation(req.body)
    .then(result => {
        res.json(new UserInformationModel(result));
    })
    .catch((err) => {
        console.log("$$$$ Error on router.post $$$$");
        console.log(err);
        return null;
    });
});

export default router;