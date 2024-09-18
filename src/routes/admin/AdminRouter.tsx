import { Route, Routes } from "react-router-dom";
import Layout from "../../layout/admin/Layout";
import Dashboard from "../../pages/admin/Dashboard"
import Products from "../../pages/admin/Products";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
