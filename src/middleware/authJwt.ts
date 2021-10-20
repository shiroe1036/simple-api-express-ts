import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { UserSchema } from '../model/User';

const User = mongoose.model("User", UserSchema);

const catchError = (err: any, res: any): void => {
    if(err instanceof jwt.TokenExpiredError){
        return res.status(401).json({
            error: true,
            message: "Unauthorized! Access Token was expired!"
        });
    }

    return res.sendStatus(401).send({ message: "Unauthorized!" });
}

const verifyToken = (req:any, res:any, next:any): void => {
    let token = req.headers["x-access-token"];

    if(!token){
        return res.status(403).json({
            error: true,
            message: "No token provided!"
        });
    }

    jwt.verify(token, process.env.SECRETE, (err: any, decoded: any) => {
        if(err){
            return catchError(err, res);
        }
        req.userId = decoded.id;
        next();
    });
}

export const authJWT = {
    verifyToken
}