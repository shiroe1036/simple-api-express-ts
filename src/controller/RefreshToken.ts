import mongoose from 'mongoose';
import { RefreshTokenSchema } from '../model/RefreshToken';

const RefreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

const createToken = (user: any): void => {
    // const refreshToken = new RefreshToken({
    //     token: 
    // })
} 