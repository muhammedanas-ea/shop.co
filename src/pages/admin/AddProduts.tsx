import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const AddProducts = () => {
  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex gap-3 items-center mb-5 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
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
    </div>
  );
};

export default AddProducts;
