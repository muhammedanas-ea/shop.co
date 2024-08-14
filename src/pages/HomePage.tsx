import heroImg from "../assets/heroImag/Rectangle_2-removebg-preview.png";
import icon from "../assets/heroImag/Vector-removebg-preview.png"

const HomePage = () => {
  return (
    <>
    <section className="bg-[#F2F0F1] lg:h-[84vh]">
      <div className="app-container flex flex-col md:items-center lg:flex-row gap-5 ">
        <div className="max-w-lg flex flex-col justify-center md:text-center lg:text-start mt-10 ">
          <h1 className="font-bold text-4xl md:text-6xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="md:text-base text-sm mt-3 mb-5">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full lg:w-52 rounded-[62px] py-4 bg-black text-white text-base">
            Shop Now
          </button>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 text-center gap-5">
            <div>
              <h1 className="font-bold text-2xl md:text-4xl">200+</h1>
              <h1 className="text-xs md:text-base text-[#0000008a]">
                International Brands
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-2xl md:text-4xl">2,000+</h1>
              <h1 className="text-xs md:text-base text-[#0000008a]">
                High-Quality Products
              </h1>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h1 className="font-bold text-2xl md:text-4xl">30,000+</h1>
              <h1 className="text-xs md:text-base text-[#0000008a]">
                Happy Customers
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:mt-10 ">
          <div className="lg:ml-24 relative">
            <img src={heroImg} alt="" />
            <div className="absolute top-0 w-16 h-16 md:w-28 md:h-28 right-0">
              <img className="w-full h-full object-cover" src={icon} alt="" />
            </div>
            <div className="absolute top-36 md:w-14 md:h-14 w-11 h-11">
              <img className="w-full h-full object-cover" src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      aaaaaaaaaaaaaaaa
    </section>
    </>
  );
};

export default HomePage;
