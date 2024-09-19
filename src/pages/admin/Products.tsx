import { IoIosAdd } from "react-icons/io";
import img1 from "../../assets/productImg/image 10.png";
import { Link } from "react-router-dom";

const Products = () => {
  // Dummy data for products
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$49.99",
      image: img1,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$59.99",
      image: img1,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$39.99",
      image: img1,
    },
    {
      id: 4,
      name: "Product 3",
      price: "$39.99",
      image: img1,
    },
    {
      id: 4,
      name: "Product 3",
      price: "$39.99",
      image: img1,
    },
    {
      id: 4,
      name: "Product 3",
      price: "$39.99",
      image: img1,
    },
    {
      id: 4,
      name: "Product 3",
      price: "$39.99",
      image: img1,
    },
    {
      id: 4,
      name: "Product 3",
      price: "$39.99",
      image: img1,
    },
  ];

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-5 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div>
          <p className="text-sm text-gray-400 admin-font">
            Manage your inventory
          </p>
          <h1 className="font-semibold text-xl text-gray-900 tracking-tight admin-font">
            Product List
          </h1>
        </div>

        <Link to={"/admin/addproducts"}>
          <button className="bg-blue-500 text-base hover:bg-blue-600 px-4 py-2 rounded-lg text-white flex items-center shadow-md gap-1 focus:outline-none focus:ring-4 focus:ring-teal-300">
            <IoIosAdd size={24} color="#ffff"/>
            <span className="admin-font ">Add New Product</span>
          </button>
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg  hover:shadow-lg transition-shadow duration-200 p-4"
          >
            <div className="w-full h-45 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="">
              <h2 className="text-lg font-semibold text-gray-800 admin-font">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-1 admin-font">{product.price}</p>
              <div className="mt-3 flex justify-between items-center">
                <button className="text-blue-600 hover:underline admin-font">
                  Edit
                </button>
                <button className="text-red-600 hover:underline admin-font">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
