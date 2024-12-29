import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import { v2 as cloudinary } from 'cloudinary';
import cookieParser from 'cookie-parser';
import cors from "cors"

import userRoute from "./routes/user.routes.js"
import blogRoute from "./routes/blog.routes.js"

dotenv.config()
const app = express()


const port = process.env.PORT
const MONGO_URL = process.env.MONGO_DB_URI

//middleware
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: process.env.FRONT_END_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

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
app.use("/api/blogs", blogRoute)

// Cloudinary 

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_KEY_SECRET
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})