import mongoose, { model, Schema } from "mongoose";
import { IActivity } from '../../types/Activity';

export const ActivityCollection: Schema = new mongoose.Schema({
    activityName: String,
    description: String,
    references: Array<String>
}, { timestamps: true, collection: "Activity" });


export default model<IActivity>('Activity', ActivityCollection);