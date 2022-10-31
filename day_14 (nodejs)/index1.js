let http = require("http")
const fs = require("fs")
const name = "anmol"
let server = http.createServer((req,res)=>{
    if(req.url === "/" || req.url == "/index.html"){
        let htmlContent = fs.readFileSync("./index.html","utf-8")
        res.writeHead(200,{
            "Content-Type" : "text/html"
        })
        res.write(htmlContent)
        res.end()
    }
    else if( req.url == "/about.html"){
        let htmlContent = fs.readFileSync("./about.html","utf-8")
        res.writeHead(200,{
            "Content-Type" : "text/html"
        })
        res.write(htmlContent)
        res.end()
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