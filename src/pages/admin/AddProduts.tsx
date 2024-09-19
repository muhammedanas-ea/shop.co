import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const AddProducts = () => {
  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex gap-3 items-center mb-5 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <Link to={"/admin/products"}>
          <button className="px-2 py-2 rounded-lg border">
            <IoIosArrowRoundBack size={24} />
          </button>
        </Link>
        <div>
          <p className="text-sm text-gray-400 admin-font">Back to list</p>
          <h1 className="font-semibold text-xl text-gray-900 tracking-tight admin-font">
            Add New Product
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-4 rounded-lg border col-span-2">
          <h1 className="font-medium text-lg text-gray-900 tracking-tight admin-font">
            General information
          </h1>
          <div className="flex flex-col mt-5">
            <label className="text-sm admin-font" htmlFor="product-name">
              Name Product
            </label>
            <input
              className="rounded-lg bg-gray-100 border-none mt-1"
              type="text"
              id="product-name"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm admin-font" htmlFor="product-description">
              Description Product
            </label>
            <textarea
              className="rounded-lg bg-gray-100 border-none mt-1 h-32"
              id="product-description"
            ></textarea>
          </div>
          <div className="flex flex-col mt-4">
            {/* Title Section */}
            <p className="text-sm font-semibold text-gray-800">Size</p>
            <p className="text-xs text-gray-500">Pick Available Size</p>

            {/* Size Options */}
            <div className="flex flex-row mt-3 space-x-3">
              {/* Size Option 1 */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-green-300 active:bg-green-300 transition duration-150 ease-in-out">
                <span className="text-sm">XS</span>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-green-300 active:bg-green-300 transition duration-150 ease-in-out">
                <span className="text-sm">S</span>
              </div>

              {/* Size Option 2 */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-green-300 active:bg-green-300 transition duration-150 ease-in-out">
                <span className="text-sm ">M</span>
              </div>

              {/* Size Option 3 */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-green-300 active:bg-green-300 transition duration-150 ease-in-out">
                <span className="text-sm ">XL</span>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-green-300 active:bg-green-300 transition duration-150 ease-in-out">
                <span className="text-sm ">XXL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-1/2">2</div>
      </div>
    </div>
  );
};

export default AddProducts;
