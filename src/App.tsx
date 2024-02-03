import { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import Layout from "./components/Layout/Layout";
import SignIn from "./components/auth/SignIn";

const ViewProduct = lazy(() => import("./components/Products/ViewProduct"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={routes.login} element={<SignIn />} />

          <Route path={routes.home} element={<Layout />} />
          <Route
            path={`${routes.viewProduct}/:productId`}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ViewProduct />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
