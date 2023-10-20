import express from "express";
import dotenv from 'dotenv';
import mongoose, { mongo } from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import userRoute from "./routes/users.js";
import tourRoute from "./routes/tours.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";
// const path=require('path')
dotenv.config()
const app=express()
const port=process.env.PORT || 8000;
const corsOptions={
    origin:true,
    credentials:true
}
mongoose.set("strictQuery",false);
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Mongodb database connected");
    }catch(err){
        console.log("DB connection failed",err)
    }
}

app.get('/',(req,res)=>{
    res.send("api is working")
})
app.use(express.json())
app.use(cors(corsOptions)) 
app.use(cookieParser())
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/reviews',reviewRoute);
app.use('/api/v1/bookings',bookingRoute);
//static files
// app.use(express.static(path.join(__dirname,'./frontend/build')))
// app.get('*',function(req,res){
//     res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
// })

app.listen(port,()=>{
    connect();
    console.log('server listening on port ',port);
})