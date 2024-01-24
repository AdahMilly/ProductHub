import { Button, Col, Container, Row } from "react-bootstrap";
import ImgP from "../../images/laura.jpg";
import NarBar from "../NavBar/NarBar";
import { useState } from "react";
import DeleteProductModal from "./DeleteProductModal";
import EditProduct from "./UpdateProduct";
import { Product } from "../../api/types";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const ViewProduct = () => {
  const { productId } = useParams();
  const productsState = useAppSelector((state) => state.products);
  const product = productsState.products.find(
    (product) => product.id === Number(productId)
  ) as Product;
  const { title, description, price, image, category } = product;
  const [state, setState] = useState({
    showModal: false,
    showEditModal: false,
  });
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
  const openEditModal = (e: any) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      showEditModal: !prev.showEditModal,
    }));
  };
  const closeEditModal = () => {
    setState((prev) => ({ ...prev, showEditModal: false }));
  };
  return (
    <>
      <Container>
        <DeleteProductModal onHide={closeModal} show={state?.showModal} />
        <EditProduct
          onHide={closeEditModal}
          show={state?.showEditModal}
          product={product}
        />
        <NarBar />
        <Row>
          <Col sm={4}>
            <img src={ImgP} alt="" height={400} width={400} />
          </Col>
          <Col md={8}>
            <Col sm={2}>
              Title: <span>{title}</span>
            </Col>
            <Col sm={2}>
              Description: <span>{description}</span>
            </Col>
            <Col sm={2}>
              Price: <span>{price}</span>
            </Col>
            <Col sm={2}>
              Category: <span>{category}</span>
            </Col>
          </Col>
        </Row>
        <div className="tns d-flex flex-row gap-3 justify-space-between m-6">
          <Button variant="danger" onClick={handleOpenModal}>
            Delete Product
          </Button>
          <Button variant="primary" onClick={openEditModal}>
            Edit Product
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ViewProduct;
