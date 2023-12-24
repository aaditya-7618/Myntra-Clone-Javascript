import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Let's Connect</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            onClick={() => {
              setSelectedTab("Create Post");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Create Post" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
          
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("All Posts");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "All Posts" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#All Posts"></use>
              </svg>
              All Posts
            </a>
          </li>

        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="./photo.jpg"
              alt=""
              width="40"
              height="40"
              className="rounded-circle me-2"
            />
            <strong>Aaditya</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
