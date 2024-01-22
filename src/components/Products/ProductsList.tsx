import React, { useEffect } from "react";
import { productsApi } from "../../api";
import { Button, Container, DropdownDivider } from "react-bootstrap";
import ProductCard from "./ProductCard";

type Props = {};

const ProductsList = (props: Props) => {
  useEffect(() => {
    productsApi.getAllProducts();
  }, []);
  return (
    <Container>
      <div className="d-flex flex-row w-100 justify-content-between align-items-center gap-3">
        <h1>Products</h1>
        <div className="search-products d-flex flex-row gap-10">
          <p>Filter</p>
          <span>
            <i className="fa-solid fa-filter"></i>
          </span>
          <Button variant="primary">Add Product</Button>
        </div>
      </div>
      <hr />
      <DropdownDivider />
      <div className="product-list">
        <ProductCard />
      </div>
    </Container>
  );
};

export default ProductsList;
