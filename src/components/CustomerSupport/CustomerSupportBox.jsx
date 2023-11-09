import React from "react";
import "./CustomerSupport.css";
import OrderStatusIcon from "../Symbols/OrderStatusIcon";
import ManagementCaseIcon from "../Symbols/ManagementCaseIcon";
import AdditionalSupport from "../Symbols/AdditionalSupport";
import MarketingSupportIcon from "../Symbols/MarketingSupportIcon";
import ContactUsIcon from "../Symbols/ContactUsIcon";

const CustomerSupportBox = ({ icon, heading, line }) => {
  return (
    <>
      <div className="boxInSupport d-flex p-1">
        <div className="col-3 d-flex  justify-content-center align-items-center">
          {icon === "OrderStatusIcon" ? <OrderStatusIcon /> : null}
          {icon === "ManagementCaseIcon" ? <ManagementCaseIcon /> : null}
          {icon === "MarketingSupportIcon" ? <MarketingSupportIcon /> : null}
          {icon === "ContactUsIcon" ? <ContactUsIcon /> : null}
          {icon === "AdditionalSupport" ? <AdditionalSupport /> : null}
        </div>

        <div className="col-9 d-flex flex-column p-1 ">
          {/* <div className="p-1"> */}
          <p className="m-0 py-1 boxHeading">{heading}</p>
          <p className="m-0 pt-1 lineInBox">{line}</p>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default CustomerSupportBox;
