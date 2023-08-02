import React from "react";
import CustomInput from "../Components/CustomInput";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined} from "@ant-design/icons";
import {message, Upload} from "antd";

const AddCategory=()=>{
   
    return(
        <div>
            <h3 className="mb-4">Add Category</h3>
         <div>
        <form action="">
        <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Category Id</option>
        </select>
        

        <CustomInput type="text" label="Enter Category Name" />
       
        <button className="btn btn-success border-0 rounded-3 my-5"
        type="submit"> Add Category </button>
        
        </form>
         </div>
        </div>
    )
}
export default AddCategory;