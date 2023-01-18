import express from "express";
import { getAllActivities, addActivity } from "../../services/ActivityService";
import { IActivity, ActivityModel } from "../../types/Activity";

const router = express.Router();

router.get('/get-all', (req, res, next) => {
    getAllActivities()
        .then(result => {
            res.json(result.map(_item => new ActivityModel(_item)));
        })
        .catch(err => {
            console.log("$$$$ Error on router.get $$$$");
            console.log(err);
            return null;
        })
});

router.post('/', (req, res, next) => {
    const model = req.body;
    addActivity(model)
        .then(result => res.json(new ActivityModel(result)))
        .catch(err => {
            console.log("$$$$ Error on router.post $$$$");
            console.log(err);
            return null;
        })
});

export default router;