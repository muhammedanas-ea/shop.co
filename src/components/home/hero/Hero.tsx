import heroImg from "../../../assets/heroImag/Rectangle_2-removebg-preview.png";
import icon from "../../../assets/heroImag/Vector-removebg-preview.png";
import Button from "../../common/button/Button";
import Typography from "../../common/typography/Typography";
import brand1 from "../../../assets/brandImg/Group (1).png";
import brand2 from "../../../assets/brandImg/Group.png";
import brand3 from "../../../assets/brandImg/gucci-logo-1 1.png";
import brand4 from "../../../assets/brandImg/prada-logo-1 1.png";
import brand5 from "../../../assets/brandImg/zara-logo-1 1.png";

const Hero = () => {
  const brands = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 },
  ];

  return (
    <section className="bg-[#F2F0F1] lg:max-h-screen">
      <div className="app-container flex flex-col md:items-center lg:flex-row gap-5 max-w-screen-2xl mx-auto">
        <div className="max-w-xl flex flex-col justify-center md:text-center lg:text-start mt-10 ">
          <Typography tag="h1">FIND CLOTHES THAT MATCHES YOUR STYLE</Typography>
          <Typography tag="p" className="mt-3 mb-5 text-gray-500">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Typography>
          <Button variant="solid" className="w-full lg:w-52 py-4 text-base">
            Shop Now
          </Button>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 text-center gap-5">
            <div>
              <Typography tag="h4">200+</Typography>
              <h1 className="text-xs md:text-base text-[#0000008a]">
                International Brands
              </h1>
            </div>
            <div>
              <Typography tag="h4">2,000+</Typography>
              <h1 className="text-xs md:text-base text-[#0000008a]">
                High-Quality Products
              </h1>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Typography tag="h4">30,000+</Typography>
              <h1 className="text-xs md:text-base text-[#0000008a]">
                Happy Customers
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:mt-14 ">
          <div className="lg:ml-20 relative">
            <img src={heroImg} alt="main image" />
            <div className="absolute top-0 w-16 h-16 md:w-28 md:h-28 right-0">
              <img className="w-full h-full object-cover" src={icon} alt="star" />
            </div>
            <div className="absolute top-36 md:w-14 md:h-14 w-11 h-11">
              <img className="w-full h-full object-cover" src={icon} alt="star" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-28 bg-black overflow-hidden">
        <div className="marquee flex items-center gap-5 h-full justify-around">
          {brands.map((item) => {
            return (
              <img
                key={item.image}
                className="object-contain"
                src={item.image}
                alt={item.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
