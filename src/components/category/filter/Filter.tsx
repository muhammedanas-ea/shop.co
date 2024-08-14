import { BsFilter } from "react-icons/bs";
import FilterCategory from "../filterCategory/FilterCategory";
import { IoMdClose } from "react-icons/io";
import { FilterProps } from "./types";

const Filter = ({ open, setOpen }: FilterProps) => {
  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-white",
  ];

  return (
    <div className="p-6">
      <form>
        <div className="flex items-center justify-between border-b border-[#0000001c] pb-6">
          <h3 className="font-bold text-xl">Filters</h3>
          <button type="button" onClick={() => setOpen(false)}>
            {open ? <IoMdClose size={24} /> : <BsFilter size={24} />}
          </button>
        </div>

        <FilterCategory title="Categories">
          <ul className="py-3 text-base text-[#0007]">
            {categories.map((category) => (
              <li key={category} className="py-1">
                {category}
              </li>
            ))}
          </ul>
        </FilterCategory>

        <FilterCategory title="Price">
          <input type="range" min="50" max="200" className="w-full py-2" />
        </FilterCategory>

        <FilterCategory title="Colors">
          <div className="grid grid-cols-6 md:grid-cols-12 lg:grid-cols-5 gap-4 py-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`${color}  w-9 h-9 rounded-full border border-[#0000001c]`}
              />
            ))}
          </div>
        </FilterCategory>

        <FilterCategory title="Size">
          <ul className="space-y-2">
            {sizes.map((size) => (
              <li key={size}>{size}</li>
            ))}
          </ul>
        </FilterCategory>

        <FilterCategory title="Dress Style">
          <ul className="text-base text-[#0007] py-2">
            {dressStyles.map((style) => (
              <li key={style} className="py-1">
                {style}
              </li>
            ))}
          </ul>
        </FilterCategory>

        <button className="bg-black text-white w-full py-3 font-medium text-sm rounded-[62px] mt-4">
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
