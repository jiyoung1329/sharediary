import React from 'react';

import styles from './index.module.scss';

const ButtonComponents = ({ onClick, label, widthSize }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles['button-primary']}
    style={{ width: widthSize }}
  >
    {label}
  </button>
);

export default ButtonComponents;
