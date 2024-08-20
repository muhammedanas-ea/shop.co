import classNames from "classnames";
import { buttonProps } from "./types";

const Button = ({
  type,
  className,
  variant,
  children,
  ...props
}: buttonProps) => {
  const buttonClasses = classNames(
    "cursor-pointer rounded-[62px]",
    {
      "px-6 py-2 bg-[#F0EEED] border hover:bg-black hover:text-white text-sm rounded-[62px]" : variant === "primary",
      "bg-black text-white": variant === "solid",
      "border bg-white": variant === "outline",
      "bg-white text-black hover:text-white px-2 py-2 hover:bg-black border rounded-full":
        variant === "ghost",
    },
    className
  );
  return (
    <button type={type} className={buttonClasses} {...props}>
      <span className="flex gap-3 justify-center items-center">{children}</span>
    </button>
  );
};
export default Button;
