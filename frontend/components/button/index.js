import React from 'react';
import ReactLoading from 'react-loading';

import styles from './index.module.scss';

const ButtonComponents = ({
  loading,
  onClick,
  label,
  widthSize,
  loadingSize,
  loadingColor,
  isSignUp = false,
}) => {
  const size = `${loadingSize}px`;
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles[`button-primary${isSignUp ? '-signUp' : ''}`]}
      style={{ width: widthSize }}
    >
      <div style={{ width: size, height: size }} />
      {label}
      {loading ? (
        <ReactLoading
          type="spin"
          color={loadingColor}
          width={loadingSize}
          height={loadingSize}
        />
      ) : (
        <div style={{ width: size, height: size }} />
      )}
    </button>
  );
};

export default ButtonComponents;
