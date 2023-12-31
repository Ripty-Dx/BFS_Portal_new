import React from "react";
import "./dashboard.css";
import InterestedIn from "../InterestedIn/InterestedIn";
import BeautyBrands from "../BeautyBrandsInHome/BeautyBrands";
import ArrowSymbol from "../ArrowSymbol";
const Dashboard = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0" style={{ maxWidth: "100%" }}>
        {/* first row */}
        <div className="row bg_paleYellow m-0">
          <div className="d-flex m-0">
            <div className="col-5 m-0">
              <div className="px-5 pt-4 pb-5 gap-4 d-flex flex-column">
                <p className="m-0 p-0 merchant ">FOR merchants</p>
                <div>
                  <p className="m-0 mt-5 p-0 merchant" style={{ fontSize: "45px", lineHeight: "25px" }}>
                    beauty
                  </p>
                  <div className="d-flex m-0 p-0">
                    <div style={{ height: "5.5px", backgroundColor: "rgba(75, 69, 64, 1)", width: "106.5px", marginTop: "23px" }}></div>
                    <p className="m-0 p-0 merchant text-capitalize" style={{ fontSize: "27px" }}>
                      &nbsp;spot
                    </p>
                  </div>
                </div>
                <p className="m-0 p-0 welcome">Welcome to the Indian Queens Royal Digital Library and Education Center.</p>
                <p className="m-0 p-0 establish">
                  We <span>&#39;</span> ve established this digital repository with the aim of providing effortless entry to knowledge, learning, and online assistance. Get ready to delve into our
                  exquisite range of royal beauty products.
                </p>
              </div>
            </div>
            <div className="col-3 " style={{ borderRight: "1px solid #403a35 ", borderLeft: "1px solid #403a35 " }}>
              <div className=" px-4 gap-4 d-flex flex-column pb-5 pt-4">
                <img src="/images/image 6.jpg" alt="img" style={{ height: "260px" }} />
                <p className="m-0 retailer">Are you a Retailer?</p>
                <p className="m-0 assets">Assets Store</p>
                <p className="m-0 essentials"> Essentials for Retailing Our Brands:</p>
                <ul className="list">
                  <li>Order Forms </li>
                  <li>Images</li>
                  <li>Social Media Assets</li>
                  <li>Sell Sheets</li>
                  <li>Merchandising Guidelines</li>
                  <li>Press</li>
                </ul>
                <button className="bg-transparent goToButton p-2">
                  Go To The Library &nbsp; &nbsp;
                  <ArrowSymbol size="large" />
                </button>
              </div>
            </div>
            <div className="col-4 ">
              <div className="px-4 pe-5  gap-4 d-flex flex-column align-items-start pt-4">
                <img src="/images/image 7.jpg" alt="img" style={{ height: "260px", width: "312px" }} />
                <p className="m-0 retailer">ARE YOU A STORE EMPLOYEE?</p>
                <p className="m-0 assets">Teaching and Learning</p>
                <p className="m-0 essentials"> Essentials for Retailing Our Brands:</p>
                <p className="list">Adequate guidance under our experts will ensure that you are learning from the best and will guarantee you success.</p>
                <button className="bg-transparent goToButton p-2" style={{ width: "50%" }}>
                  Open The Course &nbsp; &nbsp;
                  <ArrowSymbol size="large" />
                  &nbsp; &nbsp;
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="line_ruler w-100 m-0 p-0" style={{ height: "2px" }}></hr>
        {/* second row */}
        <BeautyBrands />
        <div className="row bg-white m-0" style={{ height: "20px" }}></div>

        {/* third row */}
        <InterestedIn />
      </div>
    </>
  );
};

export default Dashboard;
