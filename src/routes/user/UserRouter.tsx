import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { USER_ROUTES } from "../../constants/routes";
import Spinner from "../../components/user/common/spinner/Spinner"; 
import Layout from "../../layout/user/Layout";
import HomePage from "../../pages/user/HomePage"

const CategoryPage = lazy(() => import("../../pages/user/CategoryPage"));
const ProductDetailPage = lazy(() => import("../../pages/user/ProductDetailPage"));
const CartPage = lazy(() => import("../../pages/user/CartPage"));

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={USER_ROUTES.HOME} element={<HomePage />} />
        <Route path={USER_ROUTES.CATEGORY} element={<Suspense fallback={<Spinner />}><CategoryPage /></Suspense>} />
        <Route path={USER_ROUTES.PRODUCT_DETAILS} element={<Suspense fallback={<Spinner  />}><ProductDetailPage /></Suspense>} />
        <Route path={USER_ROUTES.CART} element={<Suspense fallback={<Spinner />}><CartPage /></Suspense>} />
      </Route>
    </Routes>
  );
};

export default UserRouter;
