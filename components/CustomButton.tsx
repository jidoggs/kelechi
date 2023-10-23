import React from "react";
import { PiSpinnerGapBold } from "react-icons/pi";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: any;
  isloading?: boolean;
}

function CustomButton({
  variant,
  type,
  disabled,
  onClick,
  name,
  children,
  className,
  isloading,
}: Props) {
  return (
    <>
      <button
        disabled={disabled || isloading}
        name={name}
        type={type}
        onClick={onClick}
        className={`rounded-lg ${
          variant
            ? "text-blue_gray-10 border-blue_gray-10 border border-solid bg-white"
            : "bg-cyan-200 text-white"
        } ${
          isloading ? "flex items-center gap-x-2" : ""
        } cursor-pointer py-2 px-12 font-semibold disabled:cursor-not-allowed disabled:bg-slate-200 ${
          className ? className : ""
        } `}
      >
        {isloading && (
          <span>
            <PiSpinnerGapBold />
          </span>
        )}
        {children}
      </button>
    </>
  );
}

export default CustomButton;
