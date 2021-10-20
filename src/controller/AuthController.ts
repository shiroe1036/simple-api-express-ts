import mongoose from 'mongoose';
import { UserSchema } from '../model/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const User = mongoose.model("User", UserSchema);

export const signup = async (req:any, res:any): Promise<any> => {
    const signupUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    try {
        const signup = await signupUser.save();

        res.status(200).json({
            error: false,
            message: signup
        });
    } catch (error: any) {
        return res.status(400).json({
            error: true,
            message: error.message
        });
    } 
}

export const signin = async (req: any, res: any): Promise<any> => {
    try {
        const signin = await User.findOne({
            username: req.body.username
        });

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            signin.password
        );

        if(!passwordIsValid){
            return res.status(401).send({
                error: false,
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        let token = jwt.sign({ id: signin._id }, process.env.SECRETE, {
            expiresIn: 86400 //24h
        });

        res.status(200).json({
            error: false,
            message: {
                username: signin.username,
                email: signin.email,
                accessToken: token
            }
        });
    } catch (error: any) {
        return res.status(200).json({
            error: true,
            message: error.message
        });
    }
}