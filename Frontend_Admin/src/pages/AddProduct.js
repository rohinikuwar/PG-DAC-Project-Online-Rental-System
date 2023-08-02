import {React, useState } from "react";
import CustomInput from "../Components/CustomInput";

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
 

const AddProduct=()=>{
    const [desc,setDesc]=useState();
    const handleDesc=(e)=>{
        setDesc(e);
    };
    return(
        <div>
            <h3 className="mb-4">Add Product</h3>
         <div>
        <form action="">
        <CustomInput type="text" label="Enter Product Id" />
       {/*  <div className="mb-3">
        <ReactQuill
        theme="snow"
        value={desc}
        onChange={(evt)=>{handleDesc(evt);
        }} />
        </div>
 */}
        <CustomInput type="text" label="Enter Product Name" />
        <CustomInput type="number" label="Enter Product Price" />
        <CustomInput type="number" label="Enter Product Rent" />
        <CustomInput type="number" label="Enter Product Stock" />

        <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Category</option>
        </select>
        <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Subcategory</option>
        </select>

        <CustomInput type="text" label="Enter Product Description" />
        <CustomInput type="Date" label="Enter Product Add date" />
        
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined/>
            </p>
            <p className="ant-upload-text">
                Click or drag  product image to this area to upload
            </p>
            <p className="ant-upload-hint">
               Support for a single or bulk upload. Strictly prohibit from
               uploading company data or other band files
            </p>
        </Dragger>

        <button className="btn btn-success border-0 rounded-3 my-5"
        type="submit"> Save Product </button>
        
        </form>
         </div>
        </div>
    )
}
export default AddProduct