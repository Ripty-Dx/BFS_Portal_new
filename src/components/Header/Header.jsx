import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row">
          <div className="d-flex justify-content-evenly align-items-center header p-2">
            {/* options */}
            <div className="d-flex justify-content-center align-items-center gap-4">
              <div className="text-uppercase">
                <Link to="/brands"> OUR BRAnDS</Link>
              </div>
              <div className="text-uppercase"> Merchants Center</div>
              <div className="dropdown">
                <button className="border-0 header bg-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  REPORT
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item header_drop_down_list" href="#1">
                      <ul style={{ listStyle: "disc", paddingLeft: "10px" }}>
                        <li> Sales Report</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header_drop_down_list" href="#1">
                      <ul style={{ listStyle: "disc", paddingLeft: "10px" }}>
                        <li>Compression Report</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header_drop_down_list" href="#1">
                      <ul style={{ listStyle: "disc", paddingLeft: "10px" }}>
                        <li>Newness Report</li>
                      </ul>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* logo */}
            <div>
              <Link to="/" className="d-flex justify-content-center align-items-center">
                <img src="/images/beautyFashion.png" className="w-50" alt="logo" />
              </Link>
            </div>
            {/* icons */}
            <div className="d-flex justify-content-center align-items-center gap-2 header">
              <div className="text-uppercase mx-2"> SUPPORT </div>
              <button className="mx-2 text-uppercase bg-dark text-white border-0 "> Order Now </button>
              <div className="mx-2">
                <span className="header_light_color">Welcome,</span>
                <div className="text-decoration-underline"> Lindsay Crames</div>
              </div>
              {/* person img */}
              <button className="border-0 bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 10.3385C6.51472 10.3385 4.5 8.02412 4.5 5.16923C4.5 2.31434 6.51472 0 9 0C11.4853 0 13.5 2.31434 13.5 5.16923C13.5 8.02412 11.4853 10.3385 9 10.3385ZM5.25 11.8154H12.75C15.6495 11.8154 18 14.1297 18 16.9846V18.4615C18 18.8694 17.6642 19.2 17.25 19.2H0.75C0.335786 19.2 0 18.8694 0 18.4615V16.9846C0 14.1297 2.35051 11.8154 5.25 11.8154Z"
                    fill="#58615A"
                  />
                </svg>
              </button>
              {/* cart img */}
              <button className="border-0 bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                  <path
                    d="M24 3.50244H6.20561L5.27121 0.870236L5.11707 0.359375H4.55947H0V1.91246H4.0288L8.68374 15.021L8.84188 15.5319H9.39548H20.4264L20.9595 13.9788H9.92588L9.05494 11.5264H21.5592L24 3.50244Z"
                    fill="#58615A"
                  />
                  <path
                    d="M10.9057 20.0404C11.882 20.0404 12.6734 19.2291 12.6734 18.2284C12.6734 17.2277 11.882 16.4165 10.9057 16.4165C9.92938 16.4165 9.13794 17.2277 9.13794 18.2284C9.13794 19.2291 9.92938 20.0404 10.9057 20.0404Z"
                    fill="#58615A"
                  />
                  <path
                    d="M18.0393 20.0404C19.0156 20.0404 19.8071 19.2291 19.8071 18.2284C19.8071 17.2277 19.0156 16.4165 18.0393 16.4165C17.063 16.4165 16.2716 17.2277 16.2716 18.2284C16.2716 19.2291 17.063 20.0404 18.0393 20.0404Z"
                    fill="#58615A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="line_ruler w-100 m-0 p-0"></hr>
    </>
  );
};

export default Header;
