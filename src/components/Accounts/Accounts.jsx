import React from "react";
import AccountCard from "./AccountCard";
import "./Accounts.css";

const Accounts = () => {
  return (
    <>
      <div className="container-fluid">
        {/* your account heading */}
        <div className="row p-3">
          <div className="col-6 d-flex align-items-center ps-5">
            <p className="m-0 accountHeading">your accounts</p>
          </div>
          <div className="col-6">
            <div className="bg_paleYellow d-flex gap-2 justify-content-center align-items-center p-2 ">
              <p className="m-0 accountSort">Sort By:</p>
              {/* icon sort */}
              <div className="iconSort p-1 ms-3">
                <div className="position-relative">
                  <p className="m-0 iconLetter ">A</p>
                  <p className="m-0 iconLetter">Z</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
                    <path
                      d="M1.99163 14.4298C1.53601 13.9308 0.797325 13.9308 0.341705 14.4298C-0.113902 14.9288 -0.113902 15.7378 0.341705 16.2368L4.42458 20.7085C4.42473 20.7087 4.42442 20.7084 4.42458 20.7085L6.17506 22.6257C6.38261 22.853 6.64885 22.9768 6.92033 22.997C6.99616 23.0027 7.07258 23.0003 7.14876 22.9896C7.3702 22.9586 7.5851 22.8581 7.76407 22.6879C7.78728 22.6659 7.80968 22.6429 7.83115 22.619L13.6583 16.2368C14.1139 15.7378 14.1139 14.9288 13.6583 14.4298C13.2027 13.9308 12.464 13.9308 12.0084 14.4298L8.16668 18.6374L8.16668 1.27777C8.16668 0.572059 7.64437 -3.34146e-07 7.00001 -3.0598e-07C6.35566 -2.77815e-07 5.83334 0.572059 5.83334 1.27777L5.83335 18.6374L1.99163 14.4298Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              {/* manufacture by */}
              <div className="position-relative" style={{ minWidth: "150px" }}>
                <select className="form-control accountSelect optionInSelect">
                  <option selected disabled className="optionInSelect">
                    Manufacturer
                  </option>
                </select>
                <div className="position-absolute" style={{ right: "0px", top: "2px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M25.5 12.75L17 21.25L8.5 12.75" stroke="#CACACA" stroke-width="2" />
                  </svg>
                </div>
              </div>
              {/* search by account */}
              <div className="position-relative">
                <input class="form-control accountSelect ps-4" style={{maxWidth:"18 0px"}} type="text" placeholder="Search By Account" />

                <div className="position-absolute" style={{ left: "5px", top: "5px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                      d="M8.14539 0.0232725C3.65379 0.0232725 0 3.67706 0 8.16866C0 12.6603 3.65379 16.314 8.14539 16.314C9.51847 16.314 10.8683 15.9882 12.0086 15.3599C12.1 15.4698 12.2012 15.5711 12.3112 15.6624L14.6384 17.9897C14.8533 18.2315 15.1154 18.4268 15.4085 18.5637C15.7016 18.7005 16.0196 18.776 16.3429 18.7856C16.6663 18.7951 16.9882 18.7384 17.2888 18.619C17.5895 18.4996 17.8626 18.3201 18.0913 18.0913C18.3201 17.8626 18.4996 17.5895 18.619 17.2888C18.7384 16.9882 18.7951 16.6663 18.7856 16.3429C18.776 16.0196 18.7005 15.7016 18.5637 15.4085C18.4268 15.1154 18.2315 14.8533 17.9897 14.6384L15.6624 12.3112C15.5491 12.1978 15.4243 12.0964 15.2901 12.0086C15.9184 10.8683 16.314 9.54174 16.314 8.14539C16.314 3.65379 12.6603 0 8.16866 0L8.14539 0.0232725ZM8.14539 2.35053C11.3803 2.35053 13.9635 4.93378 13.9635 8.16866C13.9635 9.70465 13.405 11.1243 12.4275 12.1715C12.4043 12.1948 12.381 12.2181 12.3577 12.2414C12.2478 12.3327 12.1465 12.434 12.0552 12.5439C11.0312 13.4748 9.63483 14.0101 8.12212 14.0101C4.88723 14.0101 2.30398 11.4268 2.30398 8.19193C2.30398 4.95705 4.88723 2.3738 8.12212 2.3738L8.14539 2.35053Z"
                      fill="#CACACA"
                    />
                  </svg>
                </div>
              </div>
              {/* clear all */}
              <p className="m-0 accountSort">Clear All</p>
            </div>
          </div>
        </div>
        <div className="row p-4 bg_paleYellow">
          <div className=" d-flex gap-4 justify-content-center align-items-center flex-wrap">
            <AccountCard name="Scott Miller" />
            <AccountCard name="Two Skirts" />
            <AccountCard name="Woo Charlotte" />
            <AccountCard name="Cosmetic World" />
            <AccountCard name="Maison Weiss" />
            <AccountCard name="Scott Miller" />
            <AccountCard name="Two Skirts" />
            <AccountCard name="TCM Chattanooga" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
