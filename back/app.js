import express from 'express';
import cors from 'cors'
import connectionDB from './config/db.js'
import userRouter from './routes/userRoute.js';
import dataRouter from './routes/dataRoute.js'
import usersDataRouter from './routes/usersData.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express()
// const { default: userRouter } = require('./routes/userRoute.js');


connectionDB;
// dataModel;

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("hii")
})

app.use("/data", dataRouter)
app.use('/api/user', userRouter)
app.use('/usersData',usersDataRouter)
// app.use("/datashow", dataRouter)

app.listen(3000, ()=>{
    console.log("Server running");
    
})