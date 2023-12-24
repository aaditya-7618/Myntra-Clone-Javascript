import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-2" /* style={{ position: "absolute",bottom: "0",right:"0",left:"280px"}}*/>
          <ul className="nav justify-content-center border-bottom pb-3 mb-1">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
