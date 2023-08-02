import React from "react";

import "./Cards1-style.css";

const Card1 = (props) => {
  return (
    <>
    <div className="card1 text-center">
      <div className="overflow1">
        <img src={props.imgsrc}  alt="categoryimg" className="card-img-top" height="100px" width="125px"/>
      </div>
      <div className="card1-body text-dark">
        <h4 className="card1-title">{props.title}</h4>
        <p className="card1-text text-secondary" >
          
        </p>
        <a href="#" className="btn1 btn-outline-s">
          Next
        </a>
      </div>
      
    </div>
    
  </>  
  );
};

export default Card1;
