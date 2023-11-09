import React from "react";
import "./CustomerSupport.css";
import BackArrow from "../Symbols/BackArrow";
import CustomerSupportBox from "./CustomerSupportBox";
const CustomerSupport = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div style={{ width: "90%" }} className="mx-auto mt-4 d-flex align-items-center gap-3 ">
            <BackArrow />
            <p className="m-0 headingCustomerSupport">Customer Support</p>
          </div>
          <div style={{ width: "80%" }} className="mx-auto mt-4  mb-5 d-flex flex-column justify-content-center">
            <p className="m-0 welcomeLine">Hi, Lindsay Crames. What can we help you with?</p>
            <hr className="lineInSupport" />
            <p className="m-0 welcomeLine" style={{ fontSize: "20px" }}>
              Some thing you can do here
            </p>
            <div className="flex-wrap mt-4 d-flex gap-4">
              <CustomerSupportBox heading="Order Status" line="Track Your Orders with Ease." icon="OrderStatusIcon" />
              <CustomerSupportBox heading="Management Cases" line="Empowering Solutions for Effective Management" icon="ManagementCaseIcon" />
              <CustomerSupportBox heading="Marketing Support Issues" line="Elevate Your Marketing with Proactive Solutions." icon="MarketingSupportIcon" />
              <CustomerSupportBox heading="Contact Us" line="Connecting with You, Every Step of the Way." icon="ContactUsIcon" />
              <CustomerSupportBox heading="Additional Support" line="Resolving Concerns Serving Solutions" icon="AdditionalSupport" />
            </div>
            <hr className="lineInSupport mt-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupport;
