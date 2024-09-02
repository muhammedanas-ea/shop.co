import React from "react";
import { typographyProps } from "./types";
import classNames from "classnames";

const Typography: React.FC<typographyProps> = ({
  tag = "h1",
  className,
  children,
  ...props
}) => {
  const typographyClasses = classNames({
    "font-bold text-4xl md:text-6xl sub-font": tag === "h1",
    "font-bold text-[32px] md:text-5xl sub-font": tag === "h2",
    "text-black font-bold md:text-2xl text-xl": tag === "h3",
    "font-bold text-2xl md:text-4xl": tag === "h4",
    "font-bold text-base md:text-xl": tag === "h5",
    // "": tag === "h6",
    "md:text-base text-sm": tag === "p",
    // "": tag === "span",
  },className);

  return React.createElement(
    tag,
    { className: typographyClasses, ...props },
    children
  );
};

export default Typography;
