import { Button, Col, Container, DropdownDivider, Row } from "react-bootstrap";
import { useState } from "react";
import DeleteProductModal from "./DeleteProductModal";
import EditProduct from "./UpdateProduct";
import { Product } from "../../api/types";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { routes } from "../../routes/routes";

const ViewProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
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

  const handleclick = () => {
    navigate(routes.home);
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
        <div className="sect d-flex align-items-center justify-content-between ">
          {" "}
          <h2 className="p-4">Product Detail</h2>
          <Button type="button" className="btn btn-dark" onClick={handleclick}>
            Back
          </Button>
        </div>

        <hr />
        <DropdownDivider />
        <Row>
          <Col sm={4} className="d-flex gap-4">
            <img src={image} alt="" height={400} width={400} />
          </Col>
          <Col md={8}>
            <p className="fw-bold">
              Title: <span>{title}</span>
            </p>
            <p>
              Description: <span>{description}</span>
            </p>
            <p>
              Price: <span>${price}</span>
            </p>
            <p>
              Category: <span>{category}</span>
            </p>
          </Col>
        </Row>
        <div className="tns d-flex flex-row gap-3 justify-space-between mt-6">
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
