import React from 'react';

import styles from './index.module.scss';

const Input = ({
  placeholder = null,
  inputType = 'text',
  value,
  onChange,
  onKeyDown = null,
  heightSize,
  widthSize,
}) => (
  <input
    className={styles.input}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={inputType}
    onKeyDown={onKeyDown}
    style={{ height: heightSize, width: widthSize }}
  />
);

export default Input;
