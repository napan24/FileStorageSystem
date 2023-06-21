const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const user = require('./models/user');
const SavedFiles = require('./models/SavedFiles');
const SavedForm=require('./models/SaveForm');
const ConfirmForm=require('./models/ConfirmForm');
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
app.post("/saveConfirmFile",(req,res)=>{
    const {url,email}=req.body;
    const data = new ConfirmForm({
        email: email,
        url: url
    });
    data.save();
    return res.json({ message: "Success" });
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
app.post("/saveRole",(req,res)=>{
    const {email,role}=req.body;
    user.findOneAndUpdate(
        { "email": email },
        { "$set": { "Role": role } },
        { "new": true, "upsert": true },
        function (err) {
            if (err) { // err: any errors that occurred
                console.log(err);
            }
        })
    return res.json({ message: "Success" });
})
app.post("/approve",(req,res)=>{
    const {name}=req.body;
    SavedForm.findOneAndUpdate(
        { "name": name },
        { "$set": { "Approve": true } },
        { "new": true, "upsert": true },
        function (err) {
            if (err) { // err: any errors that occurred
                console.log(err);
            }
        })
    return res.json({ message: "Success" });
})
app.post("/markAsImportant",(req,res)=>{
    const {name}=req.body;
    SavedForm.findOneAndUpdate(
        { "name": name },
        { "$set": { "important": true } },
        { "new": true, "upsert": true },
        function (err) {
            if (err) { // err: any errors that occurred
                console.log(err);
            }
        })
    return res.json({ message: "Success" });
})
app.post("/saveForm",(req,res)=>{
    const {name,age,gender,address,earAnomalies,noseAnomalies,throatAnomalies,rightEarValue,leftEarValue,Hz500,Hz1000,Hz2000,Hz5000,
        treatmentRecommended,ThroatCovid,NoseCovid,ThroatInfectionDetected,NoseInfectionDetected,InfectionDescriptionNose,InfectionDescriptionThroat}=req.body;
        const data = new SavedForm({
            name:name,
            age:age,
            gender:gender,
            address:address,
            earAnomalies:earAnomalies,
            noseAnomalies:noseAnomalies,
            throatAnomalies:throatAnomalies,
            rightEarValue:rightEarValue,
            leftEarValue:leftEarValue,
            Hz500:Hz500,
            Hz1000:Hz1000,
            Hz2000:Hz2000,
            Hz5000:Hz5000,
            treatmentRecommended:treatmentRecommended,
            ThroatCovid:ThroatCovid,
            NoseCovid:NoseCovid,
            ThroatInfectionDetected:ThroatInfectionDetected,
            NoseInfectionDetected:NoseInfectionDetected,
            InfectionDescriptionNose:InfectionDescriptionNose,
            InfectionDescriptionThroat:InfectionDescriptionThroat
        });
        data.save();
        return res.json({ message: "Success" });
})
app.post("/getForms",(req,res)=>{
    SavedForm.find({})
        .then((exist) => {
            if (exist) {
                return res.json({exist });
            }
            else {
                return res.json({ message: "User Does Not Exist" });
            }
        })
})
app.post("/getReqForm",(req,res)=>{
    const {name}=req.body;
    SavedForm.find({name:name})
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