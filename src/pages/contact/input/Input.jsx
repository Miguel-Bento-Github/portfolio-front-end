import React, { memo } from 'react';

const Input = ({ handleChange, pHolder }) => {
  return (
    <label className={`contact-form-label`} htmlFor={pHolder}>
      <input
        id={pHolder}
        onChange={handleChange}
        className={`input input-${pHolder}`}
        placeholder={pHolder}
        type={pHolder === 'email' ? 'email' : 'text'}
        maxLength={30}
      />
    </label>
  );
};

export default memo(Input);
