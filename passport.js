var localStrategy=require("passport-local").Strategy
var db= require("./models");
var user=db.User;

module.exports=passport=>{
    const serializeUser=(user,done)=>{
        const id=(user.id?user.id:user[0].id);
        console.log("serializing user: "+id)
        done(null,id)
    }
    const deserializeUser=(savedId,done)=>{
        console.log("deserialzing user: "+savedId)
        user.findOne({}).then(user=>{
            console.log("got user: "+user)
            done(null,user)
        }).catch(function(err){
            //check for errors...
              console.log("Failed to get user:", err)
              done(err, null)
          })
    }
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    passport.use(new localStrategy((email,password,done)=>{
        user.findOne({email:email}).then(data=>{
            console.log("promise after login attempt")
            if(data){
                let valid=user.comparePassword(password,data.password)
                if(valid){
                    done(null,data)
                }
                else{
                    console.log("not valid");
                    done(null,false)
                }
            }
            else{
                done(null,false)
            }
        })
    }))
}

