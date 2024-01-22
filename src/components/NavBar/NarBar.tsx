import { Button, Container, DropdownDivider } from "react-bootstrap";

type Props = {};

const NarBar = (props: Props) => {
  return (
    <Container>
      <div className="d-flex flex-row w-100 justify-content-between">
        <h1>Products Catalogue</h1>
        <Button variant="primary">Login</Button>
      </div>
      <hr />
      <DropdownDivider />
    </Container>
  );
};

export default NarBar;
