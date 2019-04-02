const express = require('express');
const mongoose = require('mongoose');
var logger = require("morgan");
const routes = require("./routes");
const path=require("path");
const passport=require("passport");
const session=require("express-session")
const cookieParser=require("cookie-parser")
const PORT= process.env.PORT || 3000;
const app = express();
var db= require("./models");
var User=db.User;
// Serve static assets
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
};
app.use(logger("dev"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/project3",{ useNewUrlParser: true });
mongoose.connection.once("open",function(){
  console.log("conneciton has been made")
}).on("error",function(err){
  console.log("connection error: \n",err)
});
// Set up dependencies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret:"secretSauce",
  saveUninitialized:false,
  resave:false
}))
app.use(passport.initialize())
app.use(passport.session());

// Add routes
// app.use(routes);
// app.get("*",(req, res)=>{
//   res.sendFile(path.join(__dirname,"./client/build/index.html"))
// })
app.post("/auth/signup",function(req,res){
  console.log(req.body)
  console.log("found app")
  var email = req.body.email,
  password = req.body.password,
  shopName=req.body.shopName,
  name=req.body.description;
  User.find({email:email}).then((err,data)=>{
      if(data){
        console.log("uh oh")
          res.json("server error or user found")
      }
      else{
        console.log("so far so good")
        var user=new User()
          User.create({
              email:email,
              password:user.hashPassword(password),
              name:name,
              shopName:shopName
          }).then(data=> console.log(data),res.json(data))
      }
  }).catch(err=>console.log(err))
})
const passportRote = require("./routes/auth")(passport);
require("./passport")(passport);
app.use('/auth', passportRote);

// Listener
app.listen(PORT, function () {
    console.log(`API Server listening on PORT ${PORT}`)
});
