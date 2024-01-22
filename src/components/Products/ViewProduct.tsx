import { Button, Col, Container, Row } from "react-bootstrap";
import ImgP from "../../images/laura.jpg";
import NarBar from "../NavBar/NarBar";
import { useState } from "react";
import DeleteProductModal from "./DeleteProductModal";

type Props = {};

const ViewProduct = (props: Props) => {
  const [state, setState] = useState({
    showModal: false,
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
  return (
    <Container>
      <DeleteProductModal onHide={closeModal} show={state?.showModal} />
      <NarBar />
      <Row>
        <Col sm={4}>
          <img src={ImgP} alt="" height={400} width={400} />
        </Col>
        <Col sm={2}>Title</Col>
        <Col sm={2}>Description</Col>
        <Col sm={2}>Price</Col>
        <Col sm={2}>Category</Col>
      </Row>
      <div className="tns d-flex flex-row gap-3 justify-space-between mt-6">
        <Button variant="danger" onClick={handleOpenModal}>
          Delete Product
        </Button>
        <Button variant="primary" onClick={handleOpenModal}>
          Edit Product
        </Button>
      </div>
    </Container>
  );
};

export default ViewProduct;
