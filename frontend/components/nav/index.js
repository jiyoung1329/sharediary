import React from 'react';
import Link from 'next/link';

import pathConfigs from 'configs/path';

import styles from './index.module.scss';

const NavComponent = () => {
  const handleSignOut = () => {};

  return (
    <div className={styles['nav-wrapper']}>
      <div className={styles['nav-contents']}>
        <div className={styles['nav-left']}>
          <Link href={pathConfigs.diary.create}>
            <a>
              <img alt="create" src="/icons/create.png" />
            </a>
          </Link>
        </div>
        <Link href={pathConfigs.diary.default}>
          <a>
            <div className={styles.logo}>끄적끄적</div>
          </a>
        </Link>
        <div className={styles['nav-right']}>
          <div className={styles.button} onClick={handleSignOut}>
            로그아웃
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
