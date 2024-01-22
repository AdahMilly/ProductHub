import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";

type Props = {};

const ProductCard = (props: Props) => {
  const navigate = useNavigate();
  const handleViewProduct = () => {
    navigate(routes.viewProduct);
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="../../images/placeholderr.jpg/100px180?text=Image cap"
        />
        <Card.Body>
          <Card.Title>Gucci</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="sects">
          <ListGroup.Item>Price</ListGroup.Item>
          <ListGroup.Item>Category</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" onClick={handleViewProduct}>
            View Product
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
