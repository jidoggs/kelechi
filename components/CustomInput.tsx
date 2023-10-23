import React, { useId, useRef, useState } from "react";
import clsx from "clsx";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  rules?: RegExp;
  haserror?: boolean;
  errortext?: string;
}

const initialstate = {
  showPassword: false,
};

function CustomInput({
  label,
  type,
  name,
  className,
  containerClassName,
  rules,
  labelClassName,
  haserror,
  errortext,
  ...props
}: props) {
  const id = useId();
  const [inputState, setInputState] = useState(initialstate);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const passwordHandler = () => {
    setInputState((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  return (
    <div className={clsx("form_group relative flex-1", containerClassName)}>
      {label ? (
        <label
          className={clsx(
            "mb-2 text-base font-medium text-base-20 inline-block",
            labelClassName
          )}
          htmlFor={`${id}-${name ? name : "temp"}`}
        >
          {label}
        </label>
      ) : null}
      <div className="relative flex-1">
        <input
          {...props}
          className={clsx(
            "h-[3.75rem] w-full rounded-xl border bg-inputbg pt-2 pb-3 pl-4 text-black placeholder:text-base placeholder:text-gray-600",
            type === "password" && "pr-12",
            haserror ? "border-red-10" : "border-blue-50",
            type === "color" && "h-0 w-0 cursor-pointer p-0 opacity-0",
            className
          )}
          name={name}
          id={`${id}-${name ? name : "temp"}`}
          type={inputState.showPassword ? "text" : type}
          data-rules={rules}
          data-haserror={haserror}
          ref={inputRef}
          data-testid="custom-input"
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-black "
            onClick={passwordHandler}
            data-testid="password-icon"
          >
            {inputState.showPassword ? (
              <BsEyeSlashFill data-testid="show-password" />
            ) : (
              <BsEyeFill data-testid="hide-password" />
            )}
          </button>
        )}
      </div>
      {haserror && (
        <p
          data-testid="error-text"
          className="error-text-class absolute -bottom-4 right-0 mt-0.5 text-right text-xs text-red-10"
        >
          {errortext ? errortext : "invalid value"}
        </p>
      )}
    </div>
  );
}

const InputMemo = React.memo(CustomInput);

export default InputMemo;
