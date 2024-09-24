import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PaginationProps } from "./types";


const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-between items-center text-sm py-3 border-t">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`flex items-center gap-3 px-4 py-2 rounded-md border ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaArrowLeft />
        <span>Previous</span>
      </button>
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`h-10 w-10 flex items-center justify-center rounded-md ${
              currentPage === index + 1
                ? "bg-gray-800 text-white"
                : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`flex items-center gap-3 px-4 py-2 rounded-md border ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <span>Next</span>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
