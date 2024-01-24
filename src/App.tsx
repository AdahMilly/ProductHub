import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import ViewProduct from "./components/Products/ViewProduct";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Layout />} />
          <Route path={`${routes.viewProduct}/:productId`} element={<ViewProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
