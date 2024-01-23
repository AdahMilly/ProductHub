import React, { useEffect, useState } from "react";
import { productsApi } from "../../api";
import { Button, Container, DropdownDivider } from "react-bootstrap";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";



const ProductsList = () => {
    const [state, setState] = useState({
        showModal:false
    })
  useEffect(() => {
    productsApi.getAllProducts();
  }, []);

   const handleOpenModal = (e: any) => {
     e.preventDefault();
     setState((prev) => ({
       ...prev,
       showModal: !prev.showModal,
     }));
   };
   const closeModal = () => {
     setState((prev) => ({ ...prev, showModal: false }));
   };
  return (
    <Container>
      {/* <AddProduct onHide={closeModal} show={state?.showModal}/> */}
      <div className="d-flex flex-row w-100 justify-content-between align-items-center gap-3">
        <h1>Products</h1>
        <div className="search-products d-flex flex-row justify-space-between align-items-center gap-3">
          <div className="filter-products d-flex flex-row gap-2">
            <p>Filter</p>
            <span>
              <i className="fa-solid fa-filter"></i>
            </span>
          </div>
          <div className="btn-product m-2">
            <Button variant="primary" onClick={handleOpenModal}>Add Product</Button>
          </div>
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