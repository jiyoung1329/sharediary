import React from 'react';

import styles from './sign.module.scss';

const SignInputComponents = ({
  placeholder,
  type,
  value,
  onChange,
  widthSize,
  heightSize,
}) => (
  <input
    className={styles.input}
    type={type}
    placeholder={placeholder}
    value={value}
    style={{ width: widthSize, height: heightSize }}
    onChange={onChange}
  />
);

export default SignInputComponents;
