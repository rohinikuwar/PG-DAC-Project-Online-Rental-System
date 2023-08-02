
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import AddCategory from './pages/AddCategory'
import AddSubcategory from './pages/AddSubcategory';
import Transporter from './pages/Transporter';
import UpdateTransporter from './pages/UpdateTransporter';
import UpdateProduct from './pages/UpdateProduct';
import AddTransporter from './pages/AddTransporter';
import Products from './pages/Products';
import Category from './pages/Category';
import Supports from './pages/Supports';
import Subcategory from './pages/Subcategory';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<MainLayout/>}>
        <Route index element={<Dashboard/>}/>
        {/* <Route path="/admin/add-product" element={<AddProduct/>}/> */}
        <Route path="/admin/productList" element={<Products/>}/>
        <Route path="/admin/addproducts" element={<AddProduct/>}/>
         <Route path="/admin/updateproduct" element={<UpdateProduct/>}/>
         <Route path="/admin/categoryList" element={<Category/>}/>
         <Route path="/admin/addcategory" element={<AddCategory/>}/>
         <Route path="/admin/addsubcategory" element={<AddSubcategory/>}/>
         <Route path="/admin/transporter" element={<Transporter/>}/>
         <Route path="/admin/transporters/:transporterId" element={<UpdateTransporter/>}/>
         <Route path="/admin/addtransporters" element={<AddTransporter/>}/>
         <Route path="/admin/subcategoryList" element={<Subcategory/>}/>
		     <Route path="/admin/support" element={<Supports/>}> 
        
         </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
