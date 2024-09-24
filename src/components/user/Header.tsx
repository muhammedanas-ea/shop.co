import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { USER_ROUTES } from "../../constants/routes";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: "Shop", path: USER_ROUTES.CATEGORY },
    { label: "On Sale", path: USER_ROUTES.CATEGORY },
    { label: "New Arrivals", path: USER_ROUTES.CATEGORY },
    { label: "Brands", path: USER_ROUTES.CATEGORY },
  ];

  return (
    <div className="py-5 sticky top-0 bg-white z-30 border-b">
      <header className="flex app-container items-center justify-between max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          {isMobileMenuOpen ? (
            <IoMdClose
              size={24}
              className="lg:hidden cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <LuMenu
              size={24}
              className="lg:hidden cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
          <Link to={USER_ROUTES.HOME}>
            <h1 className="font-bold text-2xl md:text-3xl sub-font">SHOP.CO</h1>
          </Link>
          <ul className="lg:flex items-center gap-5 hidden">
            {menuItems.map((item) => (
              <Link key={item.label} to={item.path}>
                <li className="font-normal text-base">{item.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <Link to={USER_ROUTES.CART}>
            <FiShoppingCart size={24} />
          </Link>
          <FaRegCircleUser size={24} />
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-5 absolute top-full left-0 w-full z-20">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link key={item.label} to={item.path}>
                <li
                  onClick={toggleMobileMenu}
                  className="font-normal text-base"
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
