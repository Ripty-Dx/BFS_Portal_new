import React from "react";
import ArrowSymbol from "../ArrowSymbol";
import { Link } from "react-router-dom";

const BeautyProductCard = ({ imageWithExtension, BrandName }) => {
  return (
    <>
      <div className="d-flex align-items-start flex-column">
        <div className="bg-white d-flex  align-items-center" style={{ height: "202px", width: "260px" }}>
          <img src={`/images/${imageWithExtension}`} className="mx-auto my-auto" alt="img" />
        </div>
        <div className="d-flex  flex-column">
          <p className="mt-2 brandName">{BrandName}</p>
          <Link to="#12" className="m-0 order">
            Order Now &nbsp;
            <ArrowSymbol size="small" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BeautyProductCard;
