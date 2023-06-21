const mongoose=require('mongoose');
const SavedFiles=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});
const scheme=mongoose.model('SAVEDFILES',SavedFiles);
module.exports=scheme;