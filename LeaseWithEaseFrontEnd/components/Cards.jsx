import React, { Component } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

export class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-1">
            <Card title="Felix 3-Seater Fabric Sofa " text="Elegance meets comfort with the plush Felix Couch. With unmatched comfort and endless options to deck it up, your couch crasher friends will love it, and so will you." imgsrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
          </div>
          <div className="col-md-2">
            <Card title="Poang Rocking Chair by IKEA " text="Enjoy the feel of being comfortable, while you read your favorite books using this Poang rocking chair. With its slim & modern design it is perfect for anyone short on space. " imgsrc="https://www.ikea.com/in/en/images/products/poaeng-rocking-chair-birch-veneer-hillared-anthracite__0837247_pe629318_s5.jpg?f=s"/>
          </div>
          <div className="col-md-3">
            <Card title="Napster Metal Queen Bed (6x5)" text="Designed to echo your inner zen, Napster bed ensures a good night’s sleep with its simple yet functional design. This trim and compact bed, combined with slim legs, give it a sleek and minimalist look."imgsrc="https://images.unsplash.com/photo-1631650120985-20791383127e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"/>
          </div>
          <div className="col-md-4">
            <Card title="Front Load Washing Machine " text="Keep your clothes looking fresh and spotless with the feature-richwashing machine. Designed to protect the color and texture of your clothes, the washing machine delivers effortless cleaning." imgsrc="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
