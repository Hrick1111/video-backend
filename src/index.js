import connectDB from "./db";
import dotenv from "dotenv";


dotenv.config({path: './env'});



connectDB()



































/*
import express from "express";
const app = express()
import { DB_NAME } from "./constants";

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("ERROR", error);
            throw(error)})

        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`)
        })


        
    } catch (error) {
        console.error("ERROR", error);
        throw(error)
        
    }
}) */