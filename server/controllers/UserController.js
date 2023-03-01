const userModel = require("../models/UserModel");

module.exports.getUser =  async function (req,res){
    //get all users from data base...
    try {
        let id = req.id;
        let user = await userModel.findById(id);
        res.json({message: "users retrived" , user});
    }
    catch(err){
        res.json({
            message: err.message
        });
    }
}

module.exports.allUser = async function (req, res) {
    //let {id}=req.params;
    try{
        let allUsers = await userModel.find();
        res.json({ 
            msg: "user id is ", 
            allUsers,
        });
    }
    catch(err){
        res.json({
            message: err.message,
        });
    }
};