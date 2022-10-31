let axios = require("axios")
let fs = require("fs")

axios.get("https://casatela1.000webhostapp.com/")
.then(res => fs.writeFileSync("data/data.html",res.data,"utf-8"))
.catch(error => console.log(error))