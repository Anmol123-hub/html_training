const express = require("express")
let app = express()

app.use(express.urlencoded({extended : true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/form.html")
})

app.post("/",(req,res)=>{

    console.log(req.body)

})

app.listen(1010,"localhost",(error)=>{
    if(error)
    console.log(error)
    else
    console.log("working")
})