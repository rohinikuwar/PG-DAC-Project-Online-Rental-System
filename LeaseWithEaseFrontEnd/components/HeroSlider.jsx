import React from "react";
import { Carousel } from "react-bootstrap";

import dining from "../components/Images/dining.jpg";
import washingmachine from "../components/Images/washingmachine.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const HeroSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
            height="600"
            width="200"
           
            /* border= "2px solid #fff" */
            padding= "20px"
            
            
          />
          <Carousel.Caption>
            <h1>Moonstone 3-Seater Fabric Sofa (Grey)</h1>
            <p><h3>Discover perfect coalescence of your dreams and your passion come together for a premium seamless design like never before.</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1595935736128-db1f0a261263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Second slide"
            height="600"
            width="200"
            
          />
          <Carousel.Caption>
            <h1>Smart LED TV- 55"</h1>
            <p><h3>Experience television like it was meant to be. So sit back & relax!</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80"
            alt="Third slide"
            height="600"
            width="200"
            border-radius="25px"
          />
          <Carousel.Caption>
            <h1>Multi Gear bicycle</h1>
            <p><h3>
            No matter if it's terrains or highways, the extra push helps make your voyages easier.
            </h3></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default HeroSlider;
