import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const navigate = useNavigate()
  const {user} = useAuth()
  useEffect(() => {
  if (user?.email) {
    navigate(routes.home);
  }
  }, [user?.email])
  
  const responseMessage = (response: any) => {
    let credentialResponse:any = jwtDecode(response.credential);
    console.log(credentialResponse);
    if(credentialResponse?.email){
      localStorage.setItem("user", JSON.stringify(credentialResponse))
      navigate(routes.home)
    }
    //dispatch action to store user to local storage, redirect to home page
  };
  const errorMessage: any = (error: any) => {
    console.log(error);
  };
  return (
    <Container>
      <div className="signin d-flex align-items-center justify-content-center vh-100 p-4">
        <Card>
          <h2 data-testId="login">Sign in with Google</h2>
          <GoogleLogin
            width={10}
            onSuccess={(Credential) =>responseMessage(Credential)}
            onError={errorMessage}
          />
        </Card>
      </div>
    </Container>
  );
};

export default SignIn;
