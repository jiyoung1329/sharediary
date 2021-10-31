import React from 'react';
import Link from 'next/link';
import router from 'next/router';

import pathConfigs from 'configs/path';

import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './index.module.scss';

const NavComponent = () => {
  const handleSignOut = () => {
    router.push('/');
  };

  return (
    <div className={styles['nav-wrapper']}>
      <div className={styles['nav-contents']}>
        <div className={styles['nav-left']}>
          <Link href={pathConfigs.diary.create}>
            <a>
              <i className={`bi bi-pencil-square ${styles['navbar-create']}`} />
            </a>
          </Link>
        </div>
        <Link href={pathConfigs.diary.default}>
          <a>
            <div className={styles.logo}>끄적끄적</div>
          </a>
        </Link>
        <div className={styles['nav-right']}>
          <div onClick={handleSignOut}>로그아웃</div>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
