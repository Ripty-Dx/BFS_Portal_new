import React from "react";
import "./Accounts.css";
import ArrowSymbol from "../ArrowSymbol";
const AccountCard = ({ name }) => {
  return (
    <>
      <div className="bg-transparent" style={{ width: "250px" }}>
        <div className="bg-white d-flex justify-content-center align-items-center position-relative" style={{ height: "161px", width: "250px" }}>
          <div className="accountNameLetter">{name.charAt(0)}</div>
          <div className="position-absolute">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="39.5" fill="white" stroke="#875F3B" />
            </svg>
          </div>
          <div className="position-absolute" style={{ top: "80px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0 0 100 50" fill="none">
              <path
                d="M100 0C100 13.2608 94.7322 25.9785 85.3553 35.3553C75.9785 44.7322 63.2608 50 50 50C36.7392 50 24.0215 44.7322 14.6447 35.3553C5.26785 25.9785 2.00233e-06 13.2608 0 7.62939e-06H6.32268C6.32268 11.584 10.9244 22.6934 19.1155 30.8845C27.3066 39.0756 38.4161 43.6773 50 43.6773C61.5839 43.6773 72.6934 39.0756 80.8845 30.8845C89.0756 22.6934 93.6773 11.5839 93.6773 0H100Z"
                fill="#875F3B"
              />
            </svg>
          </div>
        </div>
        <div className="accountHolderName mt-1">{name}</div>
        <div className="explore mt-1">
          EXPLORE <ArrowSymbol size="small" />
        </div>
      </div>
    </>
  );
};

export default AccountCard;
