const express = require("express")
let app = express()
app.set(express.json())
let mongoose = require("mongoose")
const cors = require("cors")
let errorHandler = require("./utils").errorHandler
const config = require("./config.json")

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId
let Hero = mongoose.model("Hero",Schema({
    id : ObjectId,
    title :{type:String,unique:true} , 
    firstname : String,
    lastname : String
}))
const string_mongo = `mongodb+srv://${config.username}:${config.password}@cluster0.t0n6iqu.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
mongoose.connect(string_mongo).then((res)=>console.log("Connected"))
.catch((err)=>console.log("Error",err))
// app.get("/",(req,res)=>{
//     res.send("Hello from express")
// })

//Create

setTimeout(()=>{
    let hero = new Hero({
        title:"Superman",
        firstname:"Anmol",
        lastname: "Varshney"
    })
    hero.save()
    console.log("DB updated")
},5000)

//update

// setTimeout(()=>{
//     Hero.findByIdAndUpdate({_id: "633a8cd90be20649bd46f65a"})
//     .then(dbres=>{
//         dbres.title = "joker"
//         dbres.save().then(updateRes=>console.log("hero info updated"))
//     })
// },5000)

app.listen(config.port,config.host,errorHandler)