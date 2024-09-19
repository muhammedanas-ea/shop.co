import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
// import { useState } from "react";

const Layout = () => {
  // const [isopen,setOpen] = useState(false)
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
};

export default Layout;
