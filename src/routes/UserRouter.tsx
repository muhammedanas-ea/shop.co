import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductDetailPage from "../pages/ProductDetailPage";

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/productdetails" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  );
};
export default UserRouter;
