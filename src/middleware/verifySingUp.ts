import mongoose, { mongo } from 'mongoose';
import { UserSchema } from '../model/User';

const User = mongoose.model('User', UserSchema);

const checkDuplicateUsernameOrEmail = (req:any, res:any, next: any): void => {
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }

        if(user){
            res.status(400).json({
                error: true,
                message: "Failed! Username is already in use!"
            });
            return;
        }

        User.findOne({
            email:req.body.email
        }).exec((err, user) => {
            if(err){
                res.status(500).json({
                    error: true,
                    message: err
                });
                return;
            }

            if(user){
                res.status(400).json({
                    error: true,
                    message: "Failed! Email is already in use!"
                });
                return;
            }

            next();
        });
    });
}

export const verifySingUp = {
    checkDuplicateUsernameOrEmail
}