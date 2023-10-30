import React from "react";
import data from "../../utils/BrandDetails.json";

const WhyChooseSection = () => {
  return (
    <>
      <div className="bg_paleYellow p-5 my-5 flex-column d-flex justify-content-center align-items-center">
        <p className="tagline text-uppercase ">{data["bobbi brown"]["why choose"].heading}</p>
        <p className="description p-3 lh-lg">
          {data["bobbi brown"]["why choose"].description}
          {data["bobbi brown"]["why choose"].description}
        </p>
        <div className="d-flex gap-5">
          <div className="sphere">
            {data["bobbi brown"]["why choose"]["no of products"]}{" "}
            <span className="masterHeader-Heading1" style={{ lineHeight: "1px", color: "white" }}>
              Products
            </span>{" "}
          </div>
          <div className="sphere" style={{ backgroundColor: "#E2DAD1", boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.25)" }}>
            {data["bobbi brown"]["why choose"]["no of orders"]}
            <span className="masterHeader-Heading1" style={{ lineHeight: "1px", color: "white" }}>
              Orders
            </span>
          </div>
          <div className="sphere" style={{ backgroundColor: "#34302D", boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.25)" }}>
            {data["bobbi brown"]["why choose"]["no of pre-orders"]}
            <span className="masterHeader-Heading1" style={{ lineHeight: "1px", color: "white" }}>
              Pre-Orders
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseSection;
