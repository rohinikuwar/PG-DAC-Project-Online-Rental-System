import React from "react";
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

const AddSubcategory=()=>{
   
    return(
        <div>
            <h3 className="mb-4">Add Subcategory</h3>
         <div>
        <form action="">
        <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Category Id</option>
        </select>
        
        <CustomInput type="number" label="Enter Subcategory Id" />
        

        <CustomInput type="text" label="Enter Subcategory Name" />

        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined/>
            </p>
            <p className="ant-upload-text">
                Click or drag image to this area to upload
            </p>
            <p className="ant-upload-hint">
               Support for a single or bulk upload. Strictly prohibit from
               uploading company data or other band files
            </p>
        </Dragger>
        <button className="btn btn-success border-0 rounded-3 my-5"
        type="submit"> Add Subcategory </button>
        
        </form>
         </div>
        </div>
    )
}
export default AddSubcategory;