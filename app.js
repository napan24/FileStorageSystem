const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const user = require('./models/user');

const db = "mongodb+srv://napan:1234@cluster0.1iy39cq.mongodb.net/?retryWrites=true&w=majority";

app.post("/",(req,res)=>{
    const {email,password}=req.body;
    // const data = new user({
    //     email: "abc",
    //     password: "1234"
    // });
    // data.save();
    // return res.json({ message: "Success" });
    user.find({ email: email,password:password })
        .then((exist) => {
            if (exist) {
                return res.json({exist });
            }
            else {
                return res.json({ message: "User Does Not Exist" });
            }
        })
})




server=app.listen(8000, () => {
    console.log("server at port 8000");
});
mongoose.connect(db, ()=>{
    console.log("connected");
})