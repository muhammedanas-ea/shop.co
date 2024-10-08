import Breadcrumb from "../../components/user/common/breadcrumbs/Breadcrumb";
import Button from "../../components/user/common/button/Button";
import mainImg from "../../assets/productImg/image 10.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import ProductList from "../../components/user/home/productList/ProductList";
import ProductSection from "../../components/user/productDeatils/productSection/ProductSection";
import Typography from "../../components/user/common/typography/Typography";
import { productDetailBreadcrumbItems } from "../../constants/breadcrumbItems";

const products = [
  {
    image: mainImg,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: mainImg,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: mainImg,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: mainImg,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
  },
];

const ProductDetailPage = () => {
  const colors = ["#000000", "#333333", "#555555"];
  const sizes = ["Small", "Medium", "Large"];

  return (
    <div className="app-container mb-36 max-w-screen-2xl mx-auto">
      <Breadcrumb items={productDetailBreadcrumbItems} />
      <div className="flex flex-col gap-5 lg:flex-row mt-3">
        <div className="flex flex-col-reverse lg:flex-row gap-3 w-full lg:w-1/2">
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:w-[40%]">
            {Array(3)
              .fill(null)
              .map(() => (
                <div
                  key={Math.random()} 
                  className="bg-[#F0EEED] rounded-[20px] w-full"
                  aria-label="Product Thumbnail 1"
                >
                  <img
                    src={mainImg}
                    alt="product image"
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              ))}
          </div>
          <div
            className="w-full h-[50vh] lg:h-auto bg-[#F0EEED] rounded-[20px]"
            aria-label="Main Product Image"
          >
            <img
              src={mainImg}
              alt="product image"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="pb-6 border-b">
            <Typography tag="h4" className="sub-font">
              One Life Graphic T-shirt
            </Typography>
            <p className="text-yellow-500 text-xs md:text-2xl mt-2">
              ★★★★ <span className="text-black">4.4/5</span>
            </p>
            <h2 className="font-bold text-3xl mt-2">$260</h2>
            <p className="text-base max-w-xl mt-3">
              This graphic t-shirt is perfect for any occasion. Crafted from
              soft and breathable fabric, it offers superior comfort and style.
            </p>
          </div>

          <div className="py-6 border-b">
            <p className="text-base">Select Colors</p>
            <div className="mt-2 flex gap-3 items-center">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-9 h-9 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="py-6 border-b">
            <p className="text-base">Choose Size</p>
            <div className="mt-3 flex gap-3 items-center">
              {sizes.map((size, index) => (
                <Button key={index} variant="primary" className="bg-[#F0EEED]">
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3 items-center">
            <div className="flex items-center gap-4 text-lg p-3 border bg-[#F0EEED] rounded-[62px] w-[170px] justify-around">
              <FaMinus size={15} />
              <h1>1</h1>
              <FaPlus size={15} />
            </div>
            <Button variant="solid" className="w-full py-4">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div>
      <ProductSection/>
    </div>
      <ProductList title="You might also like" products={products} />
    </div>
  );
};

export default ProductDetailPage;
