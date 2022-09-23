//  import express from 'express'
// // import dotenv from 'dotenv'
// import userrouter from './routes/user.js'

// // import cors from "cors";
// import mongoose from 'mongoose'


// // dotenv.config()

// const app = express()

// const PORT = process.env.PORT || 3000

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// // app.use(cors())

// app.use("/",userrouter)



// mongoose.connect("mongodb+srv://dev:dev@cluster0.nahdsvl.mongodb.net/node?retryWrites=true&w=majority"
// ).then(()=>{
//     console.log("connected to mongodb")

// })


// .then(() => {

//     console.log("connect to mongodb");


// })



// app.listen(PORT, () => {

//     console.log("server start at port", PORT);
// })


import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import router from './routes/book.js'

dotenv.config()
const app=express();


// midleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// routes
app.use("/",router)


const PORT=process.env.PORT||3000
// connect mongo db atlas
mongoose.connect(process.env.MONGO_URL,{usenewurlparser:true}).then(()=>{
    console.log("connected to mongodb atlas")
}).catch(error=>{
console.log("something wrong")
})

// server port
app.listen(PORT,()=>{
    console.log("server started at port http://localhost:3000");
})