require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Cors = require("cors")
const Url = process.env.MONGO_URL
const fitnessRoute = require("../src/Routes/Fitness/fitness")

// mongoose connection
async function Db() {
    await mongoose.connect(Url)
}
Db()
.then(()=>{
    console.log("Database connected");
    
})
.catch((err)=>{
   console.log("Error",err);
})


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(Cors({origin:"http://localhost:5173",credentials:true}))

// routes
app.use("/fitness",fitnessRoute)





// default error handling middlewaew

app.use((err,req,res,next)=>{
    let {status = 500,message="Error"}=err
    res.status(status).json(message)
})

app.listen(8002,()=>{
    console.log("SERVER LISTENING ON PORT 8002");
})