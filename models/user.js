const mongoose=require('mongoose');
const user=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Role:{
        type:String
        ,default:"Student"
    },
    name:{
        type:String,
        default:"ADD YOUR NAME"
    }
});
const scheme=mongoose.model('USER',user);
module.exports=scheme;