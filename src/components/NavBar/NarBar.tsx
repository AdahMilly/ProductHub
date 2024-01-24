import { Button, Container, DropdownDivider } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";

type Props = {};

const NarBar = (props: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(routes.login);
  };
  return (
    <Container>
      <div className="d-flex flex-row m-4 justify-content-between">
        <h1>Products Catalogue</h1>
        <Button variant="primary" onClick={handleOnClick}>
          Login
        </Button>
      </div>
      <hr />
      <DropdownDivider />
    </Container>
  );
};

export default NarBar;
