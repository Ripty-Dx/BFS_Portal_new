import React from "react";
import ArrowSymbol from "../ArrowSymbol";
import "./BrandsCard.css";
import VerifiedSymbol from "../VerifiedSymbol";
import { Link } from "react-router-dom";

const BrandsCard = ({ BandName, imageWithExtension, verified,visibility }) => {
  return (
    <>
      <div className={`d-flex justify-content-center align-items-center ${visibility}`} >
        <div style={{ width: "300px" }}>
          <div id="brandImageDiv" style={{ height: "192px" }} className="m-0 w-100 bg-white d-flex justify-content-center align-items-center">
            <img src={`/images/${imageWithExtension}`} alt="img" style={{ width: "124px", height: "142px" }} />
          </div>
          <div style={{ height: "62px" }} className="borderAroundCard m-0 p-1 px-2 w-100 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex  flex-column justify-content-center w-100">
              <div className="d-flex justify-content-between ">
                <p className=" brandNameInBrandCard m-0">{BandName}</p>
                {verified ? (
                  ""
                ) : (
                  <button className="goToButton m-0 px-2 p-1 mt-1  text-white" style={{ width: "fit-content", height: "fit-content", backgroundColor: "rgba(64, 58, 53, 1)" }}>
                    apply
                  </button>
                )}
              </div>
              {verified ? (
                <Link to="#12" className="m-1 order">
                  Order Now &nbsp;
                  <ArrowSymbol size="small" />
                </Link>
              ) : (
                <p className=" order m-1 d-flex align-items-center"> Apply Now to Sell “{BandName}”</p>
              )}
            </div>
            <div className="d-flex justify-content-center align-items-center">{verified ? <VerifiedSymbol /> : ""}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsCard;
