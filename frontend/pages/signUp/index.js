import React, { useEffect, useState } from 'react';
import router from 'next/router';

import ButtonComponents from 'components/button';
import SignInputComponents from 'components/input/sign';
import Layout from 'components/layout';

import titleConfigs from 'configs/title';
import pathConfigs from 'configs/path';

import signUp from 'utils/account/signUp';
import errorConfigs from 'configs/error';

import styles from 'components/sign/index.module.scss';

const SignPage = () => {
  const [id, setId] = useState();
  const [pwd, setPwd] = useState();
  const [ckpwd, setCkpwd] = useState();

  const handleSignUp = () => {
    if (!id || !pwd || !ckpwd) {
      return alert('모든 값을 입력해주세요');
    }
    if (pwd !== ckpwd) {
      return alert('비밀번호 값이 동일하지 않습니다. 다시 입력해주세요.');
    }
    const onSuccess = (res) => {
      if (res.username && res.username[0] === errorConfigs.existedId.code) {
        return alert(errorConfigs.existedId.msg);
      }
      alert('회원가입이 완료되었습니다!');
      router.push(pathConfigs.default);
    };
    const signInfo = { username: id, password: pwd };
    signUp(signInfo, onSuccess);
  };

  return (
    <Layout title={titleConfigs.signUpTitle} isNav={false}>
      <div className={styles['sign-wrapper']}>
        <div className={styles['signin-wrapper']}>
          <div className={styles['signin-title']}>Sign Up</div>
          <div className={styles['signin-login-wrapper']}>
            <SignInputComponents
              type="text"
              placeholder="ID"
              value={id}
              onChange={({ target: { value } }) => {
                setId(value);
              }}
            />
            <SignInputComponents
              type="password"
              placeholder="PASSWORD"
              value={pwd}
              onChange={({ target: { value } }) => {
                setPwd(value);
              }}
            />
            <SignInputComponents
              type="password"
              placeholder="PASSWORD CHECK"
              value={ckpwd}
              onChange={({ target: { value } }) => {
                setCkpwd(value);
              }}
            />
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
