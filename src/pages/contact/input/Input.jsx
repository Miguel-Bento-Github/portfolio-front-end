import React from "react";

const Input = ({ handleChange, pHolder }) => {
  return (
    <input
      onChange={e => handleChange(e)}
      className={`input  input-${pHolder}`}
      placeholder={pHolder}
      type="text"
    />
  );
};

export default Input;
