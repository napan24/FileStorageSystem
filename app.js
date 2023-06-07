const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const user = require('./models/user');
const SavedFiles = require('./models/SavedFiles');
const db = "mongodb+srv://napan:1234@cluster0.1iy39cq.mongodb.net/?retryWrites=true&w=majority";

app.post("/",(req,res)=>{
    const {email,password}=req.body;
    console.log(email);
    console.log(password);
    user.find({ email: email,password:password })
        .then((exist) => {
            console.log(exist);
            if (exist) {
                return res.json({exist });
            }
            else {
                return res.json({ message: "User Does Not Exist" });
            }
        })
})
app.post("/findUsers",(req,res)=>{
    user.find({})
        .then((exist) => {
            if (exist) {
                return res.json({exist });
            }
            else {
                return res.json({ message: "User Does Not Exist" });
            }
        })
})
app.post("/getSavedFiles",(req,res)=>{
    const {email}=req.body;
    SavedFiles.find({ email: email})
        .then((exist) => {
            if (exist) {
                return res.json({exist });
            }
            else {
                return res.json({ message: "User Does Not Exist" });
            }
        })
})
app.post("/saveFile",(req,res)=>{
    const {email,item}=req.body;
    const data = new SavedFiles({
        email: email,
        name: item
    });
    data.save();
    return res.json({ message: "Success" });
})



server=app.listen(8000, () => {
    console.log("server at port 8000");
});
mongoose.connect(db, ()=>{
    console.log("connected");
})