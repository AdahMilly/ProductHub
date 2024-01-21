import { useEffect } from "react";
import { productsApi } from "./api";
import NarBar from "./components/NavBar/NarBar";
import ProductsList from "./components/Products/ProductsList";

function App() {
  return (
    <div>
      <NarBar />
      <ProductsList />
    </div>
  );
}

export default App;
