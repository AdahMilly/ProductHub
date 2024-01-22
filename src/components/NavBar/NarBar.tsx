import { Button, Container, DropdownDivider } from "react-bootstrap";
import React from "react";

type Props = {};

const NarBar = (props: Props) => {
  return (
    <Container>
      <div className="d-flex flex-row w-100 justify-content-between m-6">
        <h1>Products Catalogue</h1>
        <Button variant="light" size="lg">
          Login
        </Button>
      </div>
      <hr />
      <DropdownDivider />
    </Container>
  );
};

export default NarBar;
