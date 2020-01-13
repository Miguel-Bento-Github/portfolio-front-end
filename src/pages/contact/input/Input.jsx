import React from "react";

const Input = ({ handleChange, pHolder }) => {
  return (
    <input
      onChange={e => {
        handleChange(e);
        setValue(e.target.value);
      }}
      className={`input  input-${pHolder}`}
      placeholder={pHolder}
      type={pHolder === "email" ? "email" : "text"}
      maxLength={30}
    />
  );
};

export default Input;
