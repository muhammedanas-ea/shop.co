import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const AddProducts = () => {
  const [images, setImages] = useState([]);

  // Handle image upload and validation
  const handleImageUpload = (event:string) => {
    const files = Array.from(event.target.files);

    if (files) {
      const newImageURLs = files.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImageURLs]);
    }
  };

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
        <div className="bg-white p-4 rounded-lg border md:col-span-2">
          <h1 className="font-medium text-lg text-gray-900 tracking-tight admin-font">
            General information
          </h1>
          <div className="flex flex-col mt-5">
            <label className="text-sm admin-font" htmlFor="product-name">
              Name Product
            </label>
            <input
              className="rounded-lg bg-gray-200 border-none mt-1"
              type="text"
              id="product-name"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm admin-font" htmlFor="product-description">
              Description Product
            </label>
            <textarea
              className="rounded-lg bg-gray-200 border-none mt-1 h-32"
              id="product-description"
            ></textarea>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-sm font-semibold text-gray-800">Size</p>
            <p className="text-xs text-gray-500">Pick Available Size</p>
            <div className="flex flex-row mt-3 space-x-3">
              {/* Size Options */}
              {["XS", "S", "M", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-green-300 active:bg-green-300 transition duration-150 ease-in-out"
                >
                  <span className="text-sm">{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h1 className="font-medium text-lg text-gray-900 tracking-tight admin-font">
            Upload Img
          </h1>
          <div className="flex flex-col-reverse gap-3 w-full mt-5">
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3 h-[10vh]">
              {images.slice(1, 4).map((image, index) => (
                <div
                  key={index}
                  className="relative bg-gray-200 rounded-lg w-full h-full"
                  aria-label={`Product Thumbnail ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Uploaded ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}

              <div
                className="bg-gray-200 rounded-lg w-full flex items-center justify-center"
                aria-label="Upload Image"
              >
                <label htmlFor="upload-input" className="cursor-pointer">
                  <CiCirclePlus size={30} color="black" />
                </label>
                <input
                  id="upload-input"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            {/* Main Product Image */}
            <div
              className="relative w-full h-[40vh] bg-gray-200 rounded-lg"
              aria-label="Main Product Image"
            >
              {images[0] ? (
                <>
                  <img
                    src={images[0]}
                    alt="Main Product"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h1 className="font-medium text-lg text-gray-900 tracking-tight admin-font">
            Pricing and stock
          </h1>
          <div className="flex flex-col mt-5">
            <label className="text-sm admin-font" htmlFor="product-name">
              price
            </label>
            <input
              className="rounded-lg bg-gray-200 border-none mt-1"
              type="text"
              id="product-name"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-sm admin-font" htmlFor="product-name">
              stock
            </label>
            <input
              className="rounded-lg bg-gray-200 border-none mt-1"
              type="text"
              id="product-name"
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h1 className="font-medium text-lg text-gray-900 tracking-tight admin-font">
            Category
          </h1>
          <div className="flex flex-col mt-5">
            <label className="text-sm admin-font" htmlFor="product-name">
              Name Product
            </label>
            <input
              className="rounded-lg bg-gray-200 border-none mt-1"
              type="text"
              id="product-name"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-sm admin-font" htmlFor="product-name">
              Name Product
            </label>
            <input
              className="rounded-lg bg-gray-200 border-none mt-1"
              type="text"
              id="product-name"
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h1 className="font-medium text-lg text-gray-900 tracking-tight admin-font">
            General information
          </h1>
          <div className="flex flex-col mt-5">
            <label className="text-sm admin-font" htmlFor="product-name">
              Name Product
            </label>
            <input
              className="rounded-lg bg-gray-200 border-none mt-1"
              type="text"
              id="product-name"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-sm admin-font" htmlFor="product-name">
              Name Product
            </label>
            <input
              className="rounded-lg bg-gray-200 border-none mt-1"
              type="text"
              id="product-name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
