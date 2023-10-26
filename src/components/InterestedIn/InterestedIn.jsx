import React from "react";

const InterestedIn = () => {
  return (
    <>
      <div style={{ backgroundColor: "rgba(195, 188, 182, 1)" }} className="d-flex flex-column p-5 align-items-center">
        <p className="mt-3 forRetailers">For Retailers</p>
        <p className="interested">Interested in our brands?</p>
        <div className="d-flex gap-5 mt-3 mb-2">
          <button className="goToButton bg-transparent p-2 px-4" style={{ width: "fit-content" }}>
            explore our brands
          </button>
          <button className="goToButton p-2 px-4 text-white" style={{ width: "fit-content", backgroundColor: "rgba(64, 58, 53, 1)" }}>
            Become A Retailer Partner{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default InterestedIn;
