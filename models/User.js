import mongoose, { Schema } from 'mongoose';
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: {
        type: string,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: {unique: true}
    },
    password:{
        type: string,
        required: true,
    }
})

export const User = model('user', UserSchema);