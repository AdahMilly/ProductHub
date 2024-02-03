import { Outlet, Navigate } from "react-router-dom";
// import { useAppSelector } from "redux/hooks";
import { routes } from "../../routes/routes";
import useAuth from "../../hooks/useAuth";

export const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user?.email) {
    <Navigate to={routes.login} />;
  }
};
