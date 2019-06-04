import React from "react";

const Input = ({ handleChange, pHolder }) => {
  return (
    <input
      onChange={e => handleChange(e)}
      className="input"
      placeholder={pHolder}
      type="text"
      required
    />
  );
};

export default Input;
