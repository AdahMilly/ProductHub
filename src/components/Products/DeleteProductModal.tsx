import { Button, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteProductAction } from "../../redux/product/ProductActions";
import { Product } from "../../api/types";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../routes/routes";

type Props = {
  show: boolean;
  onHide: () => void;
};
const DeleteProductModal = (props: Props) => {
  const { productId } = useParams();
  const { show, onHide: closeModal } = props;

  const navigate = useNavigate();

  const productState = useAppSelector((state) => state.products);
  const product = productState.products.find(
    (product) => product.id === Number(productId)
  ) as Product;
  const dispatch = useAppDispatch();

  const handleDelete = (productId: number) => {
    dispatch(deleteProductAction(productId));
    navigate(routes.home);
  };

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header>
          <h1>Delete Tag</h1>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this product? This action can't be
            undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-3 justify-content-between">
            <Button variant="danger" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(productId as unknown as number)}>
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteProductModal;
