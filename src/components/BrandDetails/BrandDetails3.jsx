import React from "react";
import BrandDetailSection from "./BrandDetailSection";
import data from "../../utils/BrandDetails.json";
import RelatedProducts from "./RelatedProducts";
import "./BrandDetails3.css";

const BrandDetails3 = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="col-5">
          <p className="m-0 productDetailsHeading">Product Details</p>
        </div>
        <img src="/images/Rectangle.png" className="imgNoGrayScale col-7" style={{ opacity: "0.8", height: "139px" }} alt="" />
      </div>
      <div className="p-5 d-flex align-items-center gap-5 bg_paleYellow">
        <div id="brandImageDiv" className=" ms-5 d-flex  flex-column justify-content-center">
          <img alt="bobbi brown" style={{ borderRadius: "186.5px 0px" }} src="/images/brandDetailOption2.png" className="bg-transparent "></img>
          <div className="d-flex mt-4 gap-4 justify-content-start">
            <img src="/images/brandDetailOption2.png" className="smallImageBox" alt="img" />
            <img src="/images/b1.jpg" className="smallImageBox border-0" alt="img" />
            <img src="/images/b2.jpg" className="smallImageBox border-0" alt="img" />
            <img src="/images/b3.jpg" className="smallImageBox border-0" alt="img" />
          </div>
        </div>
        <div className=" m-5 d-flex flex-column">
          <p className="masterHeader-Heading1">{data["bobbi brown"]["master header"]["heading 1"]}</p>
          <p className="tagline">{data["bobbi brown"]["master header"]["tag line"]}</p>
          <p className="description lh-lg">
            {data["bobbi brown"]["master header"]["description"]}
            {data["bobbi brown"]["master header"]["description"]}
          </p>
        </div>
      </div>
      <RelatedProducts />
      <BrandDetailSection />
    </>
  );
};

export default BrandDetails3;
