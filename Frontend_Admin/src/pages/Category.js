import React, { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutlined} from '@ant-design/icons';
import {categoryRows} from '../dummyData';
import { Link } from "react-router-dom";


const Category = () => {
const [data,setData]= useState(categoryRows);

const handleDelete=(id)=>{
    setData(data.filter((item)=>item.id !== id));
};

const columns = [
    
  { field: 'cat_id', headerName: 'ID', width: 130 },
  
  { field: 'cat_name', headerName: 'Category Name', width: 150 },
  
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell:(params)=>{
        return(
            <div className="categoryList"> 
            <Link to={"/admin/category/"+ params.row.id}>
            <button className="categoryEdit">Edit</button>
            </Link>
            <DeleteOutlined className="categoryDelete" onClick={()=>handleDelete(params.row.id)}/>
            
            </div>
        )
    }
  },
];

 return(
    <>
    <div style={{ height: 400, width: '40%' }}>
    <DataGrid
      getRowId={(row) => row.cat_id}
      rows={data} disableSelectionOnClick
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
    </div>
    <div>
      <Link to={"/admin/addcategory"}>
      <button className="categoryAdd">Add Category</button>
      </Link>
    </div>
    </>
  )
  

  };

export default Category;