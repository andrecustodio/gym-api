import { Document } from 'mongoose';

export class UserModel {
    userId: String;
    firstName: String;
    fullName: String;
    email: String;
    password: String;

    constructor(dbUser: IUser) {
        this.firstName = dbUser.firstName;
        this.fullName = dbUser.fullName;
        this.email = dbUser.email;
        this.password = dbUser.password;
        this.userId = dbUser.id;
    }
}

export interface IUser extends UserModel, Document { }