import { Document } from 'mongoose';

export class UserInformationModel {
    userId: String;
    weight: number;
    height: number;
    fatPercentage: number;

    constructor(dbModel: IUserInformation){
        this.userId = dbModel.userId;
        this.weight = dbModel.weight;
        this.height = dbModel.height;
        this.fatPercentage = dbModel.fatPercentage;
    }
}

export interface IUserInformation extends UserInformationModel, Document { }