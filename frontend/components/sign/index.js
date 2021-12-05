/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from 'react';
import router from 'next/router';

import ButtonComponents from 'components/button';
import SignInputComponents from 'components/input/sign';

import Layout from 'components/layout';
import titleConfigs from 'configs/title';
import pathConfigs from 'configs/path';

import signIn from 'utils/account/signIn';

import styles from './index.module.scss';
import errorConfigs from 'configs/error';
import saveSessionStorage from 'utils/account/sessionStorage';

const SignPage = () => {
  const [loading, setLoading] = useState(true);

  const [id, setId] = useState();
  const [pwd, setPwd] = useState();

  const handleSignIn = () => {
    if (!id || !pwd) {
      return alert('모든 값을 입력해주세요.');
    }
    const onSuccess = (res) => {
      if (
        res.non_field_errors &&
        res.non_field_errors[0] === errorConfigs.incorrect.code
      ) {
        return alert(errorConfigs.incorrect.msg);
      }
      router.reload();
      // router.push(pathConfigs.default);
    };
    const onError = (err) => {
      console.error(err);
    };
    const signInfo = { username: id, password: pwd };
    signIn(signInfo, onSuccess, onError);
  };

  const handleSignUp = () => {
    router.push(pathConfigs.signUp);
  };

  return (
    <Layout title={titleConfigs.defaultTitle} isNav={false}>
      <div className={styles['sign-wrapper']}>
        <div className={styles['signin-wrapper']}>
          <div className={styles['signin-title']}>Sign In</div>
          <div className={styles['signin-login-wrapper']}>
            <SignInputComponents
              type="text"
              placeholder="ID"
              value={id}
              onChange={({ target: { value } }) => setId(value)}
            />
            <SignInputComponents
              type="password"
              placeholder="PASSWORD"
              value={pwd}
              onChange={({ target: { value } }) => setPwd(value)}
            />
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
