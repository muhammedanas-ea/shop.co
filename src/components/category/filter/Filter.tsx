import { BsFilter } from "react-icons/bs";
import FilterCategory from "../filterCategory/FilterCategory";
import { FilterDataProps, FilterProps } from "./types";
import Button from "../../common/button/Button";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

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

const Filter = ({ open, setOpen }: FilterProps) => {
  const [filterData, setFilterData] = useState<FilterDataProps>({
    color: [],
    size: [],
    dressStyles: [],
    categories: [],
  });

  console.log(filterData);
  const handleCategoriesChange = (category: string) => {
    setFilterData((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];

      return { ...prev, categories: newCategories };
    });
  };

  const handleColorChange = (color: string) => {
    setFilterData((prev) => {
      const newColors = prev.color.includes(color)
        ? prev.color.filter((c) => c !== color)
        : [...prev.color, color];
      return { ...prev, color: newColors };
    });
  };

  const handleDressStylesChange = (style: string) => {
    setFilterData((prev) => {
      const newStyle = prev.dressStyles.includes(style)
        ? prev.dressStyles.filter((s) => s != style)
        : [...prev.dressStyles, style];
      return { ...prev, dressStyles: newStyle };
    });
  };

  const handleSizeChange = (size: string) => {
    setFilterData((prev) => {
      const newSize = prev.size.includes(size)
        ? prev.size.filter((s) => s != size)
        : [...prev.size, size];
      return { ...prev, size: newSize };
    });
  };

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
              <li key={category} className="py-1 flex items-center gap-3">
                <input
                  type="checkbox"
                  id={category}
                  name={category}
                  onChange={() => handleCategoriesChange(category)}
                />
                <label htmlFor={category}>{category}</label>
              </li>
            ))}
          </ul>
        </FilterCategory>

        <FilterCategory title="Price">
          <input type="range" min="50" max="200" className="w-full py-2" />
        </FilterCategory>

        <FilterCategory title="Colors">
          <div className="grid grid-cols-7 md:grid-cols-12 lg:grid-cols-5 gap-4 py-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`${color} w-9 h-9 rounded-full border border-[#0000001c] flex items-center justify-center cursor-pointer`}
                onClick={() => handleColorChange(color)}
              >
                {filterData.color.includes(color) && (
                  <GiCheckMark size={20} className="text-[#cccccc] font-bold" />
                )}
              </div>
            ))}
          </div>
        </FilterCategory>

        <FilterCategory title="Size">
          <ul className="py-2 flex flex-wrap gap-3">
            {sizes.map((size) => (
              <li key={size} className="text-sm">
                <Button
                  type="button"
                  variant="primary"
                  className={`${
                    !filterData.size.includes(size)
                      ? "bg-[#F0EEED]"
                      : "bg-black text-white"
                  } px-6 py-2`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </Button>
              </li>
            ))}
          </ul>
        </FilterCategory>

        <FilterCategory title="Dress Style">
          <ul className="text-base text-[#0007] py-2">
            {dressStyles.map((style) => (
              <li key={style} className="py-1 flex items-center gap-3">
                <input
                  type="checkbox"
                  id={style}
                  name={style}
                  onChange={() => handleDressStylesChange(style)}
                />
                <label htmlFor={style}>{style}</label>
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
