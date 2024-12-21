import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js"


//Authentication Token
export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (!token) {
            return res.status(401).json({ error: "Please login first" })
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        // Find user and attach to request
        const user = await User.findById(decoded.userId)
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        req.user = user
        next()

    } catch (error) {
        console.log("Error occurred in Authentication:", error);
        return res.status(403).json({ error: "User not authenticated" })
    }
}


// Authorization
export const isAdmin = (...roles) => {
    return (req, res, next) => {
        console.log("Current user role:", req.user.role);
        console.log("Allowed roles:", roles);

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: `User with role ${req.user.role} not allowed` })
        }
        next()
    }
}