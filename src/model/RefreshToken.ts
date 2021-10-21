import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';

const Schema = mongoose.Schema;

const RefreshTokenSchema = new Schema ({
    token: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    expiryDate: Date
}, {
    timestamps: true
});

RefreshTokenSchema.statics.createToken = async function (user){
    let expiredAt = new Date();

    expiredAt.setSeconds(
        expiredAt.getSeconds() + process.env.JWT_REFRESHE_EXPIRATION
    );

    let _token = uuidv4();

    let _object = new this({
        token: _token,
        user: user._id,
        expiryDate: expiredAt.getTime(),
    });

    console.log(_object);

    let refreshToken = await _object.save();

    return refreshToken.token;
};

RefreshTokenSchema.statics.verifyExpiration = (token) => {
    return token.expiryDate.getTime() < new Date().getTime();
}

export const RefreshToken = mongoose.model('RefreshToken', RefreshTokenSchema);
