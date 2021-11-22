import React from 'react';

import styles from './index.module.scss';

const Input = ({
  label,
  placeholder = '',
  inputType = 'text',
  value,
  onChange,
  onKeyDown = null,
}) => (
  <div className={styles.container}>
    <div className={styles.label}>{label}</div>
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={inputType}
      onKeyDown={onKeyDown}
    />
  </div>
);

export default Input;
