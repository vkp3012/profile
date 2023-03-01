const userModel = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");

module.exports.signup = async function(req,res){
    try {
        let data = req.body;
        let user = await userModel.create(data);
        if(user){
            res.json({
                msg : "user signed up",
                user,
            });
        }else{
            res.json({
                msg : "user could not be signed up"
            })
        }
    } catch (err) {
        res.json({
            err : err.message
        })
    }
}

module.exports.login = async function(req,res) {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({email : email});
        if(user){
            if(password == user.password){
                let uid = user["_id"];
                var token = jwt.sign({payload : uid},process.env.TOKEN_SECRET)
                res.cookie("login",token);
                res.json({
                    msg : "user logged in"
                })
            }else{
                res.json({
                    msg : "wrong credentials"
                })
            }
        }
    } catch (err) {
        res.json({
            err : err.message
        })
    }
}

module.exports.logout = async function(req,res) {
    res.cookie("login",{maxAge:1});
    res.json({
        msg : "user logged out"
    })
}