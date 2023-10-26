import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row footer">
          <div className="d-flex p-5 justify-content-evenly gap-5 align-items-center">
            <div className="d-flex flex-column justify-content-center">
              <p className="m-0 formatting">Our Brands</p>
              <p className="m-0 formatting">FOR RETAILERS</p>
              <p className="m-0 formatting">ABOUTS US</p>
              <p className="m-0 formatting">CONTACT</p>
              <p className="m-3 formatting" style={{ color: "#875F3B" }}>
                Forms
              </p>
              <p className="m-0 formatting">BECOME A RETAIL PARTNER</p>
              <p className="m-0 formatting">BECOME A BRAND PARTNER</p>
              <p className="m-0 formatting">CUSTOMER SERVICE</p>
            </div>
            <div>
              <img className="ps-3" src="/images/logo.jpg" alt="logo" />
              <p className="m-3 formatting" style={{ color: "#875F3B" }}>
                based in rochester, ny
              </p>
              <p className="formatting mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="6" width="16" height="12" rx="2" stroke="#875F3B" />
                  <path d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9" stroke="#875F3B" />
                </svg>
              </p>
              <p className="m-0 formatting">Beautyfashion.com</p>
              <p className="m-0 formatting">instagram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
