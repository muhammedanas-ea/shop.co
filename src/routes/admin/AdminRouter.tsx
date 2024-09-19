import { Route, Routes } from "react-router-dom";
import Layout from "../../layout/admin/Layout";
import Dashboard from "../../pages/admin/Dashboard"
import Products from "../../pages/admin/Products";
import AddProducts from "../../pages/admin/AddProduts";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproducts" element={<AddProducts />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
