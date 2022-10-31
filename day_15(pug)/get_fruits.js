const express = require("express")
let app = express()
app.set("views","views1")
app.use(express.urlencoded({extended : true}))

let fruits=["Apple"]

app.get("/",(req,res)=>{
    res.render("send_data.ejs",{
        fruits
    })
})

app.post("/",(req,res)=>{
    fruits.push(req.body.fruits)
    res.redirect("/")
    res.end()
})

app.listen(1010,"localhost",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Working")
    }
})