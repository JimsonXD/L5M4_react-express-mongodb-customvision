import mongoose from "mongoose";

export const initDB = () =>
mongoose.connect('mongodb://localhost:27017/cars');