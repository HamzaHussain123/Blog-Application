import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import { v2 as cloudinary } from 'cloudinary';

import userRoute from "./routes/user.routes.js"

const app = express()
dotenv.config()


const port = process.env.PORT
const MONGO_URL = process.env.MONGO_DB_URI

//middleware
app.use(express.json())

//file upload middleware
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}))

// Database Code
try {
    mongoose.connect(MONGO_URL)
    console.log("Connected to MongoDB");

} catch (error) {
    console.log(error);

}


//Routes
app.use("/api/users", userRoute)

// Cloudinary 

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_KEY_SECRET
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})