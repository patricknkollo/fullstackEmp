import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductListing() {
  const prods = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts= ()=>{
      const response = await axios.get("")

  }
  return (
    <div>
      <div>
        <h1>ProductListing</h1>
      </div>
    </div>
  );
}

export default ProductListing;
