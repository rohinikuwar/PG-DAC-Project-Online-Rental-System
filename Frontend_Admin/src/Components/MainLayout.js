import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  AppstoreFilled,
  DashboardOutlined,
  ReadOutlined,
  ToolOutlined,
  ShoppingCartOutlined,
  NotificationTwoTone
} from '@ant-design/icons';
//import  AiOutlineDashboard from 'react-icons/ai';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {IoNotificationsCircleSharp} from 'react-icons/io5';

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  const navigate=useNavigate();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          
          <Menu
            theme='dark'
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({key})=>{
            if(key=="signout"){

            }
            else{
                navigate(key);
            }
            }
        }
            items={[
              {
                key: 'products',
                icon: <AppstoreFilled className='fs-4'/> ,
                label: 'Product Manager',
                children:[
                  {
                    key: 'categoryList',
                    icon: <ShoppingCartOutlined className='fs-4'/>,
                    label: 'Category', 
                },
                    {
                        key: 'addcategory',
                        icon: <ShoppingCartOutlined className='fs-4'/>,
                        label: 'Add Category', 
                    },
                    {
                      key: 'updatecategory',
                      icon: <ShoppingCartOutlined className='fs-4'/>,
                      label: 'Update Category', 
                  },
                  {
                    key: 'subcategoryList',
                    icon: <ShoppingCartOutlined className='fs-4'/>,
                    label: 'Subcategory', 
                  },
                   
                  {
                    key: 'addsubcategory',
                    icon: <ShoppingCartOutlined className='fs-4'/>,
                    label: 'Add Subcategory', 
                  },
                    {
                        key: 'updatesubcategory',
                        icon: <ShoppingCartOutlined className='fs-4'/>,
                        label: 'Update Subcategory', 
                    },
                    {
                      key: 'productList',
                      icon: <ShoppingCartOutlined className='fs-4'/>,
                      label: 'Products', 
                    },
    
                    {
                      key: 'addproducts',
                      icon: <ShoppingCartOutlined className='fs-4'/>,
                      label: 'Add Product', 
                    },
                      {
                          key: 'updateproduct',
                          icon: <ShoppingCartOutlined className='fs-4'/>,
                          label: 'Update Product', 
                      }
                ]
              },
              {
                key: 'transporter',
                icon: <UserOutlined  className='fs-4'/>,
                label: 'Transporter',
                
              },
              {
                key: 'reports',
                icon: <ReadOutlined className='fs-4'/>,
                label: 'Reports',
              },
              {
                key: 'support',
                icon: <ToolOutlined className='fs-4'/>,
                label: 'Supports',
              },
              {
                key:'',
                icon: < DashboardOutlined className='fs-4'/>,
                label:'Dashboard'
              }
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="d-flex justify-content-between ps-1 pe-5"
          style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <div className="d-flex gap-4 align-items-center">
            <div  className='position-relative' >
            < IoNotificationsCircleSharp className='fs-3'/>
           
            </div> 
          <div className='d-flex gap-3 align-items-center'>
            <div>
              <img width={32}
              height={32}
              src='https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg?size=626&ext=jpg' />
            
            </div>
            <div>
              <h5 className='mb-0'>Admin</h5>
              <p className='mb-0'>admin@gmail.com</p>
            </div>
          </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 600,
              background: colorBgContainer,
            }}
          >
           
          <Outlet/>
          
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  
export default MainLayout;