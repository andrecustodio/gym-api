import ActivityCollection from "../data/models/ActivityCollection";
import { IActivity } from "../types/Activity";

const getAllActivities = () => {
    return ActivityCollection
        .find()
        .exec()
        .then(result => { return result; })
        .catch(err => {
            console.log("$$$$ Error on getAllActivities $$$$");
            console.log(err);
            return null;
        });
}

const addActivity = (model: any) => {
    console.log(model);

    var document: IActivity = new ActivityCollection({
        ...model
    });

    return document
        .save()
        .then(result => { return result; })
        .catch((err) => {
            console.log("$$$$ Error on addActivity $$$$");
            console.log(err);
            return null;
        });
}

export { getAllActivities, addActivity };