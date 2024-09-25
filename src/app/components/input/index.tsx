import React from "react";
type Props = {
  label: string;
  id: string
}
function Input({id, label}: Props) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="caprismo absolute left-2 -top-[10px] px-2 text-white text-xs bg-[#1E1E1E]"
      >
        {label}
      </label>

      <input
        type="text"
        id={id}
        name={id}
        className="bg-transparent poppins border --font-poppins text-white pl-4 border-[#FFC62F] rounded w-full h-14"
      />
    </div>
  );
}

export default Input;
