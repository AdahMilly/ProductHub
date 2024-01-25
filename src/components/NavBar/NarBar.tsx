import { Button, Container, DropdownDivider } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import useAuth from "../../hooks/useAuth";

type Props = {};

const NarBar = (props: Props) => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(routes.login);
  };
  return (
    <Container>
      <div className="d-flex flex-row m-4 justify-content-between">
        <h1>Products Catalogue</h1>
        <div className="d-flex align-items-center gap-2">
          {user?.email ? (
            <>
              <img
                style={{ height: "40px", width: "40px" }}
                src={user?.picture}
                alt="pic"
              />
              <Button variant="primary" onClick={logoutUser}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="primary" onClick={handleOnClick}>
              Login
            </Button>
          )}
        </div>
      </div>
      <hr />
      <DropdownDivider />
    </Container>
  );
};

export default NarBar;
