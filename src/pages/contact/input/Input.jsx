import React, { useState } from "react";

const Input = ({ handleChange, pHolder }) => {
  const [value, setValue] = useState("");

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
      value={value}
    />
  );
};

export default Input;
