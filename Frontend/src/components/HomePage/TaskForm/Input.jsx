import React from 'react'

function Input({
  value,onchange,placeholder,type="text",className
}) {
  return (
    <div>
      <label htmlFor="">{title}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onchange}
        className={`bg-white text-sm text-gray-300 outline-none focus:border-none ${className}`}
      />
      {}
    </div>
  );
}

export default Input