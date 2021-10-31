import React, { useEffect, useState } from 'react';
import router from 'next/router';

import ButtonComponents from 'components/button';
import SignInputComponents from 'components/input/sign';

import Layout from 'components/layout';
import titleConfigs from 'configs/title';
import pathConfigs from 'configs/path';

import styles from '../index.module.scss';

const SignPage = () => {
  const handleSignUp = () => {
    router.push(pathConfigs.diary.default);
  };

  return (
    <Layout title={titleConfigs.signUpTitle} isNav={false}>
      <div className={styles['sign-wrapper']}>
        <div className={styles['signin-wrapper']}>
          <div className={styles['signin-title']}>Sign Up</div>
          <div className={styles['signin-login-wrapper']}>
            <SignInputComponents type="text" placeholder="ID" />
            <SignInputComponents type="password" placeholder="PASSWORD" />
            <SignInputComponents type="password" placeholder="PASSWORD CHECK" />
            <ButtonComponents
              loading={false}
              onClick={handleSignUp}
              label="Sign up"
              widthSize="300px"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignPage;
