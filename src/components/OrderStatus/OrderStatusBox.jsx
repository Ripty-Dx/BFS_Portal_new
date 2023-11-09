import React from "react";
import "./OrderStatus.css";

const OrderStatusBox = ({ orderNumber, Brand, CustomerName }) => {
  return (
    <>
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between orderColouredBox px-4 py-2">
          <div>
            <p className="m-0 ordersText">Orders</p>
            <p className="m-0 ordersTextNumber">{orderNumber}</p>
          </div>
          <div>
            <p className="m-0 ordersText">Brand</p>
            <p className="m-0 ordersTextNumber">{Brand}</p>
          </div>
          <div>
            <p className="m-0 ordersText">Ship To </p>
            <p className="m-0 ordersTextNumber">{CustomerName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStatusBox;
