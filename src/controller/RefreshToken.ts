import mongoose from 'mongoose';
import { RefreshTokenSchema } from '../model/RefreshToken';
import { v4 as uuidv4 } from 'uuid';

const RefreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

const createToken = (user: any): void => {
    let expiredAt = new Date();
    let _token = uuidv4();

    const refreshToken = new RefreshToken({
        token: _token
    })
} 