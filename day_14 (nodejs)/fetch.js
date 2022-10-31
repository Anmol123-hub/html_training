let fetch = require("fetch")
const fs = require("fs")

fetch.fetchUrl("https://casatela1.000webhostapp.com/",function(error,meta,data){
    if(error){
        console.log(error)
    }
    else{
       fs.writeFileSync("data/data.html",data,"utf-8")
    }
})