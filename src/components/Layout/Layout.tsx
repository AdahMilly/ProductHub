import React from "react";
import ProductsList from "../Products/ProductsList";
import NarBar from "../NavBar/NarBar";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <NarBar />
      <ProductsList />
    </div>
  );
};

export default Layout;
