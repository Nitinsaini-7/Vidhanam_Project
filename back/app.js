import express from 'express';
import cors from 'cors'
import connectionDB from './config/db.js'
import userRouter from './routes/userRoute.js';
import dataRouter from './routes/dataRoute.js'
import usersDataRouter from './routes/usersData.js';
import dotenv from 'dotenv';
import paymentRouter from './routes/paymentRoutes.js';
dotenv.config();

const app = express()
const port = process.env.PORT || 3001;

connectionDB;
// dataModel;

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Api is running")
})

app.use("/api/data", dataRouter)
app.use('/api/user', userRouter)
app.use('/api/usersData',usersDataRouter)
app.use('/api/payment',paymentRouter)
// app.use("/datashow", dataRouter)

app.listen(port, ()=>{
    console.log(`Server running: ${port}`);
    
})