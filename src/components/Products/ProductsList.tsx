import React, { useEffect, useState } from "react";
import { Button, Col, Container, DropdownDivider, Form } from "react-bootstrap";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchProductsAction,
  fetchProductsByCategoryAction,
  fetchSortedProductsAction,
} from "../../redux/product/ProductActions";
import { CircleLoader } from "react-spinners";
import { GetProductsFilter } from "../../api/types";

const ProductsList = () => {
  const [state, setState] = useState({
    showModal: false,
    isLoading: false,
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortedProducts, setSortedProducts] = useState("");
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.products);

  useEffect(() => {
    if (productsState.products.length === 0) {
      dispatch(fetchProductsAction({}));
    }
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

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const sorts = ["desc", "asc"];
  return (
    <Container>
      <AddProduct onHide={closeModal} show={state?.showModal} />
      <div className="d-flex flex-row w-100 justify-content-between align-items-center gap-3">
        <div className="sect-one d-flex flex-row justify-space-between align-items-center gap-3">
          <Form.Select
            value={sortedProducts}
            onChange={(e) => {
              setSortedProducts(e.target.value);

              dispatch(
                fetchSortedProductsAction({
                  params: { sort: e.target.value } as GetProductsFilter,
                })
              );
            }}>
            <option>Sort Products</option>
            {sorts.map((sortss) => (
              <option value={sortss}>{sortss}</option>
            ))}
          </Form.Select>
          <Button
            onClick={() => {
              setSortedProducts("");
              dispatch(fetchProductsAction({}));
            }}>
            Clear
          </Button>
        </div>

        <div className="search-products d-flex flex-row justify-space-between align-items-center gap-3">
          <div className="filter-products d-flex flex-row gap-2">
            <Form.Select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                dispatch(
                  fetchProductsByCategoryAction({
                    category: e.target.value,
                    filter: {},
                  })
                );
              }}>
              <option>Select Category</option>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </Form.Select>
            <Button
              onClick={() => {
                setSelectedCategory("");
                dispatch(fetchProductsAction({}));
              }}>
              Cancel
            </Button>
          </div>
          <div className="btn-product m-2">
            <Button variant="primary" onClick={handleOpenModal}>
              Add Product
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <DropdownDivider />
      {productsState.isLoading ? (
        <div>
          <CircleLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="product-list row h-100">
          {productsState?.products?.length > 0 ? (
            productsState?.products?.map((product) => (
              <Col className="mt-3" xs={12} sm={6} md={4}>
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <h1>No products found</h1>
          )}
        </div>
      )}
    </Container>
  );
};

export default ProductsList;
