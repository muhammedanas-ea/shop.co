import { FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-container sticky top-0 bg-white z-30 border-b">
      <header className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <LuMenu size={24} className="lg:hidden" />
          <Link to={'/'}><h1 className="font-bold text-2xl md:text-3xl sub-font">SHOP.CO</h1></Link>
          <ul className="lg:flex items-center gap-5 hidden">
            <Link to={'category'}><li className="font-normal text-base">Shop</li></Link>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <FiShoppingCart size={24} />
          <FaRegCircleUser size={24} />
        </div>
      </header>
    </div>
  );
};
export default Header;
