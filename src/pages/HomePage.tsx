import heroImg from "../assets/heroImag/Rectangle_2-removebg-preview.png";

const HomePage = () => {
  return (
    <section className="min-h-screen bg-[#F2F0F1] pt-5">
      <div className="app-container flex flex-col lg:flex-row items-center lg:items-start relative">
        {/* Text Section */}
        <div className="flex-1 pt-8 lg:pt-14  lg:text-left px-4 lg:px-0">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl max-w-lg mx-auto lg:mx-0">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="max-w-lg text-sm md:text-base my-4 mx-auto lg:mx-0">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="flex justify-center lg:justify-start mt-4 lg:mt-8">
            <button className="bg-black text-white py-4 px-8 rounded-[62px] w-full md:w-auto text-base">
              Shop Now
            </button>
          </div>
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8 mx-auto lg:mx-0 max-w-xs md:max-w-none">
            <div>
              <h2 className="font-bold text-2xl md:text-4xl">200+</h2>
              <p className="text-xs md:text-base">International Brands</p>
            </div>
            <div>
              <h2 className="font-bold text-2xl md:text-4xl">2000+</h2>
              <p className="text-xs md:text-base">High-Quality Products</p>
            </div>
            <div>
              <h2 className="font-bold text-2xl md:text-4xl">30,000+</h2>
              <p className="text-xs md:text-base">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[30rem] w-96 md:h-[35rem] lg:h-auto mt-8 lg:mt-0 md:w-full lg:w-auto">
          <img
            className="w-full h-full object-cover lg:object-contain"
            src={heroImg}
            alt="Fashion showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
