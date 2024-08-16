import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import Button from "./common/button/Button";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] app-container  absolute w-full ">
      <div className="bg-black flex flex-col lg:flex-row justify-between items-center rounded-[20px] px-10 py-10 space-y-8 lg:space-y-0 -mt-20 relative ">
        <h1 className="font-bold text-white text-[32px] md:text-5xl sub-font max-w-2xl">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="w-full lg:w-auto">
          <form className="flex flex-col  gap-4 w-full" action="">
            <div className="relative w-full">
              <FaEnvelope
                size={20}
                className="absolute left-6 top-6 transform -translate-y-1/2 text-gray-400"
              />
              <input
                className="rounded-[62px] text-base py-3 px-14 w-full border border-gray-300 focus:border-gray-500 focus:outline-none"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <Button
              variant="outline"
              className="text-base font-semibold  py-3 px-8 hover:bg-gray-200"
            >
              {" "}
              Subscribe to Newsletter
            </Button>
          </form>
        </div>
      </div>
      <div className="py-10 grid-cols-2 grid lg:grid-cols-6 gap-5 border-b border-b-[#0000004d]">
        <div className="col-span-2">
          <h1 className="font-bold text-2xl md:text-3xl sub-font">SHOP.CO</h1>
          <p className="mt-3 text-sm">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-4 mt-8">
            <Button variant="ghost"><FaTwitter size={24} /></Button>
            <Button variant="ghost"><MdOutlineFacebook size={24} /></Button>
            <Button variant="ghost"><FaInstagram size={24} /></Button>
            <Button variant="ghost"><FaGithub size={24} /></Button>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-base">company</h1>
          <ul className="mt-3 flex flex-col gap-2 text-base text-gray-500">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-base">Help</h1>
          <ul className="mt-3 flex flex-col gap-2 text-base text-gray-500">
            <li> Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-base">FAQ</h1>
          <ul className="mt-3 flex flex-col gap-2 text-base text-gray-500">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-base">Resources</h1>
          <ul className="mt-3 flex flex-col gap-2 text-base text-gray-500">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="flex  justify-center lg:justify-between pt-5 pb-[100px]">
        <h1 className="text-sm text-gray-400">
          Shop.co © 2000-2023, All Rights Reserved
        </h1>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
