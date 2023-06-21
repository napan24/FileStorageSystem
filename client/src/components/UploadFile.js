import React, { useState } from 'react'
import Temp from '../Temp'
import { storage } from '../config/firebase';
import {ref, uploadBytes} from "firebase/storage"
import {v4} from "uuid"
const UploadFile = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const uploadImage=()=>{
        if(imageUpload==null)return;
        const imageRef=ref(storage,`/${imageUpload.name+v4()}`);
        uploadBytes(imageRef,imageUpload).then(()=>{
            alert("image uploaded");
        })
    };
    return (
        <>
            <Temp />
            <div >
                <input type='file' onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                <button onClick={uploadImage}>Upload Image</button>
            </div>
        </>
    )
}

export default UploadFile