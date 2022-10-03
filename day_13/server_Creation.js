const http = require('http')
let server = http.createServer((req,res)=>{
    console.log(req)
    res.writeHead(200,({"Content-Type" : "text/html"}))
    res.write("<h1>Welcome to your life </h1>")
    res.end()
})

server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error",error)
    }
    else{
        console.log("Working")
    }
})