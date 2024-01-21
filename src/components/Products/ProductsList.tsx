import React, { useEffect } from "react";
import { productsApi } from "../../api";

type Props = {};

const ProductsList = (props: Props) => {
  useEffect(() => {
    productsApi.getAllProducts();
  }, []);
  return (
    <div className="container">
      <h1>Products</h1>
      <div className="search-products">
        <p>Filter</p>
        <span>
          <i className="fa-solid fa-filter"></i>
        </span>
      </div>
    </div>
  );
};

export default ProductsList;
