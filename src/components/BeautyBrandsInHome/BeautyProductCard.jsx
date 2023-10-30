import React from "react";
import ArrowSymbol from "../ArrowSymbol";
import { Link, useNavigate } from "react-router-dom";
import "./BeautyProductCardInHome.css";

const BeautyProductCard = ({ imageWithExtension, BrandName }) => {
  const navigate = useNavigate();
  const handleBrandDetails = (e, BrandName) => {
    e.preventDefault();
    navigate("/brand-details");
  };
  return (
    <>
      <div className="d-flex align-items-start flex-column">
        <div id="BeautyProductCardInHome" className="bg-white d-flex  align-items-center" style={{ height: "202px", width: "260px" }}>
          <img src={`/images/${imageWithExtension}`} className="mx-auto my-auto" alt="img" />
        </div>
        <div className="d-flex flex-column">
          <button to="/brand-details" className="mt-2 brandName" onClick={(e) => handleBrandDetails(e, BrandName)}>
            {BrandName}
          </button>
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
