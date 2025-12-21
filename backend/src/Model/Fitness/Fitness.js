const mongoose = require("mongoose")
const Schema  = mongoose.Schema

const fitnessSchema  =  new Schema({
        name:{
            type:String,
            required:true
        },
         gender:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        height:{
            type:Number,
            required:true
        },
        weight:{
            type:Number,
            required:true
        },
        goal:{
            type:String,
            required:true
        },
        level:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        dietary:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now()
        }
        

})

const Fitness = mongoose.model("Fitness",fitnessSchema)
module.exports = Fitness