const express = require("express")
const cors = require("cors")
let mongoose = require("mongoose")
let config = require("./config.json")
let errorHandler = require("./utils").errorHandler
let app = express()


let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId

let Hero = mongoose.model("Hero",Schema({
    id : ObjectId,
    title:String,
    firstname:String,
    lastname:String
}))
const string_mongo = `mongodb+srv://${config.username}:${config.password}@cluster0.t0n6iqu.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
mongoose.connect(string_mongo).then((res)=>console.log("Connected"))
.catch((err)=>console.log("Error",err))

app.use(express.static(__dirname+"/public/"))
app.use(express.json())
app.get("/data",(req,res)=>{
    Hero.find().then(dbres=>res.json(dbres))
    // res.send()
})
app.get("/getData/:hid",(req,res)=>{
    Hero.findById({_id:req.params.hid}).then((dbres)=>{
        res.send(dbres)
    })
    
})

app.post("/updateData/:hid",(req,res)=>{
    Hero.findByIdAndUpdate({_id:req.params.hid})
    .then((dbres)=>{
        dbres.title = req.body.title,
        dbres.firstname = req.body.firstname,
        dbres.lastname = req.body.lastname,
        dbres.save().then(updateRes=>res.send({message:"found"}))
    })
})

app.post("/data",(req,res)=>{
    let hero = new Hero(req.body)
    hero.save()
    .then(dbres=>{
        res.send({ message : "hero added to list"})
        console.log("db updated")
    })
    .catch(err=>errorHandler);

})
app.delete("/delete/:hid",(req,res)=>{
    Hero.findByIdAndDelete({_id:req.params.hid})
    .then(dbres=>res.send({message:"Hero deleted"}))
})


app.listen(config.port,config.host,errorHandler)