import React, { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutlined} from '@ant-design/icons';
import {productRows} from '../dummyData';
import { Link } from "react-router-dom";


const Products = () => {
const [data,setData]= useState(productRows);

const handleDelete=(id)=>{
    setData(data.filter((item)=>item.id !== id));
};

const columns = [
    
  { field: 'id', headerName: 'ID', width: 130 },
  
  { field: 'name', headerName: 'Product Title', width: 190 },
  { field: 'price', headerName: 'Unit Price', width: 150 },
  {
    field: 'rent',
    headerName: 'Rent',
    width: 120,
  },
  {
    field: 'stock',
    headerName: 'Available Stock',
    width: 190,
  },
  {
    field: 'image_url',
    headerName: 'Image Url',
    width: 190,
  },
  {
    field: 'date',
    headerName: 'Product Add Date',
    width: 200,
  },
  {
    field: 'desc',
    headerName: 'Product Description',
    width: 220,
  },

  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell:(params)=>{
        return(
            <div className="productList"> 
            <Link to={"/admin/products/"+ params.row.id}>
            <button className="productEdit">Edit</button>
            </Link>
            <DeleteOutlined className="productDelete" onClick={()=>handleDelete(params.row.id)}/>
            
            </div>
        )
    }
  },
];

 return(
    <>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={data} disableSelectionOnClick
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
    </div>
    <div>
      <Link to={"/admin/addproducts"}>
      <button className="productAdd">Add Product</button>
      </Link>
    </div>
    </>
  )
  

  };

export default Products;