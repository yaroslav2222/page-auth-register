import mongoose from "mongoose";

export const connectMongo = () => {
    mongoose.connect("mongodb+srv://user:root@cluster0-vrbhv.mongodb.net/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected DB..')
};
