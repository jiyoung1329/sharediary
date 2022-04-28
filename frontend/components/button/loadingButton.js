import React from 'react';
import ReactLoading from 'react-loading';

import styles from './loadingButton.module.scss';

const LoadingButton = ({
  loading = false,
  onClick,
  label,
  widthSize,
  heightSize,
  loadingSize = 15,
  loadingColor = 'white',
}) => {
  const size = `${loadingSize}px`;
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles['button-primary']}
      style={{ width: widthSize, height: heightSize }}
    >
      <div style={{ width: size, height: size }} />
      {label}
      {loading ? (
        <ReactLoading
          type="spin"
          color={loadingColor}
          width={size}
          height={size}
        />
      ) : (
        <div style={{ width: size, height: size }} />
      )}
    </button>
  );
};

export default LoadingButton;
