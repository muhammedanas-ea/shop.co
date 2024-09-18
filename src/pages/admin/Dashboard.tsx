import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaShoppingCart, FaUserFriends } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import ProductChart from "../../components/admin/dashboard/chart/ProductChart";
import SalesChart from "../../components/admin/dashboard/chart/SalesChart";
import StatCard from "../../components/admin/dashboard/statCard/StatCard";

const Dashboard = () => {
  const stats = [
    {
      icon: <AiOutlineDollarCircle size={26} color="#fff" />,
      color: "green-500",
      hoverColor: "green-500",
      title: "Total Sales",
      value: "$1K",
    },
    {
      icon: <FaShoppingCart size={26} color="#fff" />,
      color: "blue-500",
      hoverColor: "blue-500",
      title: "Total Orders",
      value: "300",
    },
    {
      icon: <BsBoxSeam size={26} color="#fff" />,
      color: "orange-500",
      hoverColor: "orange-500",
      title: "Sold Products",
      value: "5",
    },
    {
      icon: <FaUserFriends size={26} color="#fff" />,
      color: "purple-500",
      hoverColor: "purple-500",
      title: "Customers",
      value: "48",
    },
  ];
  const products = [
    { id: 1, name: "Product 1", sales: 75 },
    { id: 2, name: "Product 2", sales: 50 },
    { id: 3, name: "Product 3", sales: 35 },
    { id: 4, name: "Product 4", sales: 90 },
  ];

  return (
    <div className="p-5">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            color={stat.color}
            hoverColor={stat.hoverColor}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <SalesChart />
        <ProductChart />
      </div>
      <div className="mt-5 h-auto rounded-2xl shadow-sm bg-white border p-6">
        <h1 className="text-xl font-bold text-[#242731] mb-4 admin-font">Top Products</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto admin-font">
            <thead>
              <tr className="bg-gray-100 text-left text-sm tracking-wider">
                <th className="px-4 py-3 text-gray-600 admin-font">#</th>
                <th className="px-4 py-3 text-gray-600 admin-font">Name</th>
                <th className="px-4 py-3 text-gray-600 admin-font">Popularity</th>
                <th className="px-4 py-3 text-gray-600 admin-font">Sales</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              {products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50 capitalize">
                  <td className="px-4 py-3 text-gray-700 admin-font">{index + 1}</td>
                  <td className="px-4 py-3 text-gray-700 font-medium admin-font">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 text-gray-700 font-medium">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${product.sales}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700 admin-font">{product.sales}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
