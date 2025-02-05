import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionDB = mongoose.connect(`${process.env.MONGODB_URI}/VidhanamDosc`).then(()=>{
    console.log("DB Connected");
    
})

export default connectionDB;