import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const LoadingPage = () => {
  return (
    <>
      <div className="text-center">
        <div className="spinner-border loader" style={{width: "7rem", height: "7rem"}}  role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
