import React, { Component } from "react";
import Card1 from "./Card1";
import "bootstrap/dist/css/bootstrap.min.css";
export class Cards1 extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-11">
            <Card1 title="Furniture" imgsrc="https://i.pinimg.com/564x/c2/47/9c/c2479c0f49ab3c67aa4f3a7b38cb2baa.jpg"/>
          </div>
          <div className="col-md-12">
            <Card1  title="Appliences" imgsrc="https://cdn.dribbble.com/users/2118692/screenshots/11919375/media/02c5fd3df4949b74ffdc61a3241062c6.png?compress=1&resize=400x300 "/>
          </div>
          <div className="col-md-13">
            <Card1  title="Electronics"imgsrc="https://www.citypng.com/public/uploads/small/11639761252eov1kb9s2px4xdmvxgdsxxvgevzsxslllrsuaalu5gswlizet3suj1ihd8vabi5qf0vq0pxtfnpniyud8map9dcyoiwlsghwpceo.png "/>
          </div>
          <div className="col-md-14">
            <Card1  title="Fitness"imgsrc="https://d3ciwvs59ifrt8.cloudfront.net/99402368-4d47-4ad2-b3ca-b96eadd32c81/1c0d2b48-91b4-43ce-a434-e9762c38aea3_l.png"/>
          </div>
          <div className="col-md-15">
            <Card1  title="Bikes"imgsrc="https://static.vecteezy.com/system/resources/previews/012/369/131/original/electric-scooter-icon-in-green-color-eps-10-file-format-vector.jpg"/>
          </div>
          <div className="col-md-16">
            <Card1  title="WFH Essential"imgsrc="https://static.vecteezy.com/system/resources/previews/008/841/247/original/illustration-graphic-of-office-table-icon-free-vector.jpg "/>
          </div>
       
        </div>
      </div>
    );
  }
}

export default Cards1;
