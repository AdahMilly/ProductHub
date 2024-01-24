// import DisplayImg from "../../images/placeholderr.jpg";
import { Button, ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { Product } from "../../api/types";

const ProductCard = ({ product }: { product: Product }) => {
  const { id, title, description, price, image, category } = product;
  const navigate = useNavigate();
  const handleViewProduct = (productId:number) => {
    navigate(`${routes.viewProduct}/${productId}`);
  };
  return (
    <div className="prdoduct-card-cont">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top">{image}</Card.Img> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="sects">
          <ListGroup.Item>{price}</ListGroup.Item>
          <ListGroup.Item>{category}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" onClick={() => handleViewProduct(id)}>
            View Product
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
