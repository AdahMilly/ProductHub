import { useEffect } from "react";
import { productsApi } from "./api";

function App() {
  useEffect(() => {
    productsApi.getSingleProduct(5);
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;