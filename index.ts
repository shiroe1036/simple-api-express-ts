import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { Routes } from './src/routes/routes';

dotenv.config();

const app = express();

mongoose.Promise = global.Promise;

const mongdbUrl: string = process.env.URL_MONGODB

mongoose.connect(mongdbUrl).then(() =>
    console.log('Notre base de donnée marche bien :) ;) ')
).catch((error: any) => {
    console.log("mongo error ", error.message);
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

Routes(app);

app.get('/', (req, res) =>
    res.send(`notre serveur a été demarer sur le port : ${process.env.PORT}`)
);

console.log(process.env.PORT_data)

app.listen(8000, () => {
    console.log(`Notre serveur est en marche dans le port 8000`)
});

