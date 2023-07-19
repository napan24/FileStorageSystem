import React, { useEffect, useState } from 'react'
import Temp from '../Temp';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardComponent from './CardComponent';


export default function ApproveUser() {
    const [inapprovedUsers,setInapprovedUsers]=useState([]);

    const usertype=JSON.parse(localStorage.getItem("profile_role"));
    const role="Admin";
    const inAccessibleMessage="only accessible to admin";
  return (
    <>
        <br/>
        {usertype===role?
        <>
        <Temp />
        <div className='flex flex-col w-[80%]'>
            <CardComponent></CardComponent>
        </div>
        </>:
        inAccessibleMessage}
    </>
  )
}
