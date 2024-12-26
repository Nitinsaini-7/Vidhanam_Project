import mongoose from "mongoose";
const connectionDB = mongoose.connect("mongodb://localhost:27017/formData").then(()=>{
    console.log("DB Connected");
    
})

export default connectionDB;