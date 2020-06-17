import express from 'express';
import *  as bodyParser from 'body-parser';
import {connectMongo} from "./dataAccess/dataBase/connect.db";
import {router} from "./features/user";

require('dotenv').config();
connectMongo();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next()
});

app.use("/", router);

app.listen("2424", function () {
    console.log("Сервер начинает прослушивание...");
});
