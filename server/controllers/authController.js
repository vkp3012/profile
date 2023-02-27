const UserModel = require("../models/UserModel.js")

module.exports.signup = async function(req,res){
    try {
        let data = req.body;
        let user = await UserModel.create(data);
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