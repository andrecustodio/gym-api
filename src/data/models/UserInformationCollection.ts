import mongoose, { model, Schema } from "mongoose";
import { IUserInformation } from '../../types/UserInformation'

export const UserInformationCollection: Schema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.String, },
    weight: mongoose.Schema.Types.Number,
    height: mongoose.Schema.Types.Number,
    fatPercentage: mongoose.Schema.Types.Number
}, { timestamps: true, collection: "UserInformation" });

export default model<IUserInformation>("UserInformation", UserInformationCollection);