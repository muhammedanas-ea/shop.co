import { FaEnvelope } from "react-icons/fa";

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
              <FaEnvelope size={20} className="absolute left-6 top-7 transform -translate-y-1/2 text-gray-400" />
              <input
                className="rounded-[62px] text-base py-3 px-14 w-full border border-gray-300 focus:border-gray-500 focus:outline-none"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <button className="bg-[#fff] text-base text-black font-semibold rounded-[62px] py-3 px-8 hover:bg-gray-200 transition-colors duration-300">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
