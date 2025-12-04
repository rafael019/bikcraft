import React, { Children } from "react";

function Button({ name, type, children, classe }) {
  return (
    <button name={name} type={type} className={classe}>
      {children}
    </button>
  );
}

export default Button;
