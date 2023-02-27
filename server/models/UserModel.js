const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    userName : {
        type:String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required: true,
        unique : true,
    },
    password : {
        type : String,
        require : true,
        minLength : 8,
    },
    confirmPassword : {
        type : String,
        minLength : 8,
    },
    role : {
        type : String,
        enum : ["admin","user"],
        default : "user"
    },
    profileImage : {
        type : String,
        // default : 'img/users/default.img',
    },
    resetToken : {
        type : String,
    }
})

userSchema.pre("save",function () {
    this.confirmPassword = undefined;
})

// userSchema.methods.createResetToken = async function() {
//     const resetToken = uuidv4();
//     this.resetToken = resetToken;
//     console.log("pumba",this);
//     this.confirmPassword = this.password
//     await this.save();
//     return resetToken;
// }

userSchema.methods.resetPasswordHandler = function (password ,confirmPassword){
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.resetToken = undefined;
}



//model 
const userModel = mongoose.model("userModel",userSchema);
module.exports = userModel;