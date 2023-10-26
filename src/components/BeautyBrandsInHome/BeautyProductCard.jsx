import React from "react";

const BeautyProductCard = ({ imageWithExtension, BrandName }) => {
  return (
    <>
      <div className="d-flex align-items-start flex-column">
        <div className="bg-white d-flex  align-items-center" style={{ height: "202px", width: "260px" }}>
          <img src={`/images/${imageWithExtension}`} className="mx-auto my-auto" alt="img" />
        </div>
        <div className="d-flex  flex-column">
          <p className="mt-2 brandName">{BrandName}</p>
          <a href="#12" className="m-0 order">
            Order Now &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path
                d="M13 4L13.3825 3.67793L13.6537 4L13.3825 4.32207L13 4ZM1 4.5C0.723858 4.5 0.5 4.27614 0.5 4C0.5 3.72386 0.723858 3.5 1 3.5V4.5ZM10.8561 0.677932L13.3825 3.67793L12.6175 4.32207L10.0912 1.32207L10.8561 0.677932ZM13.3825 4.32207L10.8561 7.32207L10.0912 6.67793L12.6175 3.67793L13.3825 4.32207ZM13 4.5H1V3.5H13V4.5Z"
                fill="#58615A"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default BeautyProductCard;
