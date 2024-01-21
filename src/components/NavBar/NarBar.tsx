import { Button, Container, DropdownDivider } from "react-bootstrap";
import React from "react";

type Props = {};

const NarBar = (props: Props) => {
  return (
    <Container>
      <div className="d-flex flex-row jusify-content-between">
        <h1>Products Catalogue</h1>
        <Button variant="light" size="lg">
          Login
        </Button>
      </div>
      <DropdownDivider />
    </Container>
  );
};

export default NarBar;
