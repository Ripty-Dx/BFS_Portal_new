import React from "react";
import BackArrow from "../Symbols/BackArrow";
import "./OrderStatus.css";
import MagnifyingGlass from "../Symbols/MagnifyingGlass";
import OrderStatusBox from "./OrderStatusBox";
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
            <div className="col-12 p-2 d-flex align-items-center">
              <div className="col-7">
                <p className="m-0 welcomeLine d-flex align-items-center ">Your Orders</p>
              </div>
              <div className="col-5 d-flex">
                <div className="col-6 px-2 searchBox d-flex align-items-center gap-2">
                  <MagnifyingGlass />
                  <p className="m-0 searchPlaceHolder  ">Search All orders</p>
                </div>
                <div className="col-6 searchButtonDiv ">
                  <p className="m-0 searchButton">Search Orders</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "80%" }} className="mx-auto">
            <hr className="lineInSupport w-100" />
            <OrderStatusBox orderNumber="#407-9596458" Brand="Susanne kaufmann" CustomerName="John Wick" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStatus;
