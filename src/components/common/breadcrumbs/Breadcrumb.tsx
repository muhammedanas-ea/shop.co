import { IoIosArrowForward } from "react-icons/io";
import { breadcrumbItemsProps } from "./types";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }: breadcrumbItemsProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <div className="py-3">
        <ul className="flex text-sm md:text-base items-center gap-2">
          {items.map((item) => (
            item.url ? (
              <li key={item.text} className="flex items-center gap-2">
                <Link
                  className="text-[#0000008a]"
                  to={item.url}
                  aria-label="Home"
                >
                  {item.text}
                </Link>
                <span aria-hidden="true">
                  <IoIosArrowForward size={16} />
                </span>
              </li>
            ) : (
              <li>{item.text}</li>
            )
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Breadcrumb;
