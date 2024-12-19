import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js"

// here we will receive the id of user
const createTokenAndSaveCookies = async (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d"
    })
    res.cookie("jwt", token, {
        httpOnly: true, // protects from xss attack
        secure: true,
        sameSite: "strict" // csrf protection
    })
    await User.findByIdAndUpdate(userId, { token })
    return token;
}

export default createTokenAndSaveCookies