import React, { forwardRef } from 'react';

const Input = forwardRef(({ handleChange, pHolder, value = '' }, ref) => {
  if (pHolder === 'message') {
    return (
      <label className='contact-form-label' htmlFor='text-message'>
        <textarea
          ref={ref}
          value={value}
          id={pHolder}
          onChange={handleChange}
          className='input input-message'
          placeholder='please input your message here...'
          type='text'
          maxLength={350}
        />
      </label>
    );
  }

  return (
    <label className={`contact-form-label`} htmlFor={pHolder}>
      <input
        ref={ref}
        value={value}
        id={pHolder}
        onChange={handleChange}
        className={`input input-${pHolder}`}
        placeholder={pHolder}
        type={pHolder === 'email' ? 'email' : 'text'}
        maxLength={30}
      />
    </label>
  );
});

export default Input;
