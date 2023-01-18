import mongoose, { model, Schema } from "mongoose";
import { IUser } from '../../types/User';

export const UserCollection: Schema = new mongoose.Schema({
    firstName: String,
    fullName: String,
    email: { type: String, unique: true },
    password: String
}, { timestamps: true, collection: "User" });

export default model<IUser>('User', UserCollection);