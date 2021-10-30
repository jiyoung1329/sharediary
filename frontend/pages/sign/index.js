import Layout from 'components/layout';
import titleConfigs from 'configs/title';
import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';

const SignPage = () => {
  const a = '';

  return (
    <Layout title={titleConfigs.defaultTitle} isNav={false}>
      <div className={styles['sign-wrapper']}>
        <div className={styles['signin-wrapper']}>
          <div className={styles['signin-title']}>Sign In</div>
          <div className={styles['signin-login-wrapper']}>
            <input type="text" placeholder="ID" />
            <input type="password" placeholder="PASSWORD" />
            <div className={styles['signin-button']}>
              <div>Login</div>
            </div>
          </div>
        </div>
        <div className={styles['signup-wrapper']}>
          <div className={styles['signup-title']}>안녕하세요 !</div>
          <div className={styles['signup-contents']}>나만의 다이어리를 작성해보아요.</div>
          <div className={styles['signup-button']}>
            <div>Sign up</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignPage;
