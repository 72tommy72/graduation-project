import mongoose, { model, Schema, Types } from "mongoose";
//schema
export const imageSchema = new Schema({
    image: {
        url: { type: String, required: true },
        id: { type: String, required: true },
    },
    createdBy: { type: Types.ObjectId, required: true, ref: "User" },

},
    { timestamps: true });

//model
export const ImageModel = mongoose.models.Image || model("Image", imageSchema)