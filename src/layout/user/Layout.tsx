import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout =  React.memo(() => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
});

export default Layout;
