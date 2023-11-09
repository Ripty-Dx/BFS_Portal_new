import React from "react";
import BackArrow from "../Symbols/BackArrow";

const OrderStatus = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div style={{ width: "90%" }} className="mx-auto mt-4 d-flex align-items-center gap-3 ">
            <BackArrow />
            <p className="m-0 headingCustomerSupport">Customer Support</p>
          </div>
          <div style={{ width: "80%" }} className="mx-auto mt-4 d-flex align-items-center gap-3 ">
            <div className="col-12 p-2">
              <div className="col-7">
                <p className="m-0 welcomeLine ">Your Orders</p>
              </div>
              <div className="col-5 d-flex">
                <div className="col-6 searchBox"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStatus;
