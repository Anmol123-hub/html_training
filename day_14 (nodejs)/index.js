let http = require("http")
const fs = require("fs")
let name1 = "anmol"
let server = http.createServer((req,res)=>{
    if(req.url == "./favicon.ico"){
        res.write()
        res.end()
    }
    else if(req.url == "/" ){
        let htmlContent = fs.readFileSync("./index.html","utf-8")
        res.writeHead(200,{
            "Content-Type" : "text/html"
        })
        res.write(htmlContent.replace("{com}",name1).replace("{com}",name1))
        res.end()
    }
    else{
        fs.readFile("./"+req.url,(err,data)=>{
            if(err){
                res.writeHead(200,{"Content-Type": "text/plain"})
                res.end("<h1>Not found </h1>")
            }
            else{
                res.writeHead(200,{
                    "Content-Type" : "text/html"
                })
                // res.write()
                res.end(data)
            }
        })
    }
})
server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error",error)
    }
    else{
        console.log("Working")
    }
})