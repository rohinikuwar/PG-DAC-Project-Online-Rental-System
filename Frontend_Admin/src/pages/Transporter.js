import React, { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutlined} from '@ant-design/icons';
import {transporterRows} from '../dummyData';
import { Link } from "react-router-dom";


const Transporter = () => {
const [data,setData]= useState(transporterRows);

const handleDelete=(id)=>{
    setData(data.filter((item)=>item.id !== id));
};

const columns = [
    
  { field: 'id', headerName: 'ID', width: 130 },
  
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'email',
    headerName: 'Email',
    width: 190,
  },
  {
    field: 'contact',
    headerName: 'Contact',
    width: 160,
  },
  {
    field: 'rate',
    headerName: 'Rate',
    width: 130,
  },
  {
    field: 'registration_date',
    headerName: 'Registration Date',
    width: 200,
  },
  {
    field: 'registration_due_date',
    headerName: 'Registration Due Date',
    width: 220,
  },

  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell:(params)=>{
        return(
            <div className="transporterList"> 
            <Link to={"/admin/transporters/"+ params.row.id}>
            <button className="transporterEdit">Edit</button>
            </Link>
            <DeleteOutlined className="transporterDelete" onClick={()=>handleDelete(params.row.id)}/>
            
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
      <Link to={"/admin/addtransporters"}>
      <button className="transporterAdd">Add Transporter</button>
      </Link>
    </div>
    </>
  )
  

  };

export default Transporter;