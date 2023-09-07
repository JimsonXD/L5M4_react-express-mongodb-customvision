import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: String,
    type: String,
    year: Number,
    color: String,
    imageUrl: String

});

export const Car = mongoose.model('car', carSchema);