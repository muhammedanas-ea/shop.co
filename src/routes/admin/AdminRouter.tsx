import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../../layout/admin/Layout";
import Spinner from "../../components/user/common/spinner/Spinner";

const Dashboard = lazy(() => import("../../pages/admin/Dashboard"));
const Products = lazy(() => import("../../pages/admin/Products"));
const AddProducts = lazy(() => import("../../pages/admin/AddProduts"));

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Suspense fallback={<Spinner />}><Dashboard /></Suspense>} />
        <Route path="/products" element={<Suspense fallback={<Spinner />}><Products /></Suspense>} />
        <Route path="/addproducts" element={<Suspense fallback={<Spinner />}><AddProducts /></Suspense>} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
