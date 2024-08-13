import classNames from "classnames";
import { buttonProps } from "./types";

const Button = ({ type, className, children,...props }: buttonProps) => {
  const buttonClasses = classNames({}, className);
  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
export default Button;
