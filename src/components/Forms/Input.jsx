import React from "react";

function Input({ name, type, label, placeholder }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}

export default Input;
