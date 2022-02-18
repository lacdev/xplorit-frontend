//import React, { useState } from "react";
import FileUpload from "./FileUpload/FileUploadComponent";

function UploadImage({onImageAdd}) {
    // const [newUserInfo, setNewUserInfo] = useState({
    // profileImages: []
    // });

    const updateUploadedFiles = (files) => {
        console.log(files)
        onImageAdd(files)}
    //  => setNewUserInfo({ ...newUserInfo, profileImages: files });

    
    // const readFiles = new FileReader(newUserInfo)
    // console.log(newUserInfo)

//    const handleSubmit = (event) => {
  //  event.preventDefault();
    //logic to create new user...
//    };

    return (
    <div>
        <FileUpload
            accept=".jpg,.png,.jpeg"
            label="Profile Image(s)"
            multiple
            updateFilesCb={updateUploadedFiles}
        />
    </div>
    );
}

export default UploadImage;