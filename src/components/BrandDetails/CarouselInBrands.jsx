import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CarouselInBrands.css";
const CarouselInBrands = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={2000}>
      <div>
        <img src="/images/brandDetailOption2.png" alt="img" />
      </div>
      <div>
        <img src="/images/carousel2.png" alt="img" />
      </div>
      <div>
        <img src="/images/carousel3.jpg" alt="img" />
      </div>
    </Carousel>
  );
};

export default CarouselInBrands;
