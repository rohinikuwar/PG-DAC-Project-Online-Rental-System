import React from "react";
import { Table } from 'antd';
import  { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  id: Number;
  fname: string;
  lname:String;
  email: string;
  contact: string;
}

const columns: ColumnsType<DataType> = [
  { title: 'Id', dataIndex: 'name', key: 'name' },
  { title: 'FName', dataIndex: 'fname', key: 'fname' },
  { title: 'LName', dataIndex: 'lname', key: 'lname' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete/Edit</a>,
  },
];

const data: DataType[] = [
  {
    key: 1,
    fname: 'John ',
    lname: ' Brown',
    age: 32,
    email: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    fname: 'Jim ',
    lname: 'Green',
    age: 42,
    email: 'Jim@gmail.com',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    fname: 'Jim ',
    lname: 'Green',
    age: 29,
    email: 'Jim@gmail.com',
    description: 'This not expandable',
  },
  {
    key: 4,
    fname: 'Joe ',
    lname:'Black',
    age: 32,
    email:'Joe@gmail.com',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];

const Transporter = () => (
  <Table
    columns={columns}

    expandable={{
      expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
     //rowExpandable: (record) => record.name !== 'Not Expandable',
      
    }}
    dataSource={data}
    
  />
);

export default Transporter;
