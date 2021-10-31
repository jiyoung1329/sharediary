import React from 'react';

import styles from './sign.module.scss';

const SignInputComponents = ({ placeholder, type }) => (
  <input
    className={styles['input-sign']}
    type={type}
    placeholder={placeholder}
  />
);

export default SignInputComponents;
