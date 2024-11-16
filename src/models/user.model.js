import e from "express";
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,

    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        trim: true,
        required: true
        
    },
    coverImage: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    refreshToken: {
        type: String,
        trim: true
    },
    watchHistory: [
        {
            videoId: {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        }
    ]
    
},{
    timestamps: true});

export default mongoose.model("User", userSchema);