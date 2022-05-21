import React, { useState } from 'react';
import router from 'next/router';

import ButtonComponents from 'components/button';
import SignInputComponents from 'components/input/sign';
import Helmet from 'components/helmet';

import titleConfigs from 'configs/title';
import pathConfigs from 'configs/path';

import signUp from 'utils/account/signUp';
import errorConfigs from 'configs/error';

import styles from './index.module.scss';

const SignUpPage = () => {
  const [id, setId] = useState();
  const [pwd, setPwd] = useState();
  const [ckpwd, setCkpwd] = useState();

  const handleClick = () => {
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
    <>
      <Helmet title={titleConfigs.signUpTitle} />
      <div className={styles['sign-wrapper']}>
        <div className={styles['sign-in-wrapper']}>
          <div className={styles.title}>Sign Up</div>
          <SignInputComponents
            type="text"
            placeholder="ID"
            value={id}
            heightSize={40}
            widthSize={350}
            onChange={({ target: { value } }) => {
              setId(value);
            }}
          />
          <SignInputComponents
            type="password"
            placeholder="PASSWORD"
            value={pwd}
            heightSize={40}
            widthSize={350}
            onChange={({ target: { value } }) => {
              setPwd(value);
            }}
          />
          <SignInputComponents
            type="password"
            placeholder="PASSWORD CHECK"
            value={ckpwd}
            heightSize={40}
            widthSize={350}
            onChange={({ target: { value } }) => {
              setCkpwd(value);
            }}
          />
          <ButtonComponents
            loading={false}
            onClick={handleClick}
            heightSize={40}
            widthSize={350}
            label="Sign up"
          />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
