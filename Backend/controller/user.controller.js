import { User } from "../models/user.models.js"
import { v2 as cloudinary } from 'cloudinary';

export const register = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ message: "User photo is reuired" })
    }
    const { photo } = req.files
    const allowedFormats = ["image/jpeg", "image/png", "image/webp",]
    if (!allowedFormats.includes(photo.mimetype)) {
        return res.status(400).json({ message: "Invalid photo format . Only jpg and png are allowed" })
    }

    const { email, name, password, education, role } = req.body
    if (!email || !name || !password || !education || !role || !photo) {
        return res.status(400).json({ message: "Please fill all the required fields" })
    }
    const user = await User.findOne({ email })
    if (user) {
        return res.status(400).json({ message: "User already exists with this email" })
    }
    //Cloudinary response
    const cloudinaryResponse = await cloudinary.uploader.upload(
        photo.tempFilePath
    )
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.log(cloudinaryResponse.error);

    }

    const newUser = new User({
        email, name, password, education, role, photo: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.url
        }
    })

    await newUser.save()
    if (newUser) {
        res.status(201).json({ messag: "User registered successfully", newUser })
    }
}