import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
