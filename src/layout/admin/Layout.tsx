import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import React from "react";


const Layout = React.memo(() => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex">
        <Sidebar />
        <div className="md:ml-60 w-full">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
});

export default Layout;
