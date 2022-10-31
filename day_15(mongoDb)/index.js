const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

let app = express()
app.use(express.json())

let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId
let url = "mongodb+srv://admin:qHmusj3z9VSQZM7x@cluster0.t0n6iqu.mongodb.net/valtechdb?retryWrites=true&w=majority"


let Hero = mongoose.model("Hero",Schema({
    id:ObjectId,
    title:String,
    firstname:String,
    lastname:String
}))

mongoose.connect(url)
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("Error")
})
app.get("/",(req,res)=>{
    Hero.find().then(dbrepns =>{
        res.json(dbrepns)
    })
    
})

app.listen(8080,"localhost",function(error){
    if(error){
        console.log("error ", error)
    }else{
        console.log("sever is now live on localhost:8080")
    }
})