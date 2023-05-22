import React, { useState } from "react";

type CustomInputFormProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  //   onChange?: (
  //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextArea?: boolean;
  isFormSubmitted: boolean;
};

const CustomInputForm: React.FC<CustomInputFormProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  onBlur,
  isTextArea = false,
  isFormSubmitted,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(false);
    setIsTouched(true);
    onBlur && onBlur(e); // Invoke onBlur function if provided
  };

  return (
    <div className="my-4">
      <label className="block font-medium text-gray-700 mb-1">
        <div className="relative">
          {isTextArea ? (
            <textarea
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`form-input w-full rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 ${
                isFocused ? "focus:ring-2 ring-blue-500" : ""
              }`}
            />
          ) : (
            <input
              name={name}
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`form-input w-full rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 ${
                isFocused ? "focus:ring-2 ring-blue-500" : ""
              }`}
            />
          )}
          {isTouched && !value && !isFormSubmitted && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-2 0v4a1 1 0 002 0V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default CustomInputForm;
