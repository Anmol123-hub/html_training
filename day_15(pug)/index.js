const express = require("express")
let app = express()

app.get("/",(req,res)=>{
    res.render("index.pug",{
        compname : "Valtech"
    })
})
app.get("/home",(req,res)=>{
    res.render("about.pug",{
        nameI : "Index"
    })
})

app.listen(1010,"localhost",(err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("Working")
    }
})