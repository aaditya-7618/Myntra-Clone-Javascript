import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./../App.css";

const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <center>
      <h1 className="welcome">There are no Post Available</h1>
      {/* <button type="button" className="btn btn-primary fetch-data"
      onClick={onGetPostsClick}>Fetch Posts from Server</button> */}
    </center>
  );
};

export default WelcomeMessage;

