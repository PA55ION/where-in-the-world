import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <button><i className="ri-arrow-left-line"></i> Back</button>
      </Link>
    </div>
  );
};

export default BackButton;
