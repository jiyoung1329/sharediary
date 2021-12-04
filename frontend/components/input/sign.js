import React from 'react';

import styles from './sign.module.scss';

const SignInputComponents = ({ placeholder, type, value, onChange }) => (
  <input
    className={styles['input-sign']}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default SignInputComponents;
