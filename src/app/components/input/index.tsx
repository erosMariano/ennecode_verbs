import React from "react";

// Ajustar o componente para aceitar refs usando forwardRef
type Props = {
  label: string;
  id: string;
  type?: string;
  error?: string;
};

// Componente Input usando React.forwardRef para permitir refs
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ id, label, type = "text", error, ...rest }, ref) => {
    return (
      <div className="relative">
        <label
          htmlFor={id}
          className="absolute left-2 -top-[10px] px-2 text-white text-xs bg-[#1E1E1E]"
        >
          {label}
        </label>

        <input
          id={id}
          name={id}
          type={type}
          ref={ref}  // Passando a ref para o input
          className={`bg-transparent border text-white pl-4 border-[#FFC62F] rounded w-full h-14 ${
            error ? "border-red-500" : ""
          }`}
          {...rest}
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    );
  }
);

// Adicionar o displayName para facilitar a depuração no DevTools
Input.displayName = "Input";

export default Input;
