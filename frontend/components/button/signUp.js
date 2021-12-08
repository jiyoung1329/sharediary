import React from 'react';

import styles from './signUp.module.scss';

const SignUpButton = ({ onClick, label, widthSize }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles['button-primary-signUp']}
    style={{ width: widthSize }}
  >
    {label}
  </button>
);

export default SignUpButton;
