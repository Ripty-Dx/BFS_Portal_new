import React from "react";
import data from "../../utils/BrandDetails.json";
import "./BrandDetails1.css";
import MasterHeader from "./MasterHeader";
import BrandDetailSection from "./BrandDetailSection";
import WhyChooseSection from "./WhyChooseSection";
const BrandDetails1 = () => {
  //   console.log(data);
  return (
    <>
      <div className="container m-0 p-0 bg_paleYellow" style={{ maxWidth: "100%" }}>
        <div className="row m-0 p-0">
          <MasterHeader />
          <BrandDetailSection />
          <WhyChooseSection/>
        </div>
      </div>
    </>
  );
};

export default BrandDetails1;
