import React from "react";

import "./Cards-style.css";

const Card = (props) => {
  return (
    <>
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="dining" className="card-img-to" height="200px" width="250px"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary" >
         {props.text}
        </p>
        <a href="#" className="btn btn-outline-s">
           <h2>Next</h2>
        </a>
      </div>
      
    </div>
    
  </>  
  );
};

export default Card;
