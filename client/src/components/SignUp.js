import { Button, FormControl, FormGroup, TextField, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios";

const URL="http://localhost:8000";

const StyledFormGroup=styled(FormGroup)`
    background-color:#fff;
    margin:10px 30%;
    padding:60px;
    border-radius:20px;
    max-width:500px;
`;
const StyleTextField=styled(TextField)`
margin-bottom:20px;

`;
const StyledTypography=styled(Typography)`
margin-bottom:30px;

`;
const StyledButton=styled(Button)`
background-color:#27374D;
font-size:16px;
padding:10px;
border:0;
&:hover{
    background-color: black;
}
&:disabled{
    color:#27374D;
}
`;
const styledBackButton=styled(Button)`
    &:hover{
        color:#5C469C;
        cursor:pointer;
    }
`;
export default function SignUp() {
    const Navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        role:"",
        email:"",
        password:"",
        confirmPassword:"",
        phone:"",
        userId:""
    });


    function handleChange(event){
        const value=event.target.value;
        const label_name=event.target.name;
        setUser((prev)=>{
            return({
                ...prev,
                [label_name]:value
            });
        });
    }
    const addSignUpData=async(data)=>{
        // console.log("hello");
        try {
            const response=await axios.post(URL+"/addSignUpData",data);
            // console.log("Employee successfully added.",response);
            console.log(response) ;
        } catch (error) {
            console.log("Error while adding signup data:",error.message);
            return error.response;
        }
    }
    function handleSignup(){
        addSignUpData(user);
    }
  return (
    <div className='flex flex-col w-[100%]' >
    <Button  style={{position:'absolute', top:'30%',margin:'20px'}} onClick={()=>{Navigate("/");}}>
    <ArrowBackIcon sx={{fontSize:100, color:"#fff",backgroundColor:"#27374D",borderRadius:"50%"}}/>
    </Button>
    <StyledFormGroup>
        <StyledTypography variant="h2">Sign Up</StyledTypography>

        <FormControl>
        <StyleTextField required  name="name" label="Name" variant="outlined" value={user.name} onChange={handleChange} />
        </FormControl>

        <FormControl>
            <StyleTextField required  name="role" label="User's Role" variant="outlined" value={user.role} onChange={handleChange}/>
        </FormControl>

        <FormControl>
        <StyleTextField required type='number'  name="phone" label="Phone" variant="outlined" value={user.phone} onChange={handleChange} />
        </FormControl>
        
        <FormControl>
            <StyleTextField required  name="email" label="User's Email" type='email' variant="outlined" value={user.email} onChange={handleChange}/>
        </FormControl>

        <FormControl>
        <StyleTextField type="password" required  name="password" label="Password" variant="outlined" value={user.password} onChange={handleChange} />
        </FormControl>

        <FormControl>
            <StyleTextField 
            // helperText={passwordWarning?"Password need to match.":null} 
            type="password" required id="filled-basic" name="confirmPassword" label="Confirm Password" variant="outlined"  value={user.confirmPassword} onChange={handleChange} />
            
        </FormControl>

        <FormControl>
        <StyleTextField  required  name="userId" label="UserId" variant="outlined" value={user.userId} onChange={handleChange} />
        </FormControl>

 

        <FormControl>
        <>
        <StyledButton  variant="contained" onClick={handleSignup}>Sign Up</StyledButton>
        {/* <StyledSignUpLink to="/login">Signed Up already?</StyledSignUpLink> */}
        </>
        
        
        </FormControl>
    </StyledFormGroup>
    </div>
  )
}
