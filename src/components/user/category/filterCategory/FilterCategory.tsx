import SectionHeader from "../sectionText/SectionText";
import {filterProps} from "./types"

const FilterCategory = ({ title, children }:filterProps) => (
  <section className="py-3 border-b border-[#0000001c]">
    <SectionHeader title={title} />
    {children}
  </section>
);

export default FilterCategory