const express = require("express")
const  mongoose  = require("mongoose")
let config = require("./config.json")
let session = require("client-sessions")
const bcrypt = require("bcrypt")
const csurf = require("csurf");
let app = express()

app.use(express.urlencoded({extended: true}))
app.use(session({
    cookieName: "valtech",
    secret: "jzlvbsjdlgbisldfjbsdlfjkvbrshyiuotyuiyuio",
    duration:30*60*1000,
    activeDuration:10 * 60 *1000,
    cookie : {
        ephemeral:true

    }
}))
app.use(csurf({  sessionKey : "valtech" }));
// app.use(function(req, res, next){
//     if(req.valtech && req.valtech.user){
//         User.findOne({ email : req.valtech.user.email }, function(err, user){
//             if(user){
//                 // req.user = user;
//                 req.valtech.user = req.registeredUser = user;
//                 // delete req.user.password;
//                 // res.locals.user = req.user;
//             }
//             next();
//         })
//     }else{
//         next();
//     }
// })
let requireLogin = function(req, res, next){
    if(!req.registeredUser){
        res.redirect("/login");
    }else{
        next();
    }
}
let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId
var User = new mongoose.model("User",({
    id: ObjectId,
    firstname:String,
    lastname:String,
    email:{type:String,unique:true},
    password:String
}))
const string_mongo = `mongodb+srv://${config.username}:${config.password}@cluster0.t0n6iqu.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
mongoose.connect(string_mongo).then((res)=>console.log("Connected"))
.catch((err)=>console.log("Error",err))

app.get("**",(req,res)=>{
    res.render("home.pug")
})

app.get("/login",(req,res)=>{
    res.render("login.pug", { csrfToken : req.csrfToken() })
})
app.post("/login",(req,res)=>{
    let encoded = btoa(req.body.password);
    User.findOne({email:req.body.email},function(error,user){
        if(!user){
            res.render("login.pug",{
                error : "No user found"
            })
        }
        else{
            if(encoded === user.password){
                req.valtech.user = user
                res.redirect("/profile")
            }
            else{
                res.render("login.pug",{
                    error : "Invalid Credentials"
                })
            }
        }
    })
})
app.post("/register",(req,res)=>{
    let encoded = btoa(req.body.password);
    var user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password:encoded
    })
    user.save((err)=>{
        let err1 = ""
        if(err){
            if(err.code == 11000){
                err1 = "Error is there because of duplicate"
            }
            else{
                err1 = "Something went wrong"
            }
            res.render("register.pug",{
                err1
            })
        }
        else{
            res.redirect("/profile")
            console.log("Done")
        }
    })
})

app.get("/register",(req,res)=>{
    res.render("register.pug", { csrfToken : req.csrfToken() })
})
app.get("/logout",(req,res)=>{
    req.valtech.reset()
    res.redirect("/")
})


app.get("/profile",(req,res)=>{
    res.render("profile.pug")
})
app.listen(config.port,config.host,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Working")
    }
})
