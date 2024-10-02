import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Plz enter your Username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Plz enter your Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Plz enter your Password"],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isVarified: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})
const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User;