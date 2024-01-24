import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { MdAddCircle, MdFrontLoader } from "react-icons/md";
import { AddProductPayload, AddProductProps } from "../../api/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addProductAction } from "../../redux/product/ProductActions";

type Props = {
  show: boolean;
  onHide: () => void;
};
const AddProduct = (props: Props) => {
  const { show, onHide: closeTagsModal } = props;

  const [productState, setProductState] = useState<AddProductProps>({
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "jewelry",
  });
  const dispatch = useAppDispatch();
  const handleAddProduct = (e: React.FormEvent, product: AddProductPayload) => {
    e.preventDefault();
    dispatch(addProductAction(product));
    setProductState(product)
  };

  const handleOnChange = (name: string, value: string | number) => {
    setProductState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Modal show={show} onHide={closeTagsModal}>
        <Modal.Header>
          <h1>Add new product</h1>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) =>
              handleAddProduct(e, productState as AddProductPayload)
            }>
            <Form.Group className="gap-2 mb-2">
              <Form.Label>Title </Form.Label>
              <Form.Control
                required
                className="w-100"
                name="title"
                value={productState.title}
                onChange={(event) =>
                  handleOnChange("title", event?.target.value)
                }
              />
            </Form.Group>{" "}
            <Form.Group className="gap-2 mb-2">
              <Form.Label>Description </Form.Label>
              <Form.Control
                required
                className="w-100"
                name="description"
                value={productState.description}
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
                value={productState.price}
                onChange={(event) =>
                  handleOnChange("price", event?.target.value)
                }
              />
              <Form.Label>Image </Form.Label>
              <Form.Control
                required
                type="file"
                className="w-100"
                name="image"
                value={productState.image}
                onChange={(event) =>
                  handleOnChange("image", event?.target.value)
                }
              />
              <Form.Label required className="w-100">
                Category{" "}
              </Form.Label>
              <Form.Select
                name="category"
                value={productState.category}
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
              {false ? <MdFrontLoader /> : <MdAddCircle />} Add Product
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

export default AddProduct;
