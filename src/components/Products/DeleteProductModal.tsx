import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
// import { useAddTagMutation } from "./tagsSlice";
// import SpinnerButton from "components/common/SpinnerButton";
import { MdDelete, MdFrontLoader } from "react-icons/md";

type AddTags = {
  tag_name: string;
  tagCategory: string | "";
  subcategory_name: string | "";
};

type Props = {
  show: boolean;
  onHide: () => void;
  defaultValue: { tagCategory: string; tagSubCategory: string };
};
const DeleteProductModal = (props: Props) => {
  const { show, onHide: closeModal, defaultValue } = props;

  const [state, setState] = useState<AddTags>({
    tag_name: "",
    tagCategory: defaultValue.tagCategory || "",
    subcategory_name: defaultValue.tagSubCategory || "",
  });
  //   const [addTag] = useAddTagMutation();
  //   const handleAddTag = async (e: React.FormEvent, tagsData: AddTags) => {
  //     e.preventDefault();
  //     try {
  //       const response = await addTag({ ...tagsData }).unwrap();
  //       if (response.result.message === "tag created succcessful") {
  //         closeTagsModal();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const handleOnChange = (name: string, value: string | number) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header>Add Tag</Modal.Header>
        <Modal.Body>
          <h2>
            Are you sure you want to delete this product?
            <br>This action can't be undone.</br>
          </h2>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-3 justify-content-between">
            <Button variant="danger" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={closeModal}>
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteProductModal;
