import { Routes, Route } from "react-router-dom";
import Layout from "../../layout/user/Layout";
import HomePage from "../../pages/user/HomePage";
import CategoryPage from "../../pages/user/CategoryPage";
import ProductDetailPage from "../../pages/user/ProductDetailPage";
import CartPage from "../../pages/user/CartPage";

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/productdetails" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};
export default UserRouter;
