import React from "react";
import { useSelector } from "react-redux";

function ProductComponent(props) {
  const prods = useSelector((state) => state);
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <h1>ProductComponent</h1>
        <div className="image"></div>
        <div className="content">
          <div className="header"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
