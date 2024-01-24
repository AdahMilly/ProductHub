import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { Card, Container } from "react-bootstrap";

type Props = {};
//386032736176-u0pjie31gk6dg6du1qhd00oou270sbgb.apps.googleusercontent.com

const SignIn = (props: Props) => {
  const responseMessage = (response: any) => {
    let credentialResponse = jwtDecode(response.credential);
    console.log(credentialResponse);
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
            onSuccess={responseMessage}
            onError={errorMessage}
          />
        </Card>
      </div>
    </Container>
  );
};

export default SignIn;
