import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    passward: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
})

const Register = mongoose.model("register", registerSchema)

export default Register
