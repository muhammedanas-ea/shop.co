import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbMessage } from "react-icons/tb";
import { LuUserCircle } from "react-icons/lu";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(0);
  const handleClick = (id: number) => setIsActive(id);
  const sidebarLinks = [
    {
      id: 1,
      path: "/admin",
      name: "Dashboard",
      icon: <RxDashboard size={20} />,
    },
    {
      id: 2,
      path: "/admin",
      name: "Users",
      icon: <LuUserCircle size={20} />,
    },
    {
      id: 3,
      path: "/admin/products",
      name: "Products",
      icon: <HiOutlineShoppingBag size={20} />,
    },
    {
      id: 4,
      path: "/admin",
      name: "Message",
      icon: <TbMessage size={20} />,
    },
  ];

  return (
    <div className="h-screen hidden border-r md:flex flex-col md:w-60 fixed left-0 top-0 pt-8 px-4 bg-white">
      <div className="mb-8 px-5 flex space-x-3 items-center">
        <h1 className="text-2xl font-bold admin-font">Shop.co</h1>
      </div>

      <ul className="mt-3 space-y-3">
        {sidebarLinks.map((item) => {
          return (
            <li
              key={item.id}
              className={`rounded-md py-2 px-5 text-[#72767C] hover:bg-[#F3F5F8] hover:text-[#5F6165] ${
                isActive === item.id ? "bg-[#F3F5F8] text-[#5F6165]" : ""
              }`}
            >
              <Link
                to={item.path}
                className="flex md:justify-start justify-center items-center md:space-x-3"
                onClick={() => handleClick(item.id)}
              >
                <span>{item.icon}</span>
                <span className="text-sm font-medium hidden md:flex admin-font">
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-3  py-2 px-5">
          <span>
            <CiLogout size={20} />
          </span>
          <span className="hidden md:flex text-sm font-medium text-[#5F6165] admin-font">
            Logout
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
