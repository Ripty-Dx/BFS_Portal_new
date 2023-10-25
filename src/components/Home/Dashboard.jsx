import React from "react";
import "./dashboard.css";
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
                <p className="m-0 p-0 merchant" style={{ fontSize: "45px" }}>
                  beauty
                </p>
                <p className="m-0 p-0 merchant text-capitalize" style={{ fontSize: "27px" }}>
                  spot
                </p>
                <p className="m-0 p-0 welcome">Welcome to the Indian Queens Royal Digital Library and Education Center.</p>
                <p className="m-0 p-0 establish">
                  We <span>&#39;</span> ve established this digital repository with the aim of providing effortless entry to knowledge, learning, and online assistance. Get ready to delve into our
                  exquisite range of royal beauty products.
                </p>
              </div>
            </div>
            <div className="col-3 " style={{ borderRight: "1px solid #403a35 ", borderLeft: "1px solid #403a35 " }}>
              <div className=" px-4 gap-4 d-flex flex-column pb-5 pt-4">
                <img src={require("./images/image 6.jpg")} alt="img" style={{ height: "260px" }} />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none">
                    <path
                      d="M16 4.5L16.3712 4.16506L16.6734 4.5L16.3712 4.83494L16 4.5ZM0.999999 5C0.723857 5 0.499999 4.77614 0.499999 4.5C0.499999 4.22386 0.723857 4 0.999999 4V5ZM13.2133 0.665055L16.3712 4.16506L15.6288 4.83494L12.4709 1.33494L13.2133 0.665055ZM16.3712 4.83494L13.2133 8.33494L12.4709 7.66506L15.6288 4.16506L16.3712 4.83494ZM16 5H0.999999V4H16V5Z"
                      fill="#58615A"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-4 ">
              <div className="px-4 pe-5  gap-4 d-flex flex-column align-items-start pt-4">
                <img src={require("./images/image 7.jpg")} alt="img" style={{ height: "260px", width: "312px" }} />
                <p className="m-0 retailer">ARE YOU A STORE EMPLOYEE?</p>
                <p className="m-0 assets">Teaching and Learning</p>
                <p className="m-0 essentials"> Essentials for Retailing Our Brands:</p>
                <p className="list">Adequate guidance under our experts will ensure that you are learning from the best and will guarantee you success.</p>
                <button className="bg-transparent goToButton p-2" style={{ width: "50%" }}>
                  Open The Course &nbsp; &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none">
                    <path
                      d="M16 4.5L16.3712 4.16506L16.6734 4.5L16.3712 4.83494L16 4.5ZM0.999999 5C0.723857 5 0.499999 4.77614 0.499999 4.5C0.499999 4.22386 0.723857 4 0.999999 4V5ZM13.2133 0.665055L16.3712 4.16506L15.6288 4.83494L12.4709 1.33494L13.2133 0.665055ZM16.3712 4.83494L13.2133 8.33494L12.4709 7.66506L15.6288 4.16506L16.3712 4.83494ZM16 5H0.999999V4H16V5Z"
                      fill="#58615A"
                    />
                  </svg>{" "}
                  &nbsp; &nbsp;
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="line_ruler w-100 m-0 p-0" style={{ height: "2px" }}></hr>
        {/* second row */}
        <div className="row bg_paleYellow m-0">
          <div className="d-flex justify-content-center align-items-center p-4 flex-column">
            <p className=" number">YOUR NUMBER ONE SOURCE FOR UNIQUE BEAUTY BRANDS</p>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <div className="d-flex align-items-start flex-column">
                <div className="bg-white d-flex  align-items-center" style={{ height: "202px", width: "260px" }}>
                  <img src={require("./images/image 20.jpg")} className="mx-auto my-auto" alt="img" />
                </div>
                <div className="d-flex  flex-column">
                  <p className="mt-2 brandName">RMS Beauty</p>
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
              <div className="d-flex align-items-start flex-column">
                <div className="bg-white d-flex  align-items-center" style={{ height: "202px", width: "260px" }}>
                  <img src={require("./images/image 19.jpg")} className="mx-auto my-auto" alt="img" />
                </div>
                <div className="d-flex  flex-column">
                  <p className="mt-2 brandName">Bobbi Brown</p>
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
              <div className="d-flex align-items-start flex-column">
                <div className="bg-white d-flex  align-items-center" style={{ height: "202px", width: "260px" }}>
                  <img src={require("./images/image 4.jpg")} className="mx-auto my-auto" alt="img" />
                </div>
                <div className="d-flex  flex-column">
                  <p className="mt-2 brandName">Eve Lom</p>
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
              <div className="d-flex align-items-start flex-column">
                <div className="bg-white d-flex  align-items-center" style={{ height: "202px", width: "260px" }}>
                  <img src={require("./images/image 21.jpg")} className="mx-auto my-auto" alt="img" />
                </div>
                <div className="d-flex  flex-column">
                  <p className="mt-2 brandName">ReVive</p>
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
            </div>
          </div>
        </div>
        <div className="row bg-white m-0" style={{ height: "20px" }}></div>

        {/* third row */}
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
      </div>
    </>
  );
};

export default Dashboard;
