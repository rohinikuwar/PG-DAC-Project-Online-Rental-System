import Navbar from "./components/Navbar";
import "./styles.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./components/Cart"
import Auth from "./components/Auth";
import { Container } from "react-bootstrap";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ShippingPolicy from "./components/ShippingPolicy";
import CancelationReturnPolicy from "./components/CancelationReturnPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndCondition from "./components/TermsAndCondition"
function App() {
  return (
    <div className="App">
      <Container maxwidth="md">
     <Navbar/>
     <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/login" element={<Auth/>}></Route>
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/contactus" element={<ContactUs/>}></Route>
            <Route path="/shippingpolicy" element={<ShippingPolicy/>}></Route>
            <Route path="/cancelationreturnpolicy" element={<CancelationReturnPolicy/>}></Route>
            <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
            <Route path="/termsandcondition" element={<TermsAndCondition/>}></Route>
          </Routes>
          </Container>
    </div>
  );
}

export default App;
