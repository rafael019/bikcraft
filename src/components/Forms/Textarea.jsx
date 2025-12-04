import React from "react";

function Textarea({ name }) {
  return (
    <div>
      <label htmlFor={name}>Mensagem</label>
      <textarea name={name} id={name}></textarea>
    </div>
  );
}

export default Textarea;
