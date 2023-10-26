import React from "react";
import BeautyProductCard from "./BeautyProductCard";

const BeautyBrands = () => {
  return (
    <>
      <div className="row bg_paleYellow m-0">
        <div className="d-flex justify-content-center align-items-center p-4 flex-column">
          <p className=" number">YOUR NUMBER ONE SOURCE FOR UNIQUE BEAUTY BRANDS</p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <BeautyProductCard imageWithExtension="image 20.jpg" BrandName="RMS Beauty" />
            <BeautyProductCard imageWithExtension="image 19.jpg" BrandName="Bobbi Brown" />
            <BeautyProductCard imageWithExtension="image 4.jpg" BrandName="Eve Lom" />
            <BeautyProductCard imageWithExtension="image 21.jpg" BrandName="ReVive" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautyBrands;
