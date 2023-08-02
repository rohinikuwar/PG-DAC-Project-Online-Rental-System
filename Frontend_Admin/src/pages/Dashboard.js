import React from "react";
import { icons } from "react-icons";
import {BsArrowDownRight,BsArrowUpRight} from "react-icons/bs";
import { Column } from '@ant-design/plots';
import { Table } from 'antd';

const columns = [
  {
    title: 'SNO',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

const Dashboard=()=>{
    const data = [
       
        {
          type: 'March',
          sales: 54,
        },
        {
          type: 'February',
          sales: 32,
        },
        {
          type: 'January',
          sales: 35,
        },
        {
          type: 'December',
          sales: 52,
        },
        {
          type: 'November',
          sales: 61,
        },
        {
          type: 'October',
          sales: 88,
        },
        {
          type: 'September',
          sales: 48,
        },
        {
          type: 'August',
          sales: 38,
        },
        {
          type: 'July',
          sales: 60,
        },
        {
          type: 'June',
          sales: 41,
        },
        {
          type: 'May',
          sales: 56,
        },
        {
          type: 'April',
          sales: 39,
        },
       
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
          
          position: 'middle',
         
          style: {
            fill: '#FFFFFF',
            opacity: 1,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        
      };
    
return (
    <div>
     <h3 className="mb-4">Dashboard</h3>
    <div className="d-flex justify-content-between align-items-center gap-3">
    <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
     <div>
        <p className="">Total sells</p><h4 className="mb-0">$1200</h4>
     </div>
    <div className="d-flex flex-column align-items-end">
      <h6 className="green"><BsArrowUpRight/>32%</h6>
      <p className="mb-0">Compared to January 2023</p>
    </div>
    </div>
    <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
    <div>
        <p className="">Total Orders</p><h4 className="mb-0">$800</h4>
        </div>
    <div className="d-flex flex-column align-items-end">
      <h6 className="red"><BsArrowDownRight/>27%</h6>
      <p className="mb-0">Compared to  January 2023</p>
    </div>
    </div>
    <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
    <div>
        <p className="">Daily sales</p><h4 className="mb-0">$1100</h4>
    </div>
    <div className="d-flex flex-column align-items-end">
      <h6 className="green"><BsArrowDownRight/>31%</h6>
      <p className="mb-0">Compared to  January 2023</p>
    </div>
    </div>
    </div>
    <div className="mt-4">
        <h3 className="mb-4>Income Statics"></h3>
       <div>
        <Column {...config} />
        </div>
    </div>
    </div>

)
};
export default Dashboard;