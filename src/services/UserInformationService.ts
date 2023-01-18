import UserInformationCollection from "../data/models/UserInformationCollection";
import { IUserInformation } from "../types/UserInformation";

const getUserInformationByUser = (userId: String) => {
    return UserInformationCollection
        .find({ userId: userId })
        .exec()
        .then(result => result)
        .catch(err => {
            console.log("$$$$ Error on getUserInformationByUser $$$$");
            console.log(err);
            return null;
        })

};

const addUserInformation = (model: any) => {
    console.log(model);

    var document: IUserInformation = new UserInformationCollection({
        ...model
    });

    return document
        .save()
        .then(result => result)
        .catch((err) => {
            console.log("$$$$ Error on addUserInformation $$$$");
            console.log(err);
            return null;
        });
};

export { getUserInformationByUser, addUserInformation };