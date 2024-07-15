import mongoose from "mongoose";


export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://aasthasijapati:rinjhaS@cluster0.uzfiqk2.mongodb.net/todo-app');
    console.log("Database Connected");
}