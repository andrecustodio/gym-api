import express, { Express } from "express";
// import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
// import UsersRouter from './routes/UserRoutes/UserRoutes';
import router from './routes/index';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
// app.use(UsersRouter);

const mongoURL = process.env.MONGO_URL ?? "not found";
const dbName = process.env.MONGO_DB ?? "not found";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.set('strictQuery', false);

mongoose
    .connect(mongoURL, { dbName: dbName })
    .then((conn) => {
        console.log("#### MongoDb has Connected ####");
        app.listen(PORT, () => {
            console.log(`#### App started. Running on localhost:${PORT} ####`);
        });
    })
    .catch(err => {
        console.log("#### Error Connecting to mongoDb ####");
        console.log(err);
        process.exit();
    });


    // export default () => {
    //     const app: Express = express();
    
    //     const PORT: string | number = process.env.PORT || 4000;
    
    //     app.use(cors());
    //     app.use(UsersRouter);
    
    //     const mongoURL = process.env.MONGO_URL ?? "not found";
    //     const options = { useNewUrlParser: true, useUnifiedTopology: true };
    
    //     mongoose.set('strictQuery', false);
    
    //     mongoose
    //         .connect(mongoURL)
    //         .then(() => {
    //             console.log("#### MongoDb has Connected ####");
    //             app.listen(PORT, () => {
    //                 console.log(`#### App started. Running on localhost:${PORT} ####`);
    //             });
    //         })
    //         .catch(err => {
    //             console.log("#### Error Connecting to mongoDb ####");
    //             console.log(err);
    //             process.exit();
    //         });
    // }