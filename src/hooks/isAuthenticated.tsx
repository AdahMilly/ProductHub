const isAuthenticated = (Component: any) => {
  if (localStorage.getItem("user")) {
    return (props: any) => <Component {...props} />;
  } else {
    <span>You must be authenticated</span>;
  }
};

export default isAuthenticated;
