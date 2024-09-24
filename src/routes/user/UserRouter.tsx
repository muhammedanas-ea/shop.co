import { Routes, Route } from "react-router-dom";
import Layout from "../../layout/user/Layout";
import HomePage from "../../pages/user/HomePage";
import CategoryPage from "../../pages/user/CategoryPage";
import ProductDetailPage from "../../pages/user/ProductDetailPage";
import CartPage from "../../pages/user/CartPage";
import { USER_ROUTES } from "../../constants/routes";

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={USER_ROUTES.HOME} element={<HomePage />} />
        <Route path={USER_ROUTES.CATEGORY} element={<CategoryPage />} />
        <Route path={USER_ROUTES.PRODUCT_DETAILS} element={<ProductDetailPage />} />
        <Route path={USER_ROUTES.CART} element={<CartPage />} />
      </Route>
    </Routes>
  );
};
export default UserRouter;
