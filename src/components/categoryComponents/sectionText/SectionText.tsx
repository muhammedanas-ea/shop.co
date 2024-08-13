import { IoIosArrowUp } from "react-icons/io";
import { SectionTextProps } from "./types";

const SectionHeader = ({ title }:SectionTextProps) => (
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-xl">{title}</h3>
      <IoIosArrowUp size={16} />
    </div>
  );
  export default SectionHeader