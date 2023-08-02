import React, { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutlined} from '@ant-design/icons';
import {subcategoryRows} from '../dummyData';
import { Link } from "react-router-dom";


const Subcategory = () => {
const [data,setData]= useState(subcategoryRows);

const handleDelete=(id)=>{
    setData(data.filter((item)=>item.id !== id));
};

const columns = [
    
  { field: 'subcat_id', headerName: 'ID', width: 110 },
  
  { field: 'subcat_name', headerName: 'Subcategory Name', width: 150 },

  { field: 'image_url', headerName: 'Image url', width: 240 },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell:(params)=>{
        return(
            <div className="subcategoryList"> 
            <Link to={"/admin/subcategory/"+ params.row.id}>
            <button className="subcategoryEdit">Edit</button>
            </Link>
            <DeleteOutlined className="subcategoryDelete" onClick={()=>handleDelete(params.row.id)}/>
            
            </div>
        )
    }
  },
];

 return(
    <>
    <div style={{ height: 400, width: '60%' }}>
    <DataGrid
      getRowId={(row) => row.subcat_id}
      rows={data} disableSelectionOnClick
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
    </div>
    <div>
      <Link to={"/admin/addSubcategory"}>
      <button className="subcategoryAdd">Add Subcategory</button>
      </Link>
    </div>
    </>
  )
  

  };

export default Subcategory;