import React, { FC, useState, FocusEvent } from 'react';

import { IInput } from './interfaces/IInput';

const Input: FC<IInput> = ({
  elementRight,
  onClick,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  value,
  placeholder,
  type,
  disabled = false,
  defaultValue,
  readOnly,
  autoComplete,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(e);
    setIsFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    setIsFocused(false);
  };

  return (
    <div>
      <div>
        <input
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={() => setIsFocused(false)}
          autoComplete={autoComplete}
          type={type}
          value={value}
          placeholder={isFocused ? '' : placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onClick={onClick}
          disabled={disabled}
          defaultValue={defaultValue}
          readOnly={readOnly}
          className={className}
        />
      </div>
      <div>{elementRight}</div>
    </div>
  );
};

export default Input;
