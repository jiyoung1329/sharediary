import React from 'react';

import styles from './signUp.module.scss';

const SignUpButton = ({ onClick, label, widthSize, heightSize }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles['button-primary-signUp']}
    style={{ width: widthSize, height: heightSize }}
  >
    {label}
  </button>
);

export default SignUpButton;
