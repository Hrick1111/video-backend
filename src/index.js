import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);

    })
})
.catch((error) => 
    {console.log("mongodb connection error failed to connect database", error);

    })



































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