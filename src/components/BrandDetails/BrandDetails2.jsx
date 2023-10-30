import React from "react";
import BrandDetailSection from "./BrandDetailSection";
import InterestedIn from "../InterestedIn/InterestedIn";
import data from "../../utils/BrandDetails.json";

const BrandDetails2 = () => {
  return (
    <>
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

      <div className="bg-white"></div>
      <BrandDetailSection />
      <InterestedIn />
    </>
  );
};  

export default BrandDetails2;
