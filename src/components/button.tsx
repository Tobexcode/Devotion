import React, { ButtonHTMLAttributes } from "react";
import { ArrowCircleRight } from "iconsax-react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`items-center flex gap-[15px] font-mazzardM text-[16px] rounded-[10px] tracking-[0.2rem] ${className}`}
      {...props}
    >
      {children}
      <ArrowCircleRight />
    </button>
  );
};

export default Button;
