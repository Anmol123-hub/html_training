const express = require('express')
const app = express()
var port = process.env.PORT
console.log(port)



app.get("/",(req,res)=>{
    // res.sendFile(__dirname+"/public/index.html")
    res.render("index.ejs",{
        compname : "Valtech"
    })

})
app.get("/about",(req,res)=>{
    // res.sendFile(__dirname+"/public/about.html")
    res.render("about.ejs",{
        compname : "Valtech"
    })

})


app.listen(port,"localhost",(err)=>{
    if(err){
        console.log("not working")
    }
    else{
        console.log(`Working with port number - ${port}`)
    }
})