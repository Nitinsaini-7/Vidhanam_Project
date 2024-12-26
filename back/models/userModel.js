import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true,},
    password: {type: String, required: true},

}, {minimize:false})

const userModel = mongoose.models.users || mongoose.model('user', userSchema);

export default userModel;