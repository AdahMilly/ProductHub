import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { MdAddCircle, MdFrontLoader } from "react-icons/md";
import { AddProductProps, Product } from "../../api/types";

type Props = {
  show: boolean;
  onHide: () => void;
  product: Product;
};
const EditProduct = (props: Props) => {
  const { show, onHide: closeTagsModal, product } = props;
  console.log(product);
  

  const [state, setState] = useState<AddProductProps>({
    title: product.title || "",
    description: product.description || "",
    price: product.price || 0,
    image: product.image || "",
    category: product.category || "",
  });
  const handleOnChange = (name: string, value: string | number) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Modal show={show} onHide={closeTagsModal}>
        <Modal.Header>Add Tag</Modal.Header>
        <Modal.Body>
          <form>
            <Form.Group className="gap-2 mb-2">
              <Form.Label>Title </Form.Label>
              <Form.Control
                required
                className="w-100"
                name="title"
                value={state.title}
                onChange={(event) =>
                  handleOnChange("title", event?.target.value)
                }
              />
            </Form.Group>{" "}
            <Form.Group className="gap-2 mb-2">
              <Form.Label>Description </Form.Label>
              <Form.Control
                required
                as="textarea"
                className="w-100"
                name="description"
                value={state.description}
                onChange={(event) =>
                  handleOnChange("description", event?.target.value)
                }
              />
            </Form.Group>{" "}
            <Form.Group className="gap-2 mb-2">
              <Form.Label>Price </Form.Label>
              <Form.Control
                required
                className="w-100"
                name="price"
                value={state.price}
                onChange={(event) =>
                  handleOnChange("price", event?.target.value)
                }
              />
              <Form.Label>Image </Form.Label>
              <Form.Control
                required
                type="text"
                className="w-100"
                name="image"
                value={state.image}
                onChange={(event) =>
                  handleOnChange("image", event?.target.value)
                }
              />
              <Form.Label>Category </Form.Label>
              <Form.Select
                required
                className="w-100"
                name="category"
                value={state.category}
                onChange={(event) =>
                  handleOnChange("category", event?.target.value)
                }>
                <option>Select category</option>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelry</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
              </Form.Select>
            </Form.Group>
            <Button
              disabled={false}
              className="d-flex align-items-center gap-2"
              type="submit"
              variant="danger">
              {false ? <MdFrontLoader /> : <MdAddCircle />} Edit Product
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-3 justify-content-between">
            <Button variant="danger" onClick={closeTagsModal}>
              Cancel
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProduct;
