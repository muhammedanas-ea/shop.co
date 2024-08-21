import { useState } from "react";
import ReviewCard from "../../common/reviewCard/ReviewCard";
import Button from "../../common/button/Button";

const ProductSection = () => {
    const [selectedSection, setSelectedSection] = useState("productDetails");
  return (
    <section>
    <div className="flex flex-row items-center justify-between md:justify-around  mt-12 border-b gap-5 text-base md:text-xl font-medium">
  <h1
    className={`cursor-pointer whitespace-nowrap py-3 ${
      selectedSection === "productDetails" ? "text-black font-bold border-b-2 border-b-black" : ""
    }`}
    onClick={() => setSelectedSection("productDetails")}
  >
    Product Details
  </h1>
  <h1
    className={`cursor-pointer whitespace-nowrap py-3 ${
      selectedSection === "reviews" ? "text-black font-bold border-b-2 border-b-black" : ""
    }`}
    onClick={() => setSelectedSection("reviews")}
  >
    Rating & Reviews
  </h1>
  <h1
    className={`cursor-pointer whitespace-nowrap py-3 ${
      selectedSection === "faqs" ? "text-black font-bold border-b-2 border-b-black" : ""
    }`}
    onClick={() => setSelectedSection("faqs")}
  >
    FAQs
  </h1>
</div>


      {/* Section Content */}
      <div className="py-6">
        {selectedSection === "productDetails" && (
          <div>
            {/* Product Details Content */}
            <h1 className="font-bold text-xl md:text-2xl">Product Details</h1>
            <p>Here are the details of the product...</p>
          </div>
        )}

        {selectedSection === "reviews" && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h1 className="font-bold text-xl md:text-2xl">
                All Reviews
                <span className="font-normal text-[#00000062]"> (45)</span>
              </h1>
              <Button variant="solid" className="px-7 py-3">
                Write a Review
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        )}

        {selectedSection === "faqs" && (
          <div>
            {/* FAQs Content */}
            <h1 className="font-bold text-xl md:text-2xl">FAQs</h1>
            <p>Here are some frequently asked questions...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection