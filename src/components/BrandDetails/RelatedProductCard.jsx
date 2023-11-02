import React from "react";

const RelatedProductCard = ({ cardText, cardHeading, imagePath }) => {
  return (
    <>
      <div className="position-relative " style={{ height: "337px" }} id="BeautyProductCardInHome">
        <div className="circle" id="BeautyProductCardInHome">
          <img src={imagePath} alt="" style={{ height: "89px",width:"89px" }} className="bg-white" />
        </div>
        <div className="cardStyle">
          <p className="mb-5"></p>
          <p className="px-3 mt-4 cardHeading">{cardHeading}</p>
          <p className="px-3 cardText">{cardText} </p>
          <p className="px-3 readMore">Read More</p>
        </div>
      </div>
    </>
  );
};

export default RelatedProductCard;
