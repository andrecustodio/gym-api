import { Document } from "mongoose";

export class ActivityModel {
    activityName: String;
    description: String;
    references: Array<string>;

    constructor(dbModel: IActivity) { 
        this.activityName = dbModel.activityName;
        this.description = dbModel.description;
        this.references = dbModel.references;
    }
}

export interface IActivity extends ActivityModel, Document { }