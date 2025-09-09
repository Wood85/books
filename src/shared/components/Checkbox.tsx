"use client";

import { useState } from "react";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({ label, checked = false, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden"
      />

      <span
        className={`
          w-5 h-5 flex items-center justify-center rounded border-2 transition-colors
          ${isChecked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-400"}
        `}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M16.704 5.29a1 1 0 010 1.42l-7.414 7.414a1 1 0 01-1.42 0L3.296 9.12a1 1 0 111.408-1.42l4.166 4.168 6.708-6.708a1 1 0 011.42 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
      <span className="text-white">{label}</span>
    </label>
  );
}