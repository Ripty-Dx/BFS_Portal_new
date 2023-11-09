import React from "react";
import "./ListingAccordion.css";

const ListingAccordion = () => {
  return (
    <>
      <div className="container-fluid bg_paleYellow">
        <div className="row">
          <div style={{ width: "90%" }} className="mx-auto d-flex mt-5">
            <div className="col-3 d-flex flex-column justify-content-center align-items-center gap-3">
              <div style={{ width: "282px" }}>
                {/* QUALITY FIGURE FOR TESTER */}
                <div style={{ backgroundColor: "#875F3B", height: "35px", border: "1px solid #978C83" }} className="text-white d-flex ps-3 align-items-center gap-2 discountOffer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                    <path
                      d="M8.46138 16.9962V9.61826C8.46138 9.48892 8.57073 9.38409 8.70564 9.38409H10.7875C10.9224 9.38409 11.0318 9.48876 11.0318 9.61826V17C15.3985 16.3966 18.6599 12.8092 18.6599 8.54682C18.6599 3.83426 14.6624 0 9.74887 0C4.8331 0 0.833496 3.83422 0.833496 8.54682C0.833496 12.8071 4.09409 16.3926 8.4616 16.9962H8.46138ZM9.74659 3.76445C10.7751 3.76445 11.6118 4.56671 11.6118 5.5527C11.6118 6.53868 10.7751 7.34078 9.74659 7.34078C8.71813 7.34078 7.88141 6.53881 7.88141 5.55282C7.88141 4.56667 8.71813 3.76441 9.74659 3.76441V3.76445Z"
                      fill="white"
                    />
                  </svg>
                  Quality Figure for Tester{" "}
                </div>
                {/* DISCOUNT OFFER 50 % */}
                <div style={{ backgroundColor: "#875F3B", height: "35px", border: "1px solid #978C83" }} className="text-white d-flex ps-3 align-items-center gap-2 discountOffer mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                    <path
                      d="M8.46138 16.9962V9.61826C8.46138 9.48892 8.57073 9.38409 8.70564 9.38409H10.7875C10.9224 9.38409 11.0318 9.48876 11.0318 9.61826V17C15.3985 16.3966 18.6599 12.8092 18.6599 8.54682C18.6599 3.83426 14.6624 0 9.74887 0C4.8331 0 0.833496 3.83422 0.833496 8.54682C0.833496 12.8071 4.09409 16.3926 8.4616 16.9962H8.46138ZM9.74659 3.76445C10.7751 3.76445 11.6118 4.56671 11.6118 5.5527C11.6118 6.53868 10.7751 7.34078 9.74659 7.34078C8.71813 7.34078 7.88141 6.53881 7.88141 5.55282C7.88141 4.56667 8.71813 3.76441 9.74659 3.76441V3.76445Z"
                      fill="white"
                    />
                  </svg>
                  Discount Offer 50 &#x25;;
                </div>
                {/* Sort By */}
               
              </div>
            </div>
            <div className="col-9">jb,</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingAccordion;
