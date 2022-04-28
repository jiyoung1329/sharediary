import React from 'react';

import styles from './index.module.scss';

const ButtonComponents = ({ onClick, label, widthSize, heightSize }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles['button-primary']}
    style={{ width: widthSize, height: heightSize }}
  >
    {label}
  </button>
);

export default ButtonComponents;
