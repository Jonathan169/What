var router = require("express").Router();
var db=require("../models");
var user=db.User;
// const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

module.exports=function(passport){
    router.post("/auth/signup",function(req,res){
        console.log(req.body.email)
        console.log("found router")
        var email = req.body.email,
        password = req.body.password,
        shopName=req.body.shopName,
        name=req.body.description;
        user.find({email:email}).then((err,data)=>{
            if(err||data){
                res.json("server error or user found")
            }
            else{
                user.insertOne({
                    email:email,
                    password:user.hashPassword(password),
                    name:name,
                    shopName:shopName
                }).then(data=>res.json(data))
            }
        })
    })

    router.post("/auth/login",(req,res,next)=>{
        passport.authenticate('local',(err,user,info)=>{
            if(err){
                return next(err)
            }
            else if (user){
                req.login(user,(err)=>{
                    next(err)
                })
                res.json({success:req.user?"Yes":"No",user:req.user})
            }
            else{
                res.json("server error")
            }
        })
    })

    router.get("/auth/logout",function(req,res){
        const old_user=req.user;
        req.logout();
        res.json({success:(req.user?"NO":"Yes"),user:req.user,OldUser:old_user})
    })

    return router;
}


