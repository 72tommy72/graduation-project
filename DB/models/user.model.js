
import mongoose, { model, Schema } from "mongoose";

//schema
export const userSchema = new Schema({
    userName: {
        type: String,
        // unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        // required: true,
        // unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        // required: true,
    },
    isConfirmed: {
        type: Boolean,
        default: false,
    },
    isLogged: {
        type: Boolean,
        default: false,
    },
    profileImage: {
        url: {
            type: String,
            default: "https://res.cloudinary.com/dulsrsc7l/image/upload/v1708529706/l60Hf_flogsg.png"
        },
        id: {
            type: String,
            default: "l60Hf_flogsg"
        },
    },
    // coverImg: [{ url: { type: String, require: true }, id: { type: String, require: true } }],
    
    status: {
        type: String,
        enum: ['online', 'offline'],
        default: 'offline'
    },
    category: {
        type: String,
        enum: ['Infants', 'Young children', 'Adult males', 'Adult female not p', 'Adult female p'],
    },
    illnesses : String,
    vegetarian : String,
    medications : String,
    period : String,
    height : Number,
    weight: Number,
    b12 : String,
    // role: {
    //     type: String,
    //     enum: ["admin", "user"],
    //     default: 'user'

    // },
    phone: String,
    forgetCode: String,
    activationCode: String,



}, { timestamp: true })

//model
export const User = mongoose.models.User || model("User", userSchema)