import UserCollection from "../data/models/UserCollection";
import { IUser } from "../types/User";


// export class UsersService {
//     const getAllUsers = () => {
//         UserCollection.find()
//             .then((result) => {
//                 return result;
//             }).catch(err => {
//                 console.log("$$$$ Error on getAllUsers $$$$");
//                 console.log(err);
//                 return null;
//             })
//     };

//     const addUser = (model: IUser) => {
//         model.save()
//             .then((result) => {
//                 return result;
//             }).catch(err => {
//                 console.log("$$$$ Error on getAllUsers $$$$");
//                 console.log(err);
//                 return null;
//             })
//     };
// }

const getAllUsers = async (): Promise<any> => {
    return await UserCollection
        .find()
        .exec()
        .then((result) => {
            return result;
        }).catch(err => {
            console.log("$$$$ Error on getAllUsers $$$$");
            console.log(err);
            return null;
        });
};

const addUser = (model: any): Promise<any> => {
    console.log(model);

    var document: IUser = new UserCollection({
        ...model
    });

    return document.save()
        .then((result) => {
            return result;
        }).catch(err => {
            console.log("$$$$ Error on getAllUsers $$$$");
            console.log(err);
            return null;
        })
};

export { getAllUsers, addUser };
