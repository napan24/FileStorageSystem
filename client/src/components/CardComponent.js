import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import axios from "axios";

const URL="http://localhost:8000";

const StyledTypographyKey=styled(Typography)`
width:200px;
`;
const StyledTypographyH4=styled(Typography)`
padding:15px;
font-size:24px;
`;
const StyledButton=styled(Button)`
background-color:#27374D;
font-size:16px;
padding:10px;
border:0;
width:100px;

margin:15px;
&:hover{
    background-color: black;
}
&:disabled{
    color:#27374D;
}
`;
export default function CardComponent(props) {
  
  const [users,setUsers]=useState([]);

  const getSignUpUserData=async()=>{
    try {
      const response=await axios.get(URL+"/getSignUpData");
      const data=response.data.message;
      setUsers(data);
      return response;
    } catch (error) {
      return error;
    }
  }
  function handleApprove(){

  }
  function handleReject(){
    
  }
  useEffect(()=>{
    getSignUpUserData();
  },[]);
  return (
    <> 
    {users.map((user,i)=>{
      console.log(user);
      return (
        <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <StyledTypographyH4 variant="h4">Roll no. : {user.userId}</StyledTypographyH4>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem>
                        <ListItemIcon><StyledTypographyKey variant="h5" >Name</StyledTypographyKey></ListItemIcon>
                        <ListItemText><Typography variant="h5">{user.name}</Typography></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><StyledTypographyKey variant="h5" >Phone</StyledTypographyKey></ListItemIcon>
                        <ListItemText><Typography variant="h5">{user.phone}</Typography></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><StyledTypographyKey variant="h5" >Email Id</StyledTypographyKey></ListItemIcon>
                        <ListItemText><Typography variant="h5">{user.email}</Typography></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><StyledTypographyKey variant="h5" >Role</StyledTypographyKey></ListItemIcon>
                        <ListItemText><Typography variant="h5">{user.role}</Typography></ListItemText>
                    </ListItem>
                </List>
            </AccordionDetails>
            <div style={{textAlign:'right'}}>
            <StyledButton variant="contained" style={{backgroundColor:"#D71313"}} onClick={handleReject}>Reject</StyledButton>
            <StyledButton variant="contained" onClick={handleApprove}>Approve</StyledButton>
            </div>
        </Accordion>
      )
    })}
      
        
    </>
  )
}
