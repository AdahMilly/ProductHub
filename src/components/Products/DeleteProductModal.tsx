import { Button, Modal } from "react-bootstrap";
// import { useAddTagMutation } from "./tagsSlice";
// import SpinnerButton from "components/common/SpinnerButton";
import { MdDelete, MdFrontLoader } from "react-icons/md";

type Props = {
  show: boolean;
  onHide: () => void;
};
const DeleteProductModal = (props: Props) => {
  const { show, onHide: closeModal } = props;

  const handleDelete = () => {};

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

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header>
          <h1>Add Tag</h1>
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
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteProductModal;
