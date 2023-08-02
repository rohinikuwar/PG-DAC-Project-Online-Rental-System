import {React, useState } from "react";
import CustomInput from "../Components/CustomInput";
import ReactQuill from "react-quill" ;
import "react-quill/dist/quill.snow.css";
import { InboxOutlined} from "@ant-design/icons";
import {message, Upload} from "antd";


const {Dragger} =Upload;
const props={
    name:"image",
    multiple:true,
    action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onchange(info){
        const{status}=info.file;
        if(status!=="uploading"){
            console.log(info.file,info.fileList);
        }
        if(status==="done"){
            message.success(`${info.file.name} image uploaded successfully.`);
        } else if(status==="error"){
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e){
        console.log("Dropped files",e.dataTransfer.files);
    },
};
 

const AddTransporter=()=>{
    const [desc,setDesc]=useState();
    const handleDesc=(e)=>{
        setDesc(e);
    };
    return(
        <div>
            <h3 className="mb-4">Add Transporter</h3>
         <div>
        <form action="">
        <CustomInput type="text" label="Enter Transporter Id" />
        <CustomInput type="text" label="Enter Transporter Firstname" />
        <CustomInput type="text" label="Enter Transporter Lastname" />
        <CustomInput type="text" label="Enter Transporter Email Id" />
        <CustomInput type="text" label="Enter Transporter Contact Number" />
        <CustomInput type="text" label="Enter Transporter Rate" />
        <CustomInput type="Date" label="Enter Transporter Registration Date" />
        <CustomInput type="Date" label="Enter Transporter Registration Due Date" />

        <button className="btn btn-success border-0 rounded-3 my-5"
        type="submit" onClick ={handleDesc}> Save </button>
        
        </form>
         </div>
        </div>
    )
}
export default AddTransporter;