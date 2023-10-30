import React from "react";
import data from "../../utils/BrandDetails.json";

const BrandDetailSection = () => {
  return (
    <div className="bg-white">
      <div className="d-flex align-items-center justify-content-center p-5">
        <div id="brandImageDiv" className="w-50 d-flex align-items-center justify-content-center">
          <img src="/images/girl on brands.jpg" alt="img" className="position-relative" />
          <div className="bg-white imgOnImg d-flex align-items-center justify-content-center " id="brandImageDiv">
            <img src="/images/Bobbi Brown.jpg" alt="img" />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center ms-5 w-50 ps-5 ">
          <p className=" tagline" style={{ width: "80%" }}>
            {data["bobbi brown"]["brand details"].heading}{" "}
          </p>
          <p className="lh-lg description my-5  " style={{ width: "80%" }}>
            {data["bobbi brown"]["brand details"].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailSection;
