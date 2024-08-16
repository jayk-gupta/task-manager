import React, { Children } from 'react'

function Button({ type = "button", onClick, children, disabled, className }) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`rounded-sm p-2 font-bold ${className} ${
        disabled ? "cursor-not-allowed" : "hover:bg-gray-200"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button