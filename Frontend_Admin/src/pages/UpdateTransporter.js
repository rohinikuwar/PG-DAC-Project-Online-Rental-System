import React from "react";


const UpdateTransporter=()=>{
    return(
        <div className="transporters">

            <div className="transporterTitleContainer">
              <h1 className="transporterTitle">Edit Transporter</h1>
              <button className="transporterAddButton">Create</button>        
            </div>
            <div className="transporterContainer">
                <div className="transporterShow"></div>
                <div className="transporterUpdate"></div>
            </div>
        </div>
    )
};

export default UpdateTransporter; 