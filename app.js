const express = require('express');
const app = express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const user = require('./models/user');
const signupmodel=require('./models/signupdetails');
const SavedFiles = require('./models/SavedFiles');
const SavedForm=require('./models/SaveForm');
const ConfirmForm=require('./models/ConfirmForm');
const db = "mongodb+srv://napan:1234@cluster0.1iy39cq.mongodb.net/?retryWrites=true&w=majority";

app.post("/",(req,res)=>{
    const {email,password}=req.body;
    console.log(password);
    user.find({ email: email})
        .then((exist) => {
            const pass=exist[0].password;
            console.log(exist);
            bcrypt.compare(password, pass).then(function(result) {
                if(result){
                    return res.json({exist });
                }
                else{
                    return res.json({ message: "User Does Not Exist" });
                }
            });
        })
});

app.post("/saveConfirmFile",(req,res)=>{
    const {url,email}=req.body;
    const data = new ConfirmForm({
        email: email,
        url: url
    });
    data.save();
    return res.json({ message: "Success" });
});

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
    const {email,item,check}=req.body;
    const data = new SavedFiles({
        email: email,
        name: item,
        firebase:check
    });
    data.save();
    return res.json({ message: "Success" });
})
app.post('/saveUser', async function (req, res) {
    try {  
        const {email,name,role,}=req.body;
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    console.log(secPass);
    const data = new user({
        email: email,
        name: name,
        Role:role,
        password:secPass
    });
    data.save();
    return res.json({ message: "Success" });
    } catch (e) {
      res.end(e.message || e.toString());
    }
  });
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
app.post("/addSignUpData",async(req,res)=>{
    const data=req.body;
    try {
        const doesExists=await user.find({email:data.email});
        const doesRequestExists=await signupmodel.find({email:data.email});
        if(doesExists.length==0&&doesRequestExists.length==0){
            const password=data.password;
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(password,salt);
            const updatedData={
                name:data.name,
                role:data.role,
                email:data.email,
                password:hashedPassword,
                phone:data.phone,
                userId:data.userId
            }
            const signupdata=new signupmodel(updatedData);
            try {
                const response=await signupdata.save();
                res.status(201).json({message:response,exists:false});
            } catch (error) {
                res.status(404).json({message:error.message});
            }
        }else{
            console.log("already exists");
            res.status(201).json({exists:true});
        }
    } catch (error) {
        console.log(error.message);
    }
});
app.get("/getNewUserDetails",async(req,res)=>{
    try {
        //data without password field
        const data=await signupmodel.find({},{password:0});
        res.status(201).json({message:data});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});
app.post("/addNewUser",async(req,res)=>{
    const data_received=req.body;
    let signupdata=null;
    //deleting data from signupdetails collection
    try {
        const response=await signupmodel.findOneAndDelete({email:data_received.user_email});
        signupdata=response;
    } catch (error) {
        console.log(error);
    }
    if(data_received.isApproved===true){
        const new_user_data={
            email:signupdata.email,
            password:signupdata.password,
            Role:signupdata.role,
            name:signupdata.name
        }
        try {
            const response=await user.create(new_user_data);
            res.status(201).json({message:response});
        } catch (error) {
            res.status(401).json({message:error.message});
        }
    }
});
app.post("/deleteRole",async(req,res)=>{
    const email_data=req.body.email;
    try {
        const response=await user.findOneAndDelete({email:email_data});
        res.status(201).json({message:"deleted user"});
    } catch (error) {
        res.status(401).json({message:error.message});
    }
});

server=app.listen(8000, () => {
    console.log("server at port 8000");
});
mongoose.connect(db, ()=>{
    console.log("connected");
})