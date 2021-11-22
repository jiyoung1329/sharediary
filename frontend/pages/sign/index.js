/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from 'react';
import router from 'next/router';

import ButtonComponents from 'components/button';
import SignInputComponents from 'components/input/sign';

import Layout from 'components/layout';
import titleConfigs from 'configs/title';
import pathConfigs from 'configs/path';

import styles from './index.module.scss';

const SignPage = () => {
  const [loading, setLoading] = useState(true);

  const handleSignIn = () => {
    router.push(pathConfigs.diary.default);
  };

  const handleSignUp = () => {
    router.push(pathConfigs.sign.signUp);
  };

  return (
    <Layout title={titleConfigs.defaultTitle} isNav={false}>
      <div className={styles['sign-wrapper']}>
        <div className={styles['signin-wrapper']}>
          <div className={styles['signin-title']}>Sign In</div>
          <div className={styles['signin-login-wrapper']}>
            <SignInputComponents type="text" placeholder="ID" />
            <SignInputComponents type="password" placeholder="PASSWORD" />
            <ButtonComponents
              loading={false}
              onClick={handleSignIn}
              label="Login"
              widthSize="300px"
            />
          </div>
        </div>
        <div className={styles['signup-wrapper']}>
          <div className={styles['signup-title']}>안녕하세요 !</div>
          <div className={styles['signup-contents']}>
            나만의 다이어리를 작성해보아요.
          </div>
          <ButtonComponents
            isSignUp={true}
            loading={false}
            onClick={handleSignUp}
            label="Sign up"
            widthSize="300px"
          />
        </div>
      </div>
    </Layout>
  );
};

export default SignPage;
