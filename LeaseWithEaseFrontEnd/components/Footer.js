import "./Footer.css";
const footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="class1">
          <h1> <b>LEASEWITHEASE </b></h1>
          <a href="/aboutus">About Us</a>
          <br /> 
          <a href="/contactus">Contact Us</a>
          <br /> 
          {/* <a href="/">Our Benefits</a> */}
        </div>
        <div className="class2">
          <h1><b>INFORMATION</b></h1>
          <a href="/">Blogs</a> <br />
          <a href="/">FAQ</a> <br />
          <a href="/">Document Required</a>
        </div>
        <div className="class3">
          <h1><b>POLICIES</b></h1>
          <a href="/shippingpolicy">Shipping Policy</a>
          <br />
          <a href="/cancelationreturnpolicy">Cancellation & Return</a> <br />
          <a href="/privacypolicy">Privacy Policy</a> <br />
          <a href="/termsandcondition">Rental Terms & Conditions</a> <br />
         
        </div>
      </div>
      <hr />
    </div>
  );
};
export default footer;
