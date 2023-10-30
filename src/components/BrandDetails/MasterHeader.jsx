import React from "react";
import data from "../../utils/BrandDetails.json";
import "./BrandDetails1.css";
const MasterHeader = () => {
  return (
    <div className="my-5 d-flex align-items-center gap-4">
      <div className=" m-5 d-flex flex-column w-50">
        <p className="masterHeader-Heading1">{data["bobbi brown"]["master header"]["heading 1"]}</p>
        <p className="tagline">{data["bobbi brown"]["master header"]["tag line"]}</p>
        <p className="description lh-lg" style={{ width: "80%" }}>
          {data["bobbi brown"]["master header"]["description"]}
        </p>
      </div>
      <div id="brandImageDiv" className="bg-white d-flex align-items-center justify-content-center border-white rounded-circle" style={{ height: "466px", width: "466px" }}>
        <img alt="bobbi brown" src={data["bobbi brown"]["master header"].image}></img>
      </div>
    </div>
  );
};

export default MasterHeader;
